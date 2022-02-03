function Label({ children, forInput }) {
  return (
    <label htmlFor={forInput} className="block mb-1 capitalize text-gray-700">
      {children}
    </label>
  );
}

export default Label;
