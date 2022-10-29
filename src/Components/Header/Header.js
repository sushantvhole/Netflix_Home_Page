import React from 'react'

const Header = () => {
  return (
  <>
     <div className='Header'>
    <img src={require("../../assets/netflix.png")} alt="" />
    <div>
      <select>
        <option value=""></option>
      </select>
    </div>
     </div>
  </>
  
  )
}

export default Header