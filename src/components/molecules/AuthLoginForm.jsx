import Input from "../atomic/Input";
function AuthLoginForm({ userName, password, setUserName, setPassword, onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <Input labelText="Username" placeholder="Masukkan username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <Input labelText="Kata Sandi" placeholder="Masukkan kata sandi" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {children}
    </form>
  );
}

export default AuthLoginForm;
