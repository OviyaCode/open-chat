import React, { useState } from "react";

const App = () => {
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const handleUserNameClick = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
  };
  return (
    <>
      <div onClick={handleUserNameClick} style={{cursor:"pointer"}}>User Name</div>

      {isChatBoxOpen && (
        <div style={{zIndex:1, bottom:0, position:"absolute", background:"#f6f6f6", border:"5px solid #333", width:"300px", height:"500px"}}>
        <p role="button" style={{cursor:"pointer", color:"#f00", display:"inline-block", padding:"10px", textAlign:"center", margin:"2px 3px", float:"right"}} onClick={handleUserNameClick}>X</p>
        </div>
      )}
    </>
  );
};

export default App;
