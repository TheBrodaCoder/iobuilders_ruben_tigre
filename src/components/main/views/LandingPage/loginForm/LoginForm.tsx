import React from 'react';
import theme from '../../../../utils/theme/theme';
import TextInput from '../../../../utils/TextInput/TextInput';
import { Formik } from 'formik';
import Button from '../../../../utils/button/Button';
import * as yup from 'yup';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { UserType } from '../../../../../reducers/userSlice';
import { changeLoggedStatus, loggedUser } from '../../../../../reducers/loggedSlice';


const validationSchema = yup.object().shape({
    Email: yup.string().email('Use a valid email address').required('Email is required'),
    Password: yup.string().min(4, 'Password must at least 4 characters long').required('Password is required')
})

interface LoginCredentials {
    Email: string,
    Password: string
}

interface LoginFormProps {
    handleFormChange(booleanValue: boolean): void
}

const LoginForm: React.FC<LoginFormProps> = ( props: LoginFormProps ): JSX.Element => {

    const dispatch = useDispatch();
    const usersList = useSelector( (state: RootStateOrAny) => state.usersList.users);
    

    const handleLogin = ( values: LoginCredentials ): void => {
        
        const loggedUser: loggedUser = usersList.find((user: UserType) => user.email === values.Email );

        if (loggedUser) {
            const user = { logged: true, loggedUser: loggedUser };
            dispatch(changeLoggedStatus( user ));
        }
    };

    return (
        <Formik
            initialValues={{
                Email: '',
                Password: ''
            }}
            onSubmit={(values) => handleLogin( values )}
            validationSchema={validationSchema}
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
                            name='Password' 
                            type='password'
                            value={values.Password}
                            onChange={handleChange('Password')}
                            placeholder='Password'
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                            <Button text='Sign up!' type='button' onClick={() => {props.handleFormChange(false)}} label='If you have no account'/>
                            <Button text='Log in!' type='submit' label={ "If you're already signed"} />
                        </div>
                    </form>
                    );
                }
            }
        </Formik>
    )
}


export default LoginForm;
