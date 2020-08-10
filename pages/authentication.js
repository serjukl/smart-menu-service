import React,{useState, useRef} from 'react'
import Head from "next/head"
import Fade  from 'react-reveal/Fade';
import AuthLogo from "../components/AuthLogo/AuthLogo";
import AuthWelcomeContainer from "../components/AuthWelcomeContainer/AuthWelcomeContainer";
import Input from "../components/UI/Input/Input";
import AuthLinkIcons from "../components/AuthLinkIcons/AuthLinkIcons";
import Button from "../components/UI/Button/Button";
import Link from "next/link";


const Authentication = props => {
    const[nextPage, nextPageHandler] = useState(false)
    const formEl = useRef('formEl');

    const inputsReg = [
        {
            type:'text',
            placeHolder: 'First name',
            class: 'defaultInput',
            name: 'personFirstName',
            label: 'First name'
        },
        {
            type:'text',
            placeHolder: 'Last name',
            class: 'defaultInput',
            name: 'personLastName',
            label: 'Last name'
        },
        {
            type:'email',
            placeHolder: 'Email',
            class: 'defaultInput',
            name: 'email',
            label: 'Email'
        },
        {
            type:'password',
            placeHolder: 'Password',
            class: 'defaultInput',
            name: 'password',
            label: 'Password'
        },
        {
            type:'password',
            placeHolder: 'Repeat password',
            class: 'defaultInput',
            name: 'repeatPassword',
            label: 'Repeat password'
        }
    ]
    const inputsIn = [
        {
            type:'email',
            placeHolder: 'Email',
            class: 'defaultInput',
            name: 'email',
            label: 'Email'
        },
        {
            type:'password',
            placeHolder: 'Password',
            class: 'defaultInput',
            name: 'password',
            label: 'Password'
        }
    ]


    const submitForm = e => {
        e.preventDefault()
    }

    const checkOtherAuthForm = (value) => {
        nextPageHandler(value)
        formEl.current.reset();
    }

    return (
        <div className={nextPage ? 'authContainer' : 'authContainer authRowReverse'}>
            <Head>
                <title>SMART MENU | AUTH</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AuthLogo
                nextPage={nextPage}
            />

            <Fade left={nextPage} right={!nextPage} spy={nextPage} duration={300}>
                <div className="authLeftPartContainer">
                    {
                        nextPage
                            ? <AuthWelcomeContainer
                                header={'Welcome back!'}
                                text={'To keep connect with us please login with your personal info'}
                                btnValue={'sign in'}
                                checkOtherAuthForm={() => checkOtherAuthForm(!nextPage)}
                            />
                            : <AuthWelcomeContainer
                                header={'Hello, friend!'}
                                text={'Enter your personal details and start journey with us'}
                                btnValue={'sign up'}
                                checkOtherAuthForm={() => checkOtherAuthForm(!nextPage)}
                            />
                    }
                </div>
            </Fade>

            <Fade left={!nextPage} right={nextPage} spy={nextPage} duration={300}>
                <div className="authRightPartContainer">
                    {
                        nextPage
                            ? <form
                                ref={formEl}
                                action=""
                                className='formAuth'
                                onSubmit={(e) => submitForm(e)}
                            >
                                <legend>Create account</legend>
                                <AuthLinkIcons />
                                <p>or use your email for registration</p>
                                {
                                    inputsReg.map((input,index) => {
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

                                <Button
                                    type='submit'
                                    class='defaultButton'
                                    value='Sign up'
                                />
                            </form>
                            : <form ref={formEl}
                                action="" className='formAuth'
                                    onSubmit={(e) => submitForm(e)} >
                                <legend>Sign in to Smart Menu</legend>
                                <AuthLinkIcons />
                                <p>or use your email account</p>
                                {
                                    inputsIn.map((input,index) => {
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
                                <Link href='/auth/forgot'>
                                    <a className='forgotPassLink'>
                                        Forgot password?
                                    </a>
                                </Link>
                                <Button
                                    type='submit'
                                    class='defaultButton'
                                    value='Sign in'
                                />
                            </form>
                    }
                </div>
            </Fade>
        </div>
    );
};

export default Authentication;