import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function ConfirmationDialog({ confirm, cancel, isOpen }) {

    const handleClose = () => {
        isOpen = false;
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancel} color="primary">No</Button>
                    <Button onClick={confirm} color="primary" autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}