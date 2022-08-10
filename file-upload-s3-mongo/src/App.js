import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Fields from "./components/Fields";
function App() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
    <>
		<div className="wrapper">
       <Dropdown />
       <div>
       <h5>Add Image</h5>
       <input type="file" onChange={handleChange} />
       <img src={file} />
    </div>
			
      <div className="">
      <Fields />
      </div>
     
    </div>
 
    </>
	);
}

export default App;

