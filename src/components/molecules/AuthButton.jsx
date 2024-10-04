import Button from "../atomic/Button";

function AuthButton({ firstButton, secondButton, onClickFirstButton, onClickSecondButton }) {
  const AuthButtonChildrens = {
    login: "Masuk",
    register: "Daftar",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-3">
      <Button onClick={onClickFirstButton} style="third">
        {AuthButtonChildrens[firstButton]}
      </Button>
      <p>Atau</p>
      <Button onClick={onClickSecondButton} style="fourth">
        {AuthButtonChildrens[secondButton]} Dengan Google
      </Button>
    </div>
  );
}

export default AuthButton;
