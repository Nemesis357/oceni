import React from 'react';
import classes from './input.css';

const Input = (props) => {
    let inputElement = null,
        inputClasses = ['InputElement'];
        
        if ( props.invalid && props.touched ) {
            inputClasses.push('Invalid')
        }
        
    switch(props.elementType) {
        case('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )

}

export default Input;