import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from '../../components/Header';


describe('Header component', () => {

    afterEach(() => {
        cleanup()
    })

    it('should render Header component', () => {
        render(<Header/>)
        const headerComponent = screen.getByTestId('test-header')
        expect(headerComponent).toBeDefined()
    })

    it('should render Header menu logo', () => {
        render(<Header/>)
        const headerMenuLogoComponent = screen.getByTestId('test-hader-menu-logo')
        expect(headerMenuLogoComponent).toBeDefined()
    })

    it('should render Header hamburger menu icon', () => {
        render(<Header/>)
        const headerMenuLogoComponent = screen.getByTestId('test-hamburger-menu-icon')
        expect(headerMenuLogoComponent).toBeDefined()
    })

})
