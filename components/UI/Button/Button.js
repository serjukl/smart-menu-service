import React from 'react';
import styles from './Button.module.sass'

const Button = props => {
    return (
        <button
            type={props.type}
            className={styles[props?.class ? props.class : 'defaultButton']}
            onClick={
                props?.clickHandler
                    ? () => props.clickHandler()
                    : null
            }
        >
            {props.value}
        </button>
    );
};

export default Button;