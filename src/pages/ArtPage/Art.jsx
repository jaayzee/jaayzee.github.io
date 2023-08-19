import React from 'react'
import InstaFeeds from './InstaFeeds'
import '../../styles/art.css'

// Base Code: https://github.com/MingSheng92/react_isntafeed

function Art() {
    return (
        <>
            <header className="titleArt">
                <h1>A R T W O R K</h1>
            </header>

            <InstaFeeds token={import.meta.env.VITE_INS_TOKEN} limit={12}/>
        </>
    ) 
}

export default Art