function Input({ labelText, type = "text", placeholder, style = "first" }) {
  const styles = {
    first: "bg-transparent border rounded-3xl px-4 py-2",
    second: "bg-gray-100 border border-gray-300 rounded px-4 py-2",
  };

  return (
    <div className=" flex  flex-col mt-5">
      <label htmlFor={labelText}>{labelText}</label>
      <input type={type} placeholder={placeholder} className={styles[style]} />
    </div>
  );
}
export default Input;
