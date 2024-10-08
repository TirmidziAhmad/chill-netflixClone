import React from "react";
import Input from "../atomic/Input";
function AuthRegisterForm({ className }) {
  return (
    <form action="POST" className="flex flex-col">
      <Input labelText="Username" placeholder="Masukkan username" type="text"></Input>

      <Input labelText="Kata Sandi" placeholder="Masukkan kata sandi" type="text"></Input>

      <Input labelText="Konfirmasi Kata Sandi" placeholder="Masukkan kata sandi" type="text"></Input>
    </form>
  );
}

export default AuthRegisterForm;
