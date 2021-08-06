import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import PageHeader from '../../components/PageHeader';

const UserDataForm = ({ headerTitle, onClickHandler }) => {
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
};


export default UserDataForm;
