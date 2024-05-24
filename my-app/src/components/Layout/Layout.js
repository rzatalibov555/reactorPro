
import { NavLink, Outlet } from "react-router-dom"

import './Layout.css'

// const setActive = ({isActive}) => isActive ? 'nav MyColor' : 'nav'
// const setStyle = ({isActive}) => ({color: isActive ? "red" : "green"})
const Layout = () => {
    return(
        <>
            <header>
                <NavLink to="/" className="navi" >Home</NavLink>
                <NavLink to="/about" className="navi">About</NavLink>
                <NavLink to="/contact" className="navi">Contact</NavLink>
                {/* <NavLink to="/contact" className="nav" style={setStyle}>Contact</NavLink> */}
            </header>


            <div className="container">
                <div className="main">
                    <Outlet />
                </div>
            </div>


            
            <footer>Copyright 2024</footer>
        </>
    )
}

export {Layout}