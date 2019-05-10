import React from 'react'
import Footer from './src/components/organisms/Footer'

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    
    setHeadComponents([
        <title>Zeal</title>,
        <link rel="shortcut icon" href="/favicon.png"/>,
        <link href="https://fonts.googleapis.com/css?family=Roboto:900" rel="stylesheet"/>,
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>,
        <link rel="stylesheet" href='/bootstrap.min.css' />
    ])

    setPostBodyComponents([
        <Footer/>
    ])    
};