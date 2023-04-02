import React, { useState } from 'react'

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false)
  const sidebarDownHandle = () => {
    setOpen(!open)
  }
  if (item.childrens) {
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className='sidebar-tittle'>
          <span>
            <i className={item.icon}></i>
            {item.title}
          </span>
          <i className='bi bi-chevron-down toggel-btn' onClick={sidebarDownHandle}></i>
        </div>
        <div className='sidebar-content'>
        {item.childrens.map((child,index)=><SidebarItem key={index} item={child}/>)}
        </div>
      </div>
    )
  } else {
    return (
     
        <a href={item.path || "#"} className='sidebar-item plain'>      
            {item.icon && <i className={item.icon}></i>}
            {item.title}
      </a>
    )
  }
}

export default SidebarItem