import React from 'react'

import Article from './Article'

const Articles = (props) => {

    const articles = [
        {
            image: 'https://media.gettyimages.com/photos/cat-sandwich-picture-id146582583?s=2048x2048',
            title: 'Cats are cute',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor maximus convallis. Nullam pellentesque facilisis odio eget laoreet. Nulla luctus ultricies aliquet.  Duis eget finibus justo. Donec tristique euismod purus a imperdiet. Vestibulum arcu turpis, dignissim'
        },
        {
            title: 'Cats are cute',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor maximus convallis. Nullam pellentesque facilisis odio eget laoreet. Nulla luctus ultricies aliquet.  Duis eget finibus justo. Donec tristique euismod purus a imperdiet. Vestibulum arcu turpis, dignissim'
        },
        {
            image: 'https://media.gettyimages.com/photos/cat-sandwich-picture-id146582583?s=2048x2048',
            title: 'Cats are cute',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor maximus convallis. Nullam pellentesque facilisis odio eget laoreet. Nulla luctus ultricies aliquet.  Duis eget finibus justo. Donec tristique euismod purus a imperdiet. Vestibulum arcu turpis, dignissim'
        },


    ]

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
