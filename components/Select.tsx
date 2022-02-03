function Select({ children, ...props }) {
  return (
    <select
      className="w-full rounded-xl border-gray-300 shadow-sm focus:ring focus:ring-blue-100 focus:border-blue-400 transition duration-200"
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;
