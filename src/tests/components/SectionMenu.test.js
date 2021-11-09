import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SectionMenu from '../../components/SectionMenu';

import { sections } from '../mocks/sections.json'

jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve());

describe('SectionMenu component', () => {

    beforeEach(() => {
        jest
            .spyOn(global, 'fetch')
            .mockImplementation(() => {
                return Promise.resolve({
                    json: () => Promise.resolve(
                        sections
                    )
                })
        })
    })

    afterEach(() => {
        cleanup()
    })

    it('should render SectionMenu component', async () => {
        render(<SectionMenu/>)
        const sectionMenuComponent = await screen.findAllByTestId('test-sectionMenu')
        expect(sectionMenuComponent).toBeDefined()
    })

    it('should have a selected state on click', async () => {
        render(<SectionMenu/>)
        const section = await screen.findByTestId('test-sectionMenu-0')
        userEvent.click(section)
        const selectedSection = await screen.findByTestId('test-selected')
        expect(selectedSection).toBeDefined()
    })

})
