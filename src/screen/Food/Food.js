import React from 'react'
import './style.css'
import item from '../../data/food.json'
const Food = () => {
  return (
    <div className='vagetable-body'>
    <div className='card'>
      {item.map((item,index)=>{
        return(
            <div><img className='img' height='150' width='200' src={item.food}/>
            <div className='card-tittle'>
              <h1 className='price'>altamas</h1>
            </div>
            </div>
        )
      })}   
    
    </div>
</div>
  )
}

export default Food