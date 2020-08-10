import React from 'react';
import styles from './Input.module.sass'

const Input = props => {
    return (
        <div className={styles.inputContainer}>
            <input
                type={props.type}
                className={styles[props.class]}
                placeholder={props.placeHolder}
                name={props.name}
                required
                id={props.name}
                autoComplete={'off'}
            />
            {
                props?.label
                    ? <label
                        htmlFor={ props.name }
                        className={styles[props.class+'Label']}
                    >
                        { props.label }
                    </label>
                    : null
            }

        </div>
    );
};

export default Input;