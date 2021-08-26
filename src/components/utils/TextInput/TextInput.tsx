import { useField } from 'formik';
import React from 'react';
import { StyledInput } from './styledInput';
import { InputHTMLAttributes } from 'react';

interface inputProps extends InputHTMLAttributes<HTMLElement> {
    name: string
}

const TextInput = ({ name , ...props }: inputProps ): JSX.Element => {

    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    
    return (
        <>

            <StyledInput
                onChange={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <div style={{ marginTop: 5, color: 'red', fontFamily: 'Roboto' }}>{meta.error}</div>}
        </>
    );
};

export default TextInput;
