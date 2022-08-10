import React from 'react'
import '../styleComponents/Fields.css';
const fields = () => {
  return (
    <div>       
   <label class="custom-field three">
    <input type="text" placeholder="&nbsp;"/>
    <span class="placeholder">Image ID</span>
    <span class="border"></span>
  </label>
  <label class="custom-field three">
    <input type="text" placeholder="&nbsp;"/>
    <span class="placeholder">Image name</span>
    <span class="border"></span>
  </label>
  </div>
  )
}

export default fields
