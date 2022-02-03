export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className
          ? className
          : "bg-blue-500 hover:bg-blue-700 focus:ring-blue-200 "
      } transition flex flex-row focus:outline-none focus:ring duration-300 text-white px-5 py-2.5 rounded-xl font-semibold text-sm`}
    >
      {children}
    </button>
  );
}
