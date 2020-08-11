import React from 'react';
import Head from "next/head";
import AuthLinkIcons from "../components/AuthLinkIcons/AuthLinkIcons";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import Link from "next/link";
import styles from "../components/AuthLogo/AuthLogo.module.sass";

const ForgotPassword = () => {
    const inputs = [
        {
            type:'email',
            placeHolder: 'Email',
            class: 'defaultInput',
            name: 'email',
            label: 'Email'
        },
        {
            type:'tel',
            placeHolder: 'Phone number',
            class: 'defaultInput',
            name: 'tel',
            label: 'Phone number'
        }
    ]
    const submitForm = e => {
        e.preventDefault()
    }
    return (
        <div>
            <Head>
                <title>SMART MENU | AUTH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="forgotPassContainer">
                <form action=""
                      className='formAuth'
                      onSubmit={(e) => submitForm(e)}
                >
                    <legend>Restore password</legend>
                    <p>Set your email and phone number</p>
                    {
                        inputs.map((input,index) => {
                            return(
                                <Input
                                    key={index}
                                    type={input.type}
                                    placeHolder={input.placeHolder}
                                    class={input.class}
                                    name={input.name}
                                    label={input.label}
                                />
                            )
                        })
                    }
                    <Link href='/authentication'>
                        <a className='forgotPassLink'>
                            Back to login
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.66669 10.4449V24.7753H5.58803V14.0882L22.1423 22.8322V25.504L16.5431 28.4187L10.9438 25.504V21.132H8.50937V26.4756L16.5431 31.3333L24.5768 26.4756V21.132L5.34458 10.4449H2.66669Z" fill='#48AF9C'/>
                                <path d="M23.9776 4.61488V7.56087L21.2997 9.22977V5.82933L15.9439 3.15755L10.5881 6.07222V8.01533L21.2997 13.8447L26.6555 10.6871H29.3334V25.0175H26.6555V14.3304L21.2997 17.2451L7.66675 9.22977V4.61488L15.9439 0L23.9776 4.61488Z" fill='#48AF9C'/>
                            </svg>
                        </a>
                    </Link>

                    <Button
                        type='submit'
                        class='defaultButton'
                        value='Sign up'
                    />
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;