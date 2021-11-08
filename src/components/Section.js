import React from 'react'

const Section = (props) => {
    const {
        sectionMenu = {sectionMenu},
        sectionTitle,
        selectedSection = false
    } = props
    return (
        <div className='Section'>
            <div className='row mb-5'>
                <p
                    className='m-auto'
                    style={{fontSize: sectionMenu.textSize}}
                >
                    {`${sectionTitle.toUpperCase()}`}
                </p>
            </div>
        </div>
    )
}

export default Section
