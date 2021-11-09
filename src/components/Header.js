import React, { useState, useEffect } from 'react'

import BlackOverlay from './BlackOverlay'
import FloatingHamburgerMenu from './FloatingHamburgerMenu'
import HeaderMenu from './HeaderMenu'
import NavigationMenu from './NavigationMenu'
import SectionMenu from './SectionMenu'

const Header = (props) => {

    const [customizations, setCustomizations] = useState({})
    const [hideSectionMenu, setHideSectionMenu] = useState(false)
    const [hideHamburgerMenu, setHideHamburgerMenu] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const [sections, setSections] = useState([])

    const {
        background = {},
        burgerMenu = {},
        logo = {},
        sectionMenu = {}
    } = customizations

    const fetchCustomizations = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/mocks/header')
            setCustomizations(await response.json())
        } catch (error) {
            console.log('Error: ' + error)
        }
    }

    const fetchSections = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/mocks/sections')
            setSections(await response.json())
        } catch (error) {
            console.log('Error: ' + error)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchCustomizations()
        fetchSections()
    }, [])

    const handleScroll = () => {
        if (window.scrollY < 300) {
            setHideSectionMenu(false)
        }
        else if (window.scrollY > 400) {
            setHideSectionMenu(true)
        }
        if (window.scrollY > 1000) {
            setHideHamburgerMenu(false)
        } else {
            setHideHamburgerMenu(true)
        }
    }

    const openMenu = (open) => {
        setMenuOpen(open)
    }

    return (
        <>
            <BlackOverlay
                opened={menuOpen}
                open={openMenu}
            >
                <NavigationMenu
                    menuOpen={menuOpen}
                    openMenu={openMenu}
                    sections={sections}
                />
            </BlackOverlay>
            {(!hideHamburgerMenu &&  !menuOpen) &&
                <FloatingHamburgerMenu
                    burgerMenu={burgerMenu}
                    openMenu={openMenu}
                />
            }
            <div
                className='Header'
                style={{background: background.colour}}
                data-testid='test-header'
            >
                <HeaderMenu
                    burgerMenu={burgerMenu}
                    logo={logo}
                    openMenu={openMenu}
                />
                <div
                    className={`menu ${hideSectionMenu ? 'menu-hidden' : 'menu-show'}`}
                    style={{background: background.colour}}
                >
                    <SectionMenu
                        hide={hideSectionMenu}
                        sectionMenu={sectionMenu}
                    />
                </div>
            </div>
        </>
    )
}

export default Header
