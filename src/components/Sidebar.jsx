import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
    <div>Sidebar</div>
    <Outlet/>
    </>
  )
}
