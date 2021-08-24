import React from 'react'
import styled from 'styled-components';
import theme from '../../../../../../utils/theme/theme';
import { MoveProps } from './interfaces';

const MoveContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    background-color: ${theme.mainColors.darkGray};
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${theme.mainColors.white};
    height: 4em;
    border-bottom: 1px ${theme.mainColors.black} solid;
    border-top: 1px ${theme.mainColors.black} solid;
`;



const Move: React.FC<MoveProps> = ( props: MoveProps ) => {
    return (
        <MoveContainer>
            <div style={{flexBasis: '50%', display: 'flex', flexDirection: 'row'}}>
                <p style={{marginLeft:  '2em'}}><span style={{color: theme.mainColors.yellow, fontWeight:'bold'}}>Concepto: </span>{props.moveName}</p>
            </div>
            <div style={{flexBasis: '50%', display: 'flex', flexDirection: 'row-reverse'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginRight: '2em'}}>
                    <div style={{fontWeight: 'bolder', fontSize: '1.2em'}}>
                        {props.quantity + '€'}
                    </div>
                    <div>
                        {props.balance + '€'}
                    </div>
                </div>
            </div>
        </MoveContainer>
    )
}

export default Move
