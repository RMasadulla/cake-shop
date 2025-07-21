import {
  useCreateCategory,
  useUpdateCategory,
} from "@/hooks/useCategoryMutations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function CategoryForm({ category, onSuccess }) {
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const createMutation = useCreateCategory();
  const updateMutation = useUpdateCategory();

  useEffect(() => {
    if (category?.image) {
      setImagePreview(category.image);
    }
  }, [category]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(category?.image || null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);

    try {
      if (category) {
        // If updating and no new image selected, remove image from formData to keep the existing one
        if (!fileInputRef.current?.files[0]) {
          formData.delete("image");
        }
        await updateMutation.mutateAsync({ id: category.id, formData });
      } else {
        await createMutation.mutateAsync(formData);
      }
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    }
  };

  const isSubmitting = createMutation.isPending || updateMutation.isPending;

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category Name
        </label>
        <input
          name="name"
          placeholder="Enter category name"
          defaultValue={category?.name}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category Image
        </label>
        {imagePreview && (
          <div className="mb-2 flex items-center">
            <Image
              src={imagePreview}
              alt="Preview"
              width={100}
              height={100}
              className="h-16 w-16 object-cover rounded-md"
            />
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              {fileInputRef.current?.files[0]
                ? "New image selected"
                : "Current image"}
            </span>
          </div>
        )}
        <input
          type="file"
          name="image"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          required={!category}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
            dark:file:bg-gray-600 dark:file:text-gray-100"
        />
        {category?.image && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {fileInputRef.current?.files[0]
              ? "Current image will be replaced"
              : "Leave empty to keep current image"}
          </p>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => onSuccess?.()}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <FaSpinner className="animate-spin mr-2" />
              {category ? "Updating..." : "Creating..."}
            </span>
          ) : (
            <span>{category ? "Update" : "Create"}</span>
          )}
        </button>
      </div>
    </form>
  );
}
