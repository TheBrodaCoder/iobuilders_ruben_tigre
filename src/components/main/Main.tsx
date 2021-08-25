import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';

const Main = () => {
    
    const logged = useSelector((state: RootStateOrAny ) => state.loggedState.logged );
    
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            {logged ?
            <HomePage/>
            :
            <LandingPage/>
            } 
        </div>
    )
}

export default Main
