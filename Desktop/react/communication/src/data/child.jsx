

 import React, { useState } from 'react';

export default function Child() {

  const [username, setUsername] = useState('');


  const helloworld = () => {
   console.log(username); 
  };

   return (
     <div>

       <h1>Child Component</h1>
       <label>Username</label>
      <input 
        type="text" 
        value={username} 
       onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={helloworld}>Submit</button>
      
    </div>
   );
 }

