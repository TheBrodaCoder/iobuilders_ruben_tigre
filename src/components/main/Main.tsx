import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';

const Main = () => {
    
    const logged = useSelector((state: RootStateOrAny ) => state.loggedState.logged );


    return (
        <>
            {logged ?
            <HomePage/>
            :
            <LandingPage/>
            } 
       
        </>
    )
}

export default Main
