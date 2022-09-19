import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const Layout = () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="wrapper">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
