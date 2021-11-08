import React, { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'

import Article from './Article'

const Articles = (props) => {

    const [articles, setArticles] = useState([])

    const {
        data,
        error
    } = useFetch('http://localhost:3001/api/mocks/articles')

    if (error) {
        console.log(error);
    }

    useEffect(() => {
        if (data) {
            setArticles(data)
        }
    }, [data])

    const renderArticles = () => {
        return articles.map(a => {
            return (
                <div className='row'>
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
        <div className='Articles row mt-50'>
            <div className='col-12'>
                {renderArticles()}
            </div>
        </div>
    )
}

export default Articles
