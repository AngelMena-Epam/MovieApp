import React from 'react';

function ErrorBoundary(props){
    const ErrorMsg = () => (
        <h2>
            Something went wrong, please contact the admin
        </h2>
    );

    let status = true;

    return <>{status ? props.children : <ErrorMsg />}</>
}

export default ErrorBoundary