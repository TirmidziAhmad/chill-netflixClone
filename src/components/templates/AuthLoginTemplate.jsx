import AuthLoginCard from "../organism/AuthLoginCard";

function AuthLoginTemplate({ className }) {
  return (
    <div className={`flex items-center justify-center h-screen bg-cover bg-center  ${className} `}>
      <AuthLoginCard />
    </div>
  );
}
export default AuthLoginTemplate;
