import React from 'react';
import SidebarItem from './SidebarItem'
import item from '../data/sidebar.json'
import '../index.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      {item.map((item, index) => <SidebarItem key={index} item={item} />)}
    </div>
  ) 
} 
export default Sidebar