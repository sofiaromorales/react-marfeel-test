import React from 'react'

import HamburgerMenuIcon from './HamburgerMenuIcon'

const FloatingHamburgerMenu = (props) => {

    const {
        burgerMenu={},
        openMenu
    } = props

    return (
        <div
            className='FloatingHamburgerMenu'
            onClick={() => openMenu(true)}
        >
            <HamburgerMenuIcon
                burgerMenu={burgerMenu}
            />
        </div>
    )

}

export default FloatingHamburgerMenu
