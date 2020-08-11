import React,{useState, useRef, useEffect} from 'react'
import Head from "next/head"
import Fade  from 'react-reveal/Fade';
import AuthLogo from "../components/AuthLogo/AuthLogo";
import AuthWelcomeContainer from "../components/AuthWelcomeContainer/AuthWelcomeContainer";
import Input from "../components/UI/Input/Input";
import AuthLinkIcons from "../components/AuthLinkIcons/AuthLinkIcons";
import Button from "../components/UI/Button/Button";
import Link from "next/link";
import firebase from "firebase/app";
import 'firebase/auth'
import '../firebaseConfig'

const Authentication = props => {
    const[nextPage, nextPageHandler] = useState(false)
    const[userData, userDataHandler] = useState({})
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
            type:'tel',
            placeHolder: 'Phone number',
            class: 'defaultInput',
            name: 'tel',
            label: 'Phone number'
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

    useEffect(() => {
    },[props.data])
    const submitForm = (e,type) => {
        e.preventDefault()
        if (type === 'reg') {
            createNewUser()
        }
    }

    const checkOtherAuthForm = (value) => {
        nextPageHandler(value)
        formEl.current.reset();
        userDataHandler({})
    }

    const getInputData = e => {
        let key = e.target.name
        userData[key] = e.target.value
    }


    const createNewUser = () => {
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
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
                                onSubmit={(e) => submitForm(e,'reg')}
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
                                                changeHandler={(e) => getInputData(e)}
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
                                <Link href='/forgotPassword'>
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