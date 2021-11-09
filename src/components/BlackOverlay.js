import React from 'react'

const BlackOverlay = (props) => {

    const {
        children,
        open,
        opened
    } = props

    return (
        <div
            className={`BlackOverlay ${opened ? 'opened' : ''}`}
            onClick={() => open(false)}
        >
            {children}
        </div>
    )
}

export default BlackOverlay
