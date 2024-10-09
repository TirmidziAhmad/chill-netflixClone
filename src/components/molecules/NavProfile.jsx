import React from "react";
import Profile from "../atomic/Profile";
import ListDropDown from "../atomic/ListDropDown";

function ProfileDropDown() {
  return (
    <div className="flex">
      <Profile />
      <ListDropDown />
    </div>
  );
}

export default ProfileDropDown;
