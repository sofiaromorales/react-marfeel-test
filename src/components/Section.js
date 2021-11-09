import React from 'react'

const Section = (props) => {
    const {
        testId,
        sectionMenu = {},
        sectionTitle
    } = props
    return (
        <div
            className='Section'
            data-testid='test-section'
        >
            <div
                className='row mb-5'
                data-testid={testId}
            >
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
