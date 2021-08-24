import React from 'react';
import theme from '../../../../utils/theme/theme';
import TextInput from '../../../../utils/TextInput/TextInput';
import { Formik } from 'formik';
import Button from '../../../../utils/button/Button';

interface SignUpProps {
    handleFormChange( booleanValue: boolean): void 
}

const SignUpForm: React.FC<SignUpProps> = ( props: SignUpProps) => {

    return (
        <Formik
            initialValues={{
                FullName: '',
                Password: '',
                ConfirmPassword: '',
                Email: ''
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
                                    name='Email' 
                                    type='text' 
                                    value={values.Email}
                                    onChange={handleChange('Email')}
                                    placeholder='Email'
                                />
                                <TextInput 
                                    name='FullName' 
                                    type='text' 
                                    value={values.FullName}
                                    onChange={handleChange('FullName')}
                                    placeholder='Full name'
                                />
                                <TextInput 
                                    name='Password' 
                                    type='password'
                                    value={values.Password}
                                    onChange={handleChange('Password')}
                                    placeholder='Password'
                                />
                                <TextInput 
                                    name='ConfirmPassword' 
                                    type='password'
                                    value={values.Password}
                                    onChange={handleChange('ConfirmPassword')}
                                    placeholder='Confirm password'
                                />
                                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                                    <Button text='Log in!' type='button' label="If you're already signed" onClick={() => props.handleFormChange(true)}/>
                                    <Button text='Sign up!' type='submit' label='If you have no account'/>
                                </div>
                            </form>
                           );
                        }
                    }
                    
                </Formik>
    )
}


export default SignUpForm;
