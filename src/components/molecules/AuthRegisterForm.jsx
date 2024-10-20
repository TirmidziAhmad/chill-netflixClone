import Input from "../atomic/Input";
function AuthRegisterForm({ userName, password, setUserName, setPassword, confirmPassword, setConfirmPassword, onSubmit, children }) {
  return (
    <form action="POST" onSubmit={onSubmit} className="flex flex-col">
      <Input labelText="Username" placeholder="Masukkan username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

      <Input labelText="Kata Sandi" placeholder="Masukkan kata sandi" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Input labelText="Konfirmasi Kata Sandi" placeholder="Masukkan kata sandi" type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      {children}
    </form>
  );
}

export default AuthRegisterForm;
