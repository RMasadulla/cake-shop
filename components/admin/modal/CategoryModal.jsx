import { FiX } from "react-icons/fi";
import CategoryForm from "../form/CategoryForm";

export default function CategoryModal({ isOpen, onClose, category }) {
  return (
    <>
      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Modal Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FiX className="h-6 w-6" />
            </button>

            <h2 className="text-xl font-bold mb-4 dark:text-white">
              {category ? "Update Category" : "Create New Category"}
            </h2>

            <CategoryForm category={category} onSuccess={onClose} />
          </div>
        </div>
      )}
    </>
  );
}
