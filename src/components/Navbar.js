import React, { useState, useEffect, createRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../css/Navbar.module.css';
import MenuIcon from './MenuIcon'
import Nav from './Nav'

const Navbar = () => { 

  const Menu = createRef()
  const history = useHistory()
  const isHome = history.location.pathname === '/'

  const { navAnimation, smallFlex, navFirstDiv, menu, menuDown, menuUp } = styles

  const [isMenu, setIsMenu] = useState(true)
  const [closeMenu, setCloseMenu] = useState(false)
  const [smallDisplay, setSmallDisplay] = useState(window.innerWidth < 768)

  const containerClass = `${isHome ? navAnimation : ''} ${smallDisplay ? smallFlex : ''}`

  useEffect(() => {
    const handleResize = () => {
      setSmallDisplay(window.innerWidth < 768)
      setCloseMenu(false)
      setIsMenu(true)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

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