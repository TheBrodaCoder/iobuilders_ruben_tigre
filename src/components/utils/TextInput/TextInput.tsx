import React, { useState } from 'react';
import { inputProps } from './requiredInterfaces';
import { StyledDiv, StyledInput, StyledLabel } from './requiredStyledComponents';

const TextInput = ({placeholderText, name, } :inputProps ) => {

    const [active, setActive] = useState(false);
    const [value, setValue] = useState('');
    

    const onChange = (e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >) => {
        setValue(e.target.value)

        if (value === '') {
            setActive(false);
        } else {
            setActive(true);
        }
    }

    return (
        <StyledDiv>
            <StyledInput className={name} onChange={onChange} value={value}/>
            <StyledLabel htmlFor={name} active={active} > { placeholderText } </StyledLabel>
        </StyledDiv>
    )
};

export default TextInput;
