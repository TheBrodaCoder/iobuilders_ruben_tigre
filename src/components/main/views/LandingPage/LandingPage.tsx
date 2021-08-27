import React from 'react'
import LoginForm from './loginForm/LoginForm'
import {ReactComponent as Bitcoin} from './bitcoin.svg'
import SignUpForm from './signUpForm/SignUpForm';
import { useState } from 'react';
import { LandingContainer, RightContainer, LeftContainer, InfoContainer, InfoText } from './LandingPageContainers/LandingPageContainers';


const LandingPage = (): JSX.Element => {
    const [login, changeForm] = useState(true);

    const changeFormToView = (): void => {
        changeForm(!login);
    }

    return (
        <LandingContainer>
            <RightContainer>
                {login ? (<LoginForm handleFormChange={() => changeFormToView()}/>): (<SignUpForm handleFormChange={() => changeFormToView()}/>) }
            </RightContainer>
            <LeftContainer>
                <InfoContainer>
                    <Bitcoin style={{ minWidth: '10%', maxWidth:'30%', minHeight:'30%', maxHeight: '50%', flexBasis: '40%'}}/>
                    <InfoText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit deleniti inventore, unde officiis expedita ea quos exercitationem velit magnam fuga modi illum sit. Perspiciatis at aut unde deleniti commodi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi perferendis quibusdam facilis ipsum veritatis quia deleniti obcaecati, ducimus alias quis. Recusandae, similique. Ullam sit neque eum cupiditate quidem optio officia?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam esse ullam nihil doloribus totam voluptate, dolores sunt? Itaque doloribus mollitia dicta optio! Qui culpa distinctio fuga dignissimos? Commodi, tempora.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt dignissimos magnam earum vel dolorem aliquid quidem ab? Iste quae sit voluptatibus iure blanditiis nobis architecto est laudantium quos excepturi.
                    </InfoText>
                </InfoContainer>
            </LeftContainer>
        </LandingContainer>
    )
}

export default LandingPage
