import React, { useEffect, useState } from 'react'

import Article from './Article'

const Articles = (props) => {

    const [articles, setArticles] = useState([])

    const fetchSections = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/mocks/articles')
            setArticles(await response.json())
        } catch(error) {
            console.log('Error: ' + error)
        }
    }

    useEffect(() => {
        fetchSections()
    }, [])

    const renderArticles = () => {
        return articles.map(a => {
            return (
                <div
                    className='row'
                    data-testid='test-articles-list'
                >
                    <div className='col-1'/>
                    <div className='col-10'>
                        <Article
                            {...a}
                        />
                    </div>
                    <div className='col-1'/>
                    <div className='divider mt-50'/>
                </div>
            )
        })
    }

    return (
        <div
            className='Articles row mt-50'
            data-testid='test-articles'
        >
            <div className='col-12'>
                {renderArticles()}
            </div>
        </div>
    )
}

export default Articles
