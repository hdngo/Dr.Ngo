import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => {
    return (
        <Helmet>
            <title>Dr.Ngo</title>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
            <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        </Helmet>
    )  
}

export default Meta;