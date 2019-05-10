import React from 'react'
import Footer from './src/components/organisms/Footer'

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    
    setHeadComponents([
        <link rel="shortcut icon" href="/favicon.png"/>,
        <link href="https://fonts.googleapis.com/css?family=Roboto:900" rel="stylesheet"/>,
        <link rel="stylesheet" href='/bootstrap.min.css' />
    ])

    setPostBodyComponents([
        <Footer/>
    ])    
};