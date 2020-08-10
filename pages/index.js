import React from "react";
import Head from 'next/head'

const Home = props => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className='lol'>home</h1>
        </div>
    );
};

export default Home;