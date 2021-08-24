import React from 'react'
import LoginForm from './loginForm/LoginForm'
import theme from '../../../utils/theme/theme'
import {ReactComponent as Bitcoin} from './bitcoin.svg'
import SignUpForm from './signUpForm/SignUpForm';


const LandingPage = () => {

    return (
        <div style={{display:"flex", flexDirection: 'row-reverse'}}>
            <div style={{backgroundColor: theme.mainColors.darkBlue, display: 'flex', flexDirection: 'column', height: '100vh', width: '30vw', alignItems: 'center'}}>
                <SignUpForm/>
            </div>
            <div style={{backgroundColor: theme.mainColors.darkGray, width: '70vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{backgroundColor: theme.mainColors.darkBlue, maxWidth: '60%', minHeight: '70%', borderRadius: '1em', display: 'flex', flexDirection:'column',  alignItems: 'center', justifyContent: 'center'}}>
                    <Bitcoin style={{ minWidth: '10%', maxWidth:'30%', minHeight:'30%', maxHeight: '50%', flexBasis: '40%'}}/>
                    <div style={{ width: '80%' ,fontFamily: 'Roboto', fontSize: '1.2em', fontWeight: 'lighter', color: theme.mainColors.white, flexBasis: '60%' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit deleniti inventore, unde officiis expedita ea quos exercitationem velit magnam fuga modi illum sit. Perspiciatis at aut unde deleniti commodi.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi perferendis quibusdam facilis ipsum veritatis quia deleniti obcaecati, ducimus alias quis. Recusandae, similique. Ullam sit neque eum cupiditate quidem optio officia?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsam esse ullam nihil doloribus totam voluptate, dolores sunt? Itaque doloribus mollitia dicta optio! Qui culpa distinctio fuga dignissimos? Commodi, tempora.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt dignissimos magnam earum vel dolorem aliquid quidem ab? Iste quae sit voluptatibus iure blanditiis nobis architecto est laudantium quos excepturi.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LandingPage
