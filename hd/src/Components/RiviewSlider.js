import React, { useState } from 'react'
import mydata from "./data.js"
import './RiviewSlider.css'

export default function RiviewSlider(){

    const[index,setIndex] = useState(0);

    const next = () => {
        if (index < mydata.length - 1){

          console.log(mydata.length,"lllll")
          setIndex(index + 1)
        }
        else {
          setIndex(0)
        }
      }
    
      const pre = () => {
    
        if (index <= 0) {

          console.log(index , "kkkkk")
          setIndex(mydata.length - 1)
        }
        else {
          setIndex(index - 1)
        }
      }

      
  return (
    <div className='mainContainer'>
    <div className="card">
      <div className='imgdiv'>
      <img className="card-img-top" src={mydata[index].image} alt="Card image" />
      </div>
      <div className="cardbody">
        <h4 className="card-title">{mydata[index].name}</h4>
        <p className="card-text"> Age :{mydata[index].age}</p>
         
         <h5>{mydata[index].detail}</h5>
      </div>
    </div>
    <div className='Btns'>
      <button type="button" className="btn btn-dark" onClick={pre}>prev</button>
      <button type="button" className="btn btn-dark" onClick={next}>next</button>
    </div>
  </div>
  )
}
