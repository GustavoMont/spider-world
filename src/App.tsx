import React, { useEffect } from 'react';

const App: React.FC = () => {

  useEffect(() =>{
    (async () =>{
      const req = await fetch('https://api.github.com/users/gustavomont');
      const userInfo = await req.json()
      console.log(userInfo);
    })()
  },[])


  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
