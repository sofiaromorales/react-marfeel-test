import React from 'react'

import HamburgerMenuIcon from './HamburgerMenuIcon'

const FloatingHamburgerMenu = (props) => {

    const {
        burgerMenu={}
    } = props

    return (
        <div className='FloatingHamburgerMenu'>
            <HamburgerMenuIcon
                burgerMenu={burgerMenu}
            />
        </div>
    )

}

export default FloatingHamburgerMenu
