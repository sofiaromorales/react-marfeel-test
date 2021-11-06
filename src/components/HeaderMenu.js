import React from 'react'

import HamburgerMenuIcon from './HamburgerMenuIcon'

const HeaderMenu = (props) => {
    return (
        <div className='HeaderMenu'>
            <div className='row space-around mt-10 mb-30'>
                <div className='hamburger-menu-container pl-20'>
                    <HamburgerMenuIcon/>
                </div>
                <div className='logo-container col-9'>
                    <img
                        src='https://assets.website-files.com/60e82bee0900620f66d6c9dc/616bc3e9f02ccd810a73f7a6_logo-marfeel.svg'
                        alt='marfeel-logo'
                        className='block m-auto'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu
