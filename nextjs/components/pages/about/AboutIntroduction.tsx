import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AboutContent = (() => {

    const handleMouseEnter = () => {
        console.log('Mouse Entered')
     };

     const handleMouseLeave = () => {
        console.log('Mouse Leaved')
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
                        <Button variant="contained" endIcon={<SendIcon />} sx={{ marginTop: 1, background: 'green' }}>
                            CONTACT US
                        </Button>
                    </Box>

                </Box>
            </Box>
        </>
    )
})

export default AboutContent
