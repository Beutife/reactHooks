import { useState,useEffect } from "react";


const UseEffect = () => {
   
    const [userName, setUserName] = useState("")
     useEffect (() => {
        setTimeout(()=>{
            setUserName("John");
        }, 1500)
     }, [])
    return<>
      <h4>{userName}</h4>
      <input type="text"
      value={userName}
      onChange={(e)=> setUserName(e.target.value)}
      />
    </>

}
export default UseEffect