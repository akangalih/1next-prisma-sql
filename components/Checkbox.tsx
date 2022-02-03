function Checkbox({ forInput, label, ...props }) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        {...props}
        className="text-blue-500 border-gray-300 focus:outline-none focus:ring-transparent shadow-sm rounded"
        type="checkbox"
      />
      <label htmlFor={forInput} className=" text-gray-600">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
