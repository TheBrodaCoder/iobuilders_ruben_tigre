import React from 'react';
import theme from '../../../../utils/theme/theme';
import TextInput from '../../../../utils/TextInput/TextInput';
import { Formik } from 'formik';
import Button from '../../../../utils/button/Button';



const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                Email: '',
                Password: ''
            }}
            onSubmit={(values) => console.log(values)}
        >
        {({values, handleSubmit, handleChange }) => {
            return (<form 
                        onSubmit={handleSubmit}
                        style={{
                        backgroundColor: theme.mainColors.white, 
                        minHeight: '30vh', 
                        minWidth: '25vw',
                        marginTop: '25vh',
                        borderRadius: '0.5em',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <TextInput 
                            name='Username' 
                            type='text' 
                            value={values.Email}
                            onChange={handleChange('Email')}
                            placeholder='Email'
                        />
                        <TextInput 
                            name='Password' 
                            type='password'
                            value={values.Password}
                            onChange={handleChange('Password')}
                            placeholder='Password'
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                            <Button text='Sign up!' type='button' onClick={() => console.log('sign up!') } label='If you have no account'/>
                            <Button text='Log in!' type='submit' label="If you're already signed"/>
                        </div>
                    </form>
                    );
                }
            }
        </Formik>
    )
}

export default LoginForm;
