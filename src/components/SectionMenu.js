import React, { useState, useEffect } from 'react'

import Section from './Section'

const SectionMenu = (props) => {

    const [selectedSection, setSelectedSection] = useState(0)

    const changeSection = (params) => {
        const {
            sectionIndex
        } = params
        setSelectedSection(sectionIndex)
    }

    const sections = [
        {
            title: 'Section 1'
        },
        {
            title: 'Section 2'
        },
        {
            title: 'Section 3'
        },
        {
            title: 'Section 4'
        },
        {
            title: 'Section 5'
        }
    ]

    const renderSections = () => {
        return sections.map((s, i) => {
            return (
                <div
                    className='section-container col-1'
                    onClick={() => changeSection({sectionIndex: i})}
                >
                    <Section
                        sectionTitle={s.title}
                    />
                    <div
                        className={`w-100 h-20 ${i === selectedSection ? 'selected-section' : ''}`}
                    >
                    </div>
                </div>
            )
        })

    }


    return (
        <div className='SectionMenu mt-20'>
            <div className='sections row'>
                {renderSections()}
            </div>
        </div>
    )
}

export default SectionMenu
