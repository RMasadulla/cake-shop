export const ConfirmToast = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
      <p className="text-gray-800 dark:text-gray-200 mb-4">{message}</p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
