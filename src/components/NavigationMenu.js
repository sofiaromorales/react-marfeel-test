import React from 'react'

const NavigationMenu = (props) => {

    const {
        menuOpen,
        sections = []
    } = props

    const renderSections = () => {
        return sections.map(s => {
            return (
                <div>
                    <p
                        className='m-auto ml-10 mt-20 mb-20'
                    >
                        {`${s.title.toUpperCase()}`}
                    </p>
                    <div className='divider'/>
                </div>
            )
        })
    }

    return (
        <div className={`NavigationMenu ${menuOpen ? 'opened' : ''}`}>
            <div className='banner row pl-20'>
                <img
                    src='https://assets.website-files.com/60e82bee0900620f66d6c9dc/616bc3e9f02ccd810a73f7a6_logo-marfeel.svg'
                    alt='marfeel-logo'
                    className='block m-auto'
                />
            </div>
            <div>
                {renderSections()}
            </div>
        </div>
    )
}

export default NavigationMenu
