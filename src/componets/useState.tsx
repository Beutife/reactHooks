import React from 'react'
import { useState} from 'react';

const Usestate = () => {
   const [name, setName] =useState('');

   return <>
   <div>
    <label htmlFor="name">Name</label>
    <input type="text" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
     />
   </div>
   </>

}

export default Usestate;