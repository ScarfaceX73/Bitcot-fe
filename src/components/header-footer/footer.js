import React from 'react';
import facebook from '../../assets/social/facebook-white.svg';
import instagram from '../../assets/social/instagram-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
import appStore from '../../assets/store/app-store.svg';
import playStore from '../../assets/store/play-store.svg';
import windowsStore from '../../assets/store/windows-store.svg';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='contact'>
                <div>
                    <ul className='unordered-list'>
                        <li style={{ marginLeft: "0px" }}><a href='#'>Home</a></li>
                        <li><a href='#'>Terms and Conditions</a></li>
                        <li><a href='#'>Privacy policy</a></li>
                        <li><a href='#'>Collection Statement</a></li>
                        <li><a href='#'>Help</a></li>
                        <li style={{ borderRight: "none" }}><a href='#'>Manage Account</a></li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p>Copyright c 2016 DEMO Streaming. All Rights Reserved</p>
                </div>
            </div>
            <div className='mobile-store'>
                <div className='social-media'>
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={instagram} />
                </div>
                <div className='app-store'>
                    <img src={appStore} />
                    <img src={playStore} />
                    <img src={windowsStore} />
                </div>
            </div>
        </div>
    )
}

export default Footer