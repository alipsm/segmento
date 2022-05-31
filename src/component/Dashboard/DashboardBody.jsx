import React from 'react'
import SidebarHover from './DashboaedComponents/SidebarHover'
import DashboardHeader from './DashboaedComponents/DashboardHeader';


export default function DashboardBody() {
  return (

    <div id='DASHBOARD'>
      <div className='nav_head'>
        <DashboardHeader/>
      </div>
      <div className='body'>
          <div className='main'></div>
          <div className='list_hover'>
            <SidebarHover/>
          </div>
          <div className='nav_right'>
            <div className='top'>
            <div className='scroller'></div>
            <div className='dashboard'></div>
            <div className='analyze'></div>
            <div className='news'></div>
            <div className='servise'></div>
            <div className='youtub'></div>
            <div className='linkedin'></div>
            </div>
            <div className='down'>
              <div className='support'></div>
              <div className='information'></div>
              <div className='line'></div>
              <div className='xaankoo_logo'></div>
            </div>
          </div>
      </div>
    </div>
  )
}
