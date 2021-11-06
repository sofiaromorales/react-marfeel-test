import React from 'react'

const Section = (props) => {
    const {
        sectionTitle,
        selectedSection = false
    } = props
    return (
        <div className='Section'>
            <div className='row mb-5'>
                <p className='m-auto'>
                    {`${sectionTitle.toUpperCase()}`}
                </p>
            </div>
        </div>
    )
}

export default Section
