import React from 'react';
import styles from './AuthWelcomeContainer.module.sass'

const AuthWelcomeContainer = props => {
    return (
        <div className={styles.welcomeContainer}>
            <h1>{props.header}</h1>
            <p>
                {props.text}
            </p>
            <button onClick={() => props.checkOtherAuthForm()} >
                {props.btnValue}
            </button>
        </div>
    );
};

export default AuthWelcomeContainer;