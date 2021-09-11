import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #fff',
        boxShadow: theme.shadows[5],
        borderRadius: 7,
        width: "50vw",
        textAlign: "center",
        overflow: "scroll"
    },
}));

export default function TransitionsModal({ Component, buttonTitle, title, width, button }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {
                button ? (
                    <div onClick={handleOpen} style={{ padding: 5, height: 50, cursor: "pointer", borderRadius: 7, backgroundColor: "#36466F", color: "#fff" }}>
                        <p style={{ fontWeight: "bold" }}>{buttonTitle}</p>
                    </div>
                ) : (<p onClick={handleOpen}>{buttonTitle}</p>)
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper} style={{ width: width ? width : "50%" }}>
                        <h2 id="transition-modal-title">{title}</h2>
                        <Component handleClose={handleClose}/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
