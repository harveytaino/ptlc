import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutContent = (() => {
    return (
        <>
            <Box 
                sx={{
                    margin: 'auto',
                    width: '50%',
                }}
            >
                <Typography variant="h2" gutterBottom sx={{textAlign: 'center', color: 'green'}}>
                    ABOUT
                </Typography>
            </Box>
            <Box
                sx={{
                    margin: 'auto',
                    width: '40%',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Progressive Training and Learning Center (PTLC) was established by Mr. Abelardo Marva III, 
                    RRT on April 2012 in Saog, Marilao, Bulacan. It is an institution that offers the graduates 
                    of Bachelor of Science in Radiologic Technology a review program that will prepare them for their 
                    licensure examination. The institution produced topnotchers over the past years and will continue 
                    to nurture successful Radiologic Technologists.
                </Typography>
            </Box>
        </>
    )
})

export default AboutContent
