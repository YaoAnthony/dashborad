import React from 'react'

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from "react-icons/si"
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from "../data/dummy";


const Sidebar = () => {
  const [ activeMenu, setActiveMenu ] = useState(false)

  return (
    <div className='ml-3h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto pb-10'>
      sidebar
    </div>
  )
}

export default Sidebar