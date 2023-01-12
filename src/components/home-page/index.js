import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='container' style={{ marginLeft: '100px' }}>
                <div className='movies-btn'>
                    <a href='/movies'>Movies</a>
                </div>
                <p>Popular Movies</p>
            </div>
            <div className='container'>
                <div className='series-btn'>
                    <a href='/series'>Series</a>
                </div>
                <p>Popular Series</p>
            </div>
        </div>
    )
}

export default Home;