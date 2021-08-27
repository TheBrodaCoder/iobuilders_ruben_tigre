import React from 'react';
import {ReactComponent as CheckMark} from './checked.svg'; 
import theme from '../../../../utils/theme/theme';

const SucessFullPrompt = () => {
    return (
        <div style={{
            backgroundColor: theme.mainColors.white, 
            minHeight: '30vh', 
            minWidth: '20vw',
            borderRadius: '0.5em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CheckMark style={{width: '50%', margin: '1em'}}/>
            <div style={{
                fontFamily: 'Roboto',
                fontSize: '2em',
                margin: '1em'
            }}>
                Payment Sucessfull!
            </div>

        </div>
    )
}

export default SucessFullPrompt
