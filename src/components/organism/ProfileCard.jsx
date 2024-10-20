import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atomic/Button";
import Input from "../atomic/Input";
import useAuthStore from "../../store/AuthStore";

function ProfileCard() {
  const navigate = useNavigate();
  const { user, updateUser, deleteUser, logout } = useAuthStore();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        password: "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const updatedUserData = {
        ...user,
        ...formData,
      };
      updateUser(updatedUserData);
      alert("Profile updated successfully!");
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      deleteUser(user.id);
      logout();
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col md:w-1/2">
      <div className="flex flex-col">
        <div className="flex mt-4 gap-5">
          <figure className="rounded-full">
            <img src="proofile.png" alt="user profile" className="w-24 h-24" />
          </figure>
          <div className="flex flex-col justify-center items-center">
            <Button className="flex">Ubah Foto</Button>
            <p className="text-sm">Maksimal 2MB</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mr-14">
          <Input labelText="Nama Pengguna" style="second" type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="username" className="w-64 h-10" />
          <Input labelText="Email" style="second" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="email" className="w-64 h-10" />
          <Input labelText="Kata Sandi" style="second" type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="password" className="w-64 h-10" />
          <div className="flex gap-8 mt-4">
            <Button style="first" type="submit">
              Simpan
            </Button>
            <Button style="fourth" onClick={handleDeleteAccount} type="button">
              Hapus Akun
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
