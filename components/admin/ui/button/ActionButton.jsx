import { FiPlus } from "react-icons/fi";

export default function ActionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full md:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      <FiPlus className="mr-2 h-4 w-4" />
      Add New
    </button>
  );
}
