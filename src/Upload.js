import React from 'react'
import { Link } from "react-router-dom"

// import ImagesExample from './'
export default function() {
  return (
    <div>
     <div className='container'>
     <img src='https://www.pngall.com/wp-content/uploads/2016/06/Fingerprint-Free-Download-PNG.png' height={'500px'} width={"500px"} margin={'51px'}></img>
     </div>
        <button type="button" class="btn btn-primary btn-lg">UPLOAD</button>
        <p>upload Fingerprint here</p>
      <br></br>
      <br></br>

      <Link to="/search" margin={'51px'}>
      <button type="button" class="btn btn-success">Submit</button>
      </Link>
        
    </div>
  )
}
