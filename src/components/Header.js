import React from 'react'

import HeaderMenu from './HeaderMenu'
import SectionMenu from './SectionMenu'

const Header = (props) => {
    return (
        <div className='Header pt-10'>
            <HeaderMenu/>
            <SectionMenu/>
        </div>
    )
}

export default Header
