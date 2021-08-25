import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { changeLoggedStatus } from '../../reducers/loggedSlice';

const Main = () => {
    
    const logged = useSelector((state: RootStateOrAny ) => state.logged.logged );
    const dispatch = useDispatch();

    console.log(logged);

    return (
        <>
            {logged ? 'loggeado' : 'sinloggear'}
            <button onClick={() =>  {dispatch(changeLoggedStatus(!logged))}}>
                prueba
            </button>            
        </>
    )
}

export default Main
