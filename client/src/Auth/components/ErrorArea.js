import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const ErrorArea = ({ error, onErrorDismiss }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        onErrorDismiss();
    };

    return (
        <Snackbar open={!!error} autoHideDuration={5000} onClose={handleClose}>
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
                {error}
            </MuiAlert>
        </Snackbar>
    )
}

export default ErrorArea;