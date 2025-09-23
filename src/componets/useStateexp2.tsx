import React, { useState } from "react";

interface UserInfo {
    name : string;
    lastname : string
}

const UserComp = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name : "John",
    lastname : "Doe"
  })

  return <>
  <h4>{userInfo.name} {userInfo.lastname}</h4>
  <input type="text"
  value={userInfo.name}
  onChange={(e) => {
    setUserInfo({
        ...userInfo,
        name : e.target.value,
    })
  }}
  />

  <input type="text"
  value={userInfo.lastname}
  onChange={(e) => {
    setUserInfo({
        ...userInfo,
        lastname : e.target.value,
    })
  }}
  />
  </>

}
export default UserComp