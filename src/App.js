import React, { useState } from "react";
import { create } from "ipfs-http-client";
const client = create('https://ipfs.infura.io:5001/api/v0');

function App() {
  const [ipfsfile, setIpfsFile] = useState("");

  const hand = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        console.log(result)
        setIpfsFile(`https://ipfs.infura.io/ipfs/${result.path}`)
      } catch (error){
        console.log("ipfs image upload error: ", error)
      }
    }
  }
   
  
  return (
    <div className="App">
      <h1>Load file using React/IPFS</h1>
      <h2>File Path is { ipfsfile }</h2>
      <input type= "file" onChange={(r)=>hand(r)} />
    </div>
  );
}

export default App;
