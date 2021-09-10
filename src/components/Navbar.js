import React, { useState, useEffect, createRef } from 'react';
import styles from '../css/Navbar.module.css';
import MenuIcon from './MenuIcon'
import Nav from './Nav'


const Navbar = (props) => { 

  const { windowWidth } = props

  const { smallFlex, navFirstDiv, menu, menuDown, menuUp } = styles
  
  const Menu = createRef()

  const [isMenu, setIsMenu] = useState(true)
  const [closeMenu, setCloseMenu] = useState(false)
  const [smallDisplay, setSmallDisplay] = useState(window.innerWidth < 768)

  const containerClass = `${smallDisplay ? smallFlex : ''}`

  useEffect(() => {
    const handleResize = () => {  
        setSmallDisplay(window.innerWidth < 768)
        setCloseMenu(false)
        setIsMenu(true)
    }
    handleResize()
  },[windowWidth])

  useEffect(() => {
    if (smallDisplay){
      if(isMenu){
        Menu.current.classList.remove(menuDown)
      }
      else {
        Menu.current.classList.add(menuDown)
        if(closeMenu){
          Menu.current.classList.add(menuUp)
        }
        else {
          Menu.current.classList.add(menuUp)
        }
      }
    }

  }, [isMenu, Menu, menuDown, menuUp, closeMenu, smallDisplay])

    return(
      <div 
        id={navFirstDiv} 
        className={containerClass}>

          {smallDisplay ? 
          <>
            <MenuIcon 
              isMenu={isMenu}
              closeMenu={closeMenu}
              setIsMenu={setIsMenu}
              setCloseMenu={setCloseMenu}/> 
            <div className={menu} ref={Menu}>
              <Nav
                isMenu={isMenu}
                closeMenu={closeMenu}
                setIsMenu={setIsMenu}
                setCloseMenu={setCloseMenu}/>
            </div>
          </> :
          <Nav
            isMenu={isMenu}
            closeMenu={closeMenu}
            setIsMenu={setIsMenu}
            setCloseMenu={setCloseMenu}/>}

      </div>
    )
}


export default Navbar