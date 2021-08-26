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
import { addMovetoWallet, Wallet, AddMovePayload } from '../../../../../../reducers/walletSlice';
import SucessFullPrompt from '../SucessFullPrompt/SucessFullPrompt';


interface DepositProps {
    setForm(formToShow: FormToDisplay): void,
    balance: number
}

const Deposit = ({ setForm, balance } : DepositProps): JSX.Element => {

    const dispatch = useDispatch();
    const loggedUser = useSelector( (state: RootStateOrAny) => state.loggedState.loggedUser);

    const [congrats, changeCongrats] = useState<boolean>(false);
    
    const validationSchema = yup.object().shape({
        Quantity: yup.number().required('The quantity is required').positive('Quantity must be positive').lessThan( balance, 'Insufficient funds in your account' ).typeError('Not valid quantity'),
        CardNumber: yup.number().required('Card number is required').min(99999999999999, 'Not valid card').max(1000000000000000, 'Not valid card').typeError('Not valid card'),
        ExpireDate: yup.string().typeError('Not a valid date')
        .max(5, 'Not a valid date')
        .matches(
          /([0-9]{2})\/([0-9]{2})/,
          'Not a valid '
        )
        .required('Date is required'),
        CVC: yup.number().moreThan(99, 'CVC Invalid').lessThan(1000, 'CVC Invalid').typeError('CVC Invalid')
    })


    return ( 
        <>
        {
            congrats ?  
            <SucessFullPrompt/>
            : 
            (<Formik
                initialValues={{
                    Quantity: 1,
                    CardNumber: '',
                    ExpireDate: '',
                    CVC: ''
                }}
                onSubmit={(values) => {
                    const depositMove: AccountMove = { balance: Number(balance) + Number(values.Quantity), moveName: `${loggedUser.FullName} deposit`, quantity: Number(values.Quantity) };
                    const moveAction: AddMovePayload = { walletTarget: loggedUser.WalletNumber , move: depositMove  };
                    dispatch(addMovetoWallet( moveAction ));
                    changeCongrats(!congrats);
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
                                name='Quantity' 
                                type='text' 
                                value={values.Quantity}
                                onChange={handleChange('Quantity')}
                                placeholder='Quantity'
                            />

                            <TextInput 
                                name='CardNumber' 
                                type='text' 
                                value={values.CardNumber}
                                onChange={handleChange('CardNumber')}
                                placeholder='Card number'
                            />
                            <div style={{ display: 'flex', flexDirection: 'row', width: '87%', alignItems:'space-around'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                <TextInput 
                                    name='ExpireDate' 
                                    type='text' 
                                    value={values.ExpireDate}
                                    onChange={handleChange('ExpireDate')}
                                    placeholder='MM/YY'
                                    style={{width: '40%'}}
                                />
                                </div>
                              
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <TextInput 
                                    name='CVC' 
                                    type='CVC'
                                    value={values.CVC}
                                    onChange={handleChange('CVC')}
                                    placeholder='CVC'
                                    style={{width: '40%', marginLeft: '1em'}}
                                /> 
                            </div>
                             
                            </div>
    
                            
    
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

export default Deposit;
