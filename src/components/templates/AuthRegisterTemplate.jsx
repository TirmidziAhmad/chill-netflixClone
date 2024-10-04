import AuthRegisterCard from "../organism/AuthRegisterCard";

function AuthRegisterTemplate({ className }) {
  return (
    <div className={`flex items-center justify-center h-screen bg-cover bg-center  ${className} `}>
      <AuthRegisterCard />
    </div>
  );
}
export default AuthRegisterTemplate;
