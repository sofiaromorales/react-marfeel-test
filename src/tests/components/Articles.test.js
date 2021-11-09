import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'

import Articles from '../../components/Articles';

import { articles } from '../mocks/articles.json'

jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve());

describe('Articles component', () => {

    beforeEach(() => {
        jest
            .spyOn(global, 'fetch')
            .mockImplementation(() => {
                return Promise.resolve({
                    json: () => Promise.resolve(
                        articles
                    )
                })
        })
    })

    afterEach(() => {
        cleanup()
    })

    it('should render Articles component', async () => {
        render(<Articles/>)
        const articlesComponent = screen.getByTestId('test-articles')
        expect(articlesComponent).toBeDefined()
    })

    it('should have a list of Articles', async () => {
        render(<Articles/>)
        const articles = await screen.findAllByTestId('test-articles-list')
        expect(articles).toBeDefined()
    })

})
