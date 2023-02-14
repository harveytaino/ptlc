import emailjs from '@emailjs/browser'
import { useState, forwardRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

type Email = {
    name: string
    emailAddress: string
    message: string
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AboutContent = (() => {
    const [open, setOpen] = useState(false);
    const [snackBarOpen, setSnackbarOpen] = useState(false);
    const [snackBarStatus, setSnackBarStatus] = useState("success");
    const [snackBarMessage, setSnackBarMessage] = useState('');


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const snackBarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbarOpen(false);
    };

    const sendEmail = ( (e: any) => {

        e.preventDefault()

        const email: Email = {
            name: e.target.name.value,
            emailAddress: e.target.emailAddress.value,
            message: e.target.message.value
        }

        setSnackBarStatus('info')
        setSnackBarMessage('Email Sending!')
        setSnackbarOpen(true)

        emailjs.send(process.env.EMAIL_SERVICE_ID ?? 'Test', process.env.EMAIL_TEMPLATE ?? 'Test', email, process.env.EMAIL_PUBLIC_KEY ?? 'Test')
            .then(function(response: any) {
                setSnackBarStatus('success')
                setSnackBarMessage('Email Sent Successfully!')
            }, function(error: string) {
                setSnackBarStatus('error')
                setSnackBarMessage('Email did not send!')
        });

        e.target.reset()
        setOpen(false)
    })

    const handleMouseEnter = () => {
        // console.log('Mouse Entered')
     };

     const handleMouseLeave = () => {
        // console.log('Mouse Leaved')
     };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: 'auto',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 'auto',
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{
                            margin: 'auto',
                        }}
                    >
                        <Typography id='about__main-text' variant="h2" gutterBottom 
                                    sx={{ color: 'white', margin: 'auto', fontSize: { xs: 25, sm: 25, md: 50 }}}
                        >
                            NURTURE SUCCESSFUL <br></br>RADIOLOGIC TECHNOLOGISTS
                        </Typography>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleOpen} sx={{ marginTop: 1, background: 'green' }}>
                            CONTACT US
                        </Button>
                    </Box>

                </Box>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id='form' sx={style} component="form" onSubmit={sendEmail}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Send us a message
                </Typography>
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                    sx={{ margin: 2}}
                />
                <TextField
                    id="emailAddress"
                    name="emailAddress"
                    label="Email Address"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="standard"
                    sx={{ margin: 2}}
                />
                <TextField
                    id="message"
                    name="message"
                    label="Message"
                    multiline
                    variant="filled"
                    rows={10}
                    sx={{ margin: 2 }}
                />

                <Button variant="contained" endIcon={<SendIcon />} type="submit" sx={{ marginTop: 1, background: 'green', margin: 2 }}>
                    SEND EMAIL
                </Button>
                </Box>
            </Modal>

            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={snackBarClose}>
                <Alert onClose={handleClose} severity={snackBarStatus == "success" ? "success" : snackBarStatus == "error" ? "error" : snackBarStatus == "info" ? "info" : "warning"} sx={{ width: '100%' }}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
        </>
    )
})

export default AboutContent
