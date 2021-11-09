import React, { useState, useEffect } from 'react'

import Section from './Section'

const SectionMenu = (props) => {
    const {
        sectionMenu = {}
    } = props

    const [selectedSection, setSelectedSection] = useState(0)
    const [sections, setSections] = useState([])

    const changeSection = (params) => {
        const {
            sectionIndex
        } = params
        setSelectedSection(sectionIndex)
    }

    const fetchSections = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/mocks/sections')
            setSections(await response.json())
        } catch (error) {
            console.log('Error: ' + error)
        }
    }
    useEffect(() => {
        fetchSections()
    }, [])

    const renderSections = () => {
        return sections.map((s, i) => {
            return (
                <div
                    className='section-container col-1 mt-auto'
                    onClick={() => changeSection({sectionIndex: i})}
                    data-testid='test-sectionMenu'
                    key={i}
                >
                    <Section
                        sectionTitle={s.title}
                        sectionMenu={sectionMenu}
                        testId={`test-sectionMenu-${i}`}
                    />
                    <div
                        className={`w-100 section ${i === selectedSection ? 'selected' : ''}`}
                        data-testid={i === selectedSection ? 'test-selected' : ''}
                        style={{background: i === selectedSection ? sectionMenu.colour : ''}}
                    >
                    </div>
                </div>
            )
        })

    }

    return (
        <div className='SectionMenu h-100'>
            <div className='sections row h-100'>
                {renderSections()}
            </div>
        </div>
    )
}

export default SectionMenu
