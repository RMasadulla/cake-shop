export default function ActionBtnCustom({
  children,
  BtnCustomStyle,
  ...props
}) {
  return (
    <button
      {...props}
      className={`bg-gray-900 text-white inline-flex items-center justify-center gap-3 py-2 px-6 rounded-md hover:text-gray-900 hover:bg-white ring-1 ring-transparent hover:ring-gray-900 transition-all duration-300 ${BtnCustomStyle}`}
    >
      {children}
    </button>
  );
}
