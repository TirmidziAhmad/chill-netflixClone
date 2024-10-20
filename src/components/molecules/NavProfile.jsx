import Profile from "../atomic/Profile";
import ListDropDown from "../atomic/ListDropDown";
import useAuthStore from "../../store/AuthStore";
import ButtonLink from "../atomic/ButtonLink";
function ProfileDropDown() {
  const { isAuthenticated } = useAuthStore();
  return (
    <div className="flex justify-center items-center n">
      <div className="flex justify-center">
        {isAuthenticated ? (
          <>
            <Profile />
            <ListDropDown />
          </>
        ) : (
          <>
            <ButtonLink to="/login" style="first">
              Masuk
            </ButtonLink>
            <ButtonLink to="/register" style="second">
              Daftar
            </ButtonLink>
          </>
        )}
      </div>
    </div>
  );
}
export default ProfileDropDown;
