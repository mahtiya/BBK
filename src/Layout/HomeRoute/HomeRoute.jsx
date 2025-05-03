import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import RoutePage from './components/RoutePage/RoutePage'

export default function HomeRoute() {
  return (
    <div className='main'>
      <div>
        <Sidebar />
      </div>
      <div className="routes_page">
        <RoutePage />
      </div>
    </div>
  )
}
