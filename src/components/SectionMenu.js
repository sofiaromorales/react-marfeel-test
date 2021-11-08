import React, { useState, useEffect } from 'react'
import useFetch from 'react-fetch-hook'

import Section from './Section'

const SectionMenu = (props) => {
    const {
        hide,
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

    const {
        data,
        error
    } = useFetch('http://localhost:3001/api/mocks/sections')

    if (error) {
        console.log(error);
    }

    useEffect(() => {
        if (data) {
            setSections(data)
        }
    }, [data])

    const renderSections = () => {
        return sections.map((s, i) => {
            return (
                <div
                    className='section-container col-1 mt-auto'
                    onClick={() => changeSection({sectionIndex: i})}
                >
                    <Section
                        sectionTitle={s.title}
                        sectionMenu={sectionMenu}
                    />
                    <div
                        className={`w-100 section ${i === selectedSection ? 'selected' : ''}`}
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
