import React from 'react'
import './style.css'
import item from '../../data/vegetable.json'
const Vegetable = () => {
  return (
    <div className='vagetable-body'>
        <div className='card'>
          {item.map((item,index)=>{
            return(
                <div><img className='img' height='150' width='200' src={item.vagetableName}/>
                <div style={{backgroundColor:'#00aaff',height:20,margin:10}}></div>
                </div>
            )
          })}   
        
        </div>
    </div>
  )
}

export default Vegetable