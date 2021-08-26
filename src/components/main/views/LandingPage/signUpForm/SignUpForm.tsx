import React from 'react';
import theme from '../../../../utils/theme/theme';
import TextInput from '../../../../utils/TextInput/TextInput';
import { Formik } from 'formik';
import Button from '../../../../utils/button/Button';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { changeLoggedStatus, loggedUser } from '../../../../../reducers/loggedSlice';
import { register, UserType } from '../../../../../reducers/userSlice';
import * as yup from 'yup';
import { createWallet } from '../../../../../reducers/walletSlice';

interface SignUpProps {
    handleFormChange( booleanValue: boolean): void 
}


const generateWalletName = () => {
    let walletName = '';
    for (let i = 0; i < 16; i++ ) {
        walletName += `${Math.floor((Math.random() * 16) - 1)}`;
    }
    return walletName;
}


const validationSchema = yup.object().shape({
    Email: yup.string().email('Use a valid email address').required('Email is required'),
    FullName: yup.string().required('Your name is required').min(3, 'Your name length must be greater or equal than 3'),
    Password: yup.string().min(4, 'Password must at least 4 characters long').required('Password is required'),
    ConfirmationPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

const SignUpForm: React.FC<SignUpProps> = ( props: SignUpProps) => {

    const dispatch = useDispatch();
    const usersList = useSelector( (state: RootStateOrAny) => state.usersList.users);
    
    return (
        <Formik
            initialValues={{
                FullName: '',
                Password: '',
                ConfirmPassword: '',
                Email: ''
            }}
            onSubmit={(values, { setFieldError }) => {
                const loggedUser: loggedUser = usersList.find((user: UserType) => user.Email.toUpperCase() === values.Email.toUpperCase() );
                
                if (!loggedUser) {
                    const walletNumber = generateWalletName();
                    const newUser: UserType = {
                        Email: values.Email,
                        Password: values.Password,
                        FullName: values.FullName,
                        WalletNumber: walletNumber,
                    }
                    dispatch(register(newUser));
                    dispatch(createWallet(newUser.WalletNumber));
                    
                    dispatch(changeLoggedStatus( {logged: true, loggedUser: { Email: newUser.Email, WalletNumber: newUser.WalletNumber, FullName: newUser.FullName } } ))
                    
                } else {
                    setFieldError('Email', 'Email already exists')
                }
            }}
            validationSchema = { validationSchema }
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
                                    value={values.ConfirmPassword}
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
