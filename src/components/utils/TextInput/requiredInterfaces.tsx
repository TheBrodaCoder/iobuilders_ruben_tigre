export interface inputProps {
    placeholderText: string,
    name: string
}

export interface styledInputProps extends React.InputHTMLAttributes<HTMLElement> {
    error?: boolean
}

export interface styledLabelProps extends React.LabelHTMLAttributes<HTMLElement> {
    active?: boolean
}
