import React from 'react'

import HamburgerMenuIcon from './HamburgerMenuIcon'

const HeaderMenu = (props) => {

    const {
        burgerMenu = {},
        logo,
        openMenu
    } = props

    return (
        <div className='HeaderMenu'>
            <div className='row space-around mt-20 pb-20'>
                <div
                    className='hamburger-menu-container pl-20'
                    onClick={() => openMenu(true)}
                >
                    <HamburgerMenuIcon
                        burgerMenu={burgerMenu}
                    />
                </div>
                <div className='logo-container col-9'>
                    <img
                        src={logo.image}
                        alt='marfeel-logo'
                        className='block m-auto'
                        style={{width: logo.size}}
                        data-testid='test-hader-menu-logo'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu
