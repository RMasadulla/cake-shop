const ComponentCard = ({ title = "", children, className = "", desc = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {/* Card Header */}
      <div className={title || desc ? "px-6 py-5" : "p-0"}>
        {title && (
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            {title}
          </h3>
        )}

        {desc && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div
        className={
          title || desc
            ? "border-t p-4 sm:p-6 border-gray-100 dark:border-gray-800"
            : "border-none p-4 sm:p-6"
        }
      >
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default ComponentCard;
