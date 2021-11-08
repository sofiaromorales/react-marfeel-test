import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'

import FloatingHamburgerMenu from './FloatingHamburgerMenu'
import HeaderMenu from './HeaderMenu'
import SectionMenu from './SectionMenu'

const Header = (props) => {

    const [customizations, setCustomizations] = useState({})
    const [hideSectionMenu, setHideSectionMenu] = useState(false)
    const [hideHamburgerMenu, setHideHamburgerMenu] = useState(true)

    const {
        background = {},
        burgerMenu = {},
        logo = {},
        sectionMenu = {}
    } = customizations

    const {
        data,
        error
    } = useFetch('http://localhost:3001/api/mocks/header')

    if (error) {
        console.log(error);
    }

    useEffect(() => {
         window.addEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        if (data) {
            setCustomizations(data)
        }
    }, [data])

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

    return (
        <>
            {!hideHamburgerMenu &&
                <FloatingHamburgerMenu
                    burgerMenu={burgerMenu}
                />
            }
            <div
                className='Header'
                style={{background: background.colour}}
            >
                <HeaderMenu
                    burgerMenu={burgerMenu}
                    logo={logo}
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
