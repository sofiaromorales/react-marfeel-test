import React from 'react'

const HamburgerMenuIcon = (props) => {

    const {
        burgerMenu = {}
    } = props

    return (
        <div
            className='HamburgerMenuIcon'
            data-testid='test-hamburger-menu-icon'
        >
            <div
                className='bar row m-5'
                style={{background: burgerMenu.colour}}
            />
            <div
                className='bar row m-5'
                style={{background: burgerMenu.colour}}
            />
            <div
                className='bar row m-5'
                style={{background: burgerMenu.colour}}
            />
        </div>
    )
}

export default HamburgerMenuIcon
