import React, { useState, useEffect } from 'react'

import HeaderMenu from './HeaderMenu'
import SectionMenu from './SectionMenu'

const Header = (props) => {

    const [hideSectionMenu, setHideSectionMenu] = useState(false)

    useEffect(() => {
         window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.scrollY < 300) {
            setHideSectionMenu(false)
        }
        else if (window.scrollY > 400) {
            setHideSectionMenu(true)
        }
    }

    return (
        <div className='Header'>
            <HeaderMenu/>
            <div className={`menu ${hideSectionMenu ? 'menu-hidden' : 'menu-show'}`}>
                <SectionMenu
                    hide={hideSectionMenu}
                />
            </div>
        </div>
    )
}

export default Header
