import React, { useState } from 'react'
import { Formik } from 'formik';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { UserType } from '../../../../../../reducers/userSlice';
import Button from '../../../../../utils/button/Button';
import TextInput from '../../../../../utils/TextInput/TextInput';
import theme from '../../../../../utils/theme/theme';
import * as yup from 'yup';
import { FormToDisplay } from '../../HomePage';
import { AccountMove } from '../AccountMoves/components/interfaces';
import { addMovetoWallet, Wallet } from '../../../../../../reducers/walletSlice';
import SucessFullPrompt from '../SucessFullPrompt/SucessFullPrompt';


interface PayProps {
    setForm(formToShow: FormToDisplay): void,
    balance: number
}

const Pay = ({ setForm, balance } : PayProps): JSX.Element => {

    const dispatch = useDispatch();
    const usersList = useSelector( (state: RootStateOrAny) => state.usersList.users);
    const loggedUserEmail = useSelector( (state: RootStateOrAny) => state.loggedState.loggedUser.Email);
    const walletList = useSelector( (state: RootStateOrAny) => state.walletsList.wallets);

    const [congrats, changeCongrats] = useState<boolean>(false);

    
    const validationSchema = yup.object().shape({
        Email: yup.string().email('Use a valid email address').required('Email is required'),
        Quantity: yup.number().required('The quantity is required').positive('Quantity must be positive').lessThan( balance, 'Insufficient funds in your account' ) ,
        Concept: yup.string().required('Concept are required').min(4, 'Your concept must be at least four letters or more'),
        Password: yup.string().min(4, 'Password must at least 4 characters long').required('Password is required')
    })

    const verifyCredentials = ( password: string) => {
        const userFinded = usersList.find((user: UserType) => user.Email.toUpperCase() === loggedUserEmail.toUpperCase());
        const passwordAreIdentical = userFinded.Password === password;
        return passwordAreIdentical;
    }

    return ( 
        <>
        {
            congrats ?  
            <SucessFullPrompt/>
            : 
            (<Formik
                initialValues={{
                    Email: '',
                    Password: '',
                    Quantity: 0,
                    Concept: ''
                }}
                onSubmit={(values, { setFieldError }) => {
                    const targetEmail = values.Email;
                    const targetQuantity = values.Quantity;
                    const currentUser = usersList.find((user: UserType) => user.Email.toUpperCase() === loggedUserEmail.toUpperCase());
    
                    if (verifyCredentials( values.Password )){
                        const targetUser = usersList.find( (user: UserType) => user.Email.toUpperCase() === targetEmail.toUpperCase() );
                        if (targetUser.WalletNumber) {
                            const targetWallet = walletList.find( (wallet: Wallet) => wallet.WalletNumber === targetUser.WalletNumber );
                            const targetBalance = targetWallet.walletMoves[targetWallet.walletMoves.length - 1].balance;
                            const currentWallet = walletList.find( (wallet: Wallet) => wallet.WalletNumber === currentUser.WalletNumber );
                            
                            const targetUserMove: AccountMove = { balance: Number(targetBalance) + Number(targetQuantity), moveName: values.Concept, quantity: targetQuantity };
                            const currentUserMove: AccountMove = { balance: balance - targetQuantity, moveName: values.Concept, quantity: (0 - targetQuantity)}
    
                            dispatch(addMovetoWallet({ walletTarget: targetWallet.WalletNumber , move: targetUserMove }));
                            dispatch(addMovetoWallet({ walletTarget: currentWallet.WalletNumber, move: currentUserMove }));

                            changeCongrats(!congrats);
    
                        } else {
                            setFieldError('Email', 'That user didnt exist')
                        }
    
                    } else {
                        setFieldError('Password', 'Password is not correct')
                    }
                }}
                validationSchema={validationSchema}
            >
            {({ values, handleSubmit, handleChange }) => {
    
                
    
                return (<form 
                            onSubmit={handleSubmit}
                            style={{
                                backgroundColor: theme.mainColors.white, 
                                minHeight: '30vh', 
                                minWidth: '20vw',
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
                                name='Quantity' 
                                type='text' 
                                value={values.Quantity}
                                onChange={handleChange('Quantity')}
                                placeholder='Quantity'
                            />
    
                            <TextInput 
                                name='Concept' 
                                type='text' 
                                value={values.Concept}
                                onChange={handleChange('Concept')}
                                placeholder='Concept'
                            />
    
                            <TextInput 
                                name='Password' 
                                type='password'
                                value={values.Password}
                                onChange={handleChange('Password')}
                                placeholder='Password'
                            />
    
                            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                                <Button caution text='Cancel' type='button' onClick={() => setForm('none') } />
                                <Button text='Send payment!' type='submit' />
                            </div>
                        </form>
                        );
                    }
                }
            </Formik>)};
        </>)
    }

export default Pay