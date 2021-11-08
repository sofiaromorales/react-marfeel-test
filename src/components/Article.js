import React from 'react'

const Article = (props) => {

    const {
        image,
        title,
        description
    } = props

    return (
        <div className='Article row mt-50'>
            {image &&
                <div className='col-6 image-container pr-20'>
                    <div className='image' style={{backgroundImage: 'url(https://media.gettyimages.com/photos/cat-sandwich-picture-id146582583?s=2048x2048)'}} />
                </div>
            }
            <div className='col-6 pl-20'>
                <div className='mb-20'>
                    <h2 className='mt-0'>
                        <strong>
                            {title}
                        </strong>
                    </h2>
                </div>
                <div>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Article
