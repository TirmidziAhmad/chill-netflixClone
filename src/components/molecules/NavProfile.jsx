import Profile from "../atomic/Profile";
import ListDropDown from "../atomic/ListDropDown";
function ProfileDropDown() {
  return (
    <div className="flex justify-center items-center n">
      <div className="flex justify-center">
        <Profile />
        <ListDropDown />
      </div>
    </div>
  );
}
export default ProfileDropDown;
