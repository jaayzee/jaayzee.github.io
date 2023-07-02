import React from 'react'
import InstaFeeds from './InstaFeeds'

function Art() {
    return (
        <>
            <header className="App-header" style={{textAlign:'center'}}>
                <h1>GALLERY</h1>
            </header>

            <InstaFeeds token={import.meta.env.VITE_INS_TOKEN} limit={12}/>
        </>
    ) 
}

export default Art