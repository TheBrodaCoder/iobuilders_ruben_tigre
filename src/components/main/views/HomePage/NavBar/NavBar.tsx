import React from 'react'
import styled from 'styled-components';
import Button from '../../../../utils/button/Button';
import theme from '../../../../utils/theme/theme';
import { FormToDisplay } from '../HomePage';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../reducers/loggedSlice';

const NavContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    background-color: ${theme.mainColors.darkBlue};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${theme.mainColors.white};
    height: 4em;
`;

interface NavBarProps {
    setForm(formToShow: FormToDisplay): void
}

const NavBar: React.FC<NavBarProps>= ({ setForm } :NavBarProps) => {

    const dispatch = useDispatch();


    return (
        <NavContainer>
            <div style={{flexBasis: '50%', display: 'flex', flexDirection: 'row', marginLeft: '2em', fontFamily:'Roboto', fontWeight: 'bold', fontSize: '2em'}}>
                TigerPay!
            </div>
            <div style={{flexBasis: '50%', display: 'flex', flexDirection: 'row-reverse', marginRight: '2em'}}>
                <Button caution text='Log out!' style={{marginLeft: '1em'}} onClick={() => dispatch(logOut())}/>
                <Button text='Send a payment' style={{marginLeft: '1em'}} onClick={() => setForm('pay')}/>
                <Button text='Deposit' style={{marginLeft: '1em'}} onClick={() => setForm('deposit')}/>
            </div>
        </NavContainer>
    )
}

export default NavBar
