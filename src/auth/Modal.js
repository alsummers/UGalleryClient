import React from 'react';

import Login from './Login';
import Signup from './Signup';

const Modal = props => {
    switch (props.currentModal){
        case 'LOG_IN':
        return <Login {...props} />;

        case 'SIGN_IN':
        return <Signup {...props} />

        default:
        return null;
    }
}

export default Modal;