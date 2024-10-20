function Input({ labelText, style = "first", ...props }) {
  const styles = {
    first: "bg-transparent border rounded-3xl px-4 py-2",
    second: "bg-gray-700 border border-gray-600 rounded px-4  h-full",
  };

  return (
    <div className="flex  flex-col mt-3">
      <label htmlFor={labelText}>{labelText}</label>
      <input {...props} className={styles[style] + props.className} />
    </div>
  );
}
export default Input;
