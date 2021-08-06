import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PageHeader from '../../components/PageHeader';
import ErrorArea from './ErrorArea';

const UserDataForm = ({ headerTitle, error, onClickHandler, onErrorDismiss }) => {
    const [state, setState] = useState({});

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    return (
        <div className="container">
            <div className="row">
                <PageHeader headerText={headerTitle} />
            </div>
            <hr />
            <div className="row">
                <div className="offset-4 col-4 d-flex flex-column">
                    <TextField required variant="filled" label="Email" name="email" onChange={handleChange} />
                    <TextField required variant="filled" type="password" label="Password" name="password" onChange={handleChange} />
                    <Button className="mt-4" variant="contained" color="primary" onClick={() => onClickHandler(state)}>
                        Submit
                    </Button>
                </div>
            </div>
            <ErrorArea error={error} onErrorDismiss={onErrorDismiss} />
        </div>
    );
};


export default UserDataForm;
