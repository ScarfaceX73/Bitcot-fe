import React from 'react'

const Header = () => {
    return (
        <div className='header' id='header'>
            <div className='first'>
                <div>
                    <h1><a href='/' className='demo'>DEMO Streaming</a></h1>
                </div>
                <div>
                    <a className='logIn'>Log in</a>
                    <a className='free-trail'>Start your free trail</a>
                </div>
            </div>
            <div className='second'>
                <h2>Popular Titles</h2>
            </div>
        </div>
    )
}

export default Header