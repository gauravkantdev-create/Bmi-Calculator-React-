import React, { useMemo, useState } from 'react'
import'./App.css'

const App = () => {
 const [height,setHeight] = useState(180);
 const [weight,setWeight] = useState(70);
 const output= useMemo(()=>{
  const calculateHeight=height/100;
  return( weight/
    (calculateHeight*calculateHeight)).toFixed (1)
  },[weight,height]);
  


function onWeightChange(event){
  setWeight(event.target.value)
}
function onHeightChange(event){
  setHeight(event.target.value)
}
  return (
 <main> 
  
  <h1> THE BMI CALCULATOR </h1>
  <div className='input-section'>
    <p className='slider-output'>
      <h1> weight:{weight}</h1>
    </p>
   <input className='input-slider'
   type='range'
   step="1"
   min="40"
   max="200"
   onChange={onWeightChange}/>
  <p className='slider-output'>
    <h1>
       Height:{height} </h1>
  </p>
  <input   className='input-slider' 
   type='range'
      min="140"
   max="220" 
   onChange={onHeightChange}
 />
  </div>
  <div className='output-section'>
    <div className='bmi'>
    <h1><p> 
  Your BMI is
</p>
<p className='output'> {output}
</p></h1>
</div>
  </div>
</main>
  )
}

export default App