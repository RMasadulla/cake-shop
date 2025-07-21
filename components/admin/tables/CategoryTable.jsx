import { deleteCategory, getAllCategories } from "@/app/actions/category";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { ConfirmToast } from "../ui/ConfirmToast";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
export default function CategoryTable({ onEditCategory }) {
  const queryClient = useQueryClient();

  // Fetch categories
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const data = await getAllCategories();
        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    retry: 2, // Retry failed requests twice
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  // Delete mutation
  const { mutate: deleteCategoryMutation, isPending: isDeleting } = useMutation(
    {
      mutationFn: async (categoryId) => {
        const response = await deleteCategory(categoryId);
        if (!response.success) {
          throw new Error(response.error || "Failed to delete category");
        }
        return categoryId; // Return the ID for optimistic updates
      },
      onMutate: async (categoryId) => {
        await queryClient.cancelQueries({ queryKey: ["categories"] });
        const previousCategories = queryClient.getQueryData(["categories"]);
        queryClient.setQueryData(["categories"], (old) =>
          old.filter((cat) => cat.id !== categoryId)
        );
        return { previousCategories };
      },
      onError: (error, categoryId, context) => {
        queryClient.setQueryData(["categories"], context.previousCategories);
        toast.error(error.message);
      },
      onSuccess: () => {
        toast.success("Category deleted successfully");
      },
    }
  );

  // const handleDelete = (categoryId) => {
  //   if (window.confirm("Are you sure you want to delete this category?")) {
  //     deleteCategoryMutation(categoryId);
  //   }
  // };

  const handleDelete = (categoryId) => {
    toast(
      <ConfirmToast
        message="Are you sure you want to delete this category?"
        onConfirm={() => {
          toast.dismiss();
          deleteCategoryMutation(categoryId);
        }}
        onCancel={() => toast.dismiss()}
      />,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
        draggable: false,
        closeOnClick: false,
        className: "!p-0 !bg-transparent !shadow-none",
        bodyClassName: "!p-0",
      }
    );
  };

  if (isLoading)
    return <div className="p-4 text-center">Loading categories...</div>;
  if (isError)
    return (
      <div className="p-4 text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Image
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {categories?.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="h-16 w-auto overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      src={category.image || "/user.png"}
                      alt={category.name}
                      className="h-full w-auto object-contain rounded-sm"
                    />
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {category.name}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  <ul className="flex items-center gap-3">
                    <li>
                      <Link href={`#view-${category.id}`}>
                        <FaEye className="text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 transition-all duration-75" />
                      </Link>
                    </li>
                    <li>
                      <button onClick={() => onEditCategory(category)}>
                        <FaEdit className="text-xl text-blue-700 hover:text-blue-600 transition-all duration-75" />
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleDelete(category.id)}
                        disabled={isDeleting}
                        className="disabled:opacity-50"
                      >
                        <MdOutlineDelete className="text-xl text-red-700 hover:text-red-600 transition-all duration-75" />
                      </button>
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
