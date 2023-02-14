import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
                    margin: 'auto',
                    width: '50%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img 
                    src='about_profile.jpg' 
                    loading="lazy"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        width: '80%',
                        height: '20%',
                        margin: 'auto',                    
                    }}
                />
            </Box>
            <Box
                sx={{
                    margin: 'auto',
                    width: '40%',
                }}
            >
                <Typography id='about__main-text' variant="h6" gutterBottom
                            sx={{ fontSize: { xs: 8, sm: 10, md: 15, lg: 20 }}}  
                >
                    Progressive Training and Learning Center (PTLC) was established by <span className='about__highlighted' style={{color:'green'}}> Mr. Abelardo Marva III, RRT </span> 
                    on April 2012 in Saog, Marilao, Bulacan. It is an <span className='about__highlighted' style={{color:'green'}}> institution </span> that offers the graduates 
                    of Bachelor of Science in Radiologic Technology a <span className='about__highlighted' style={{color:'green'}}>review program</span> that will prepare them for their 
                    <span className='about__highlighted' style={{color:'green'}}> licensure examination</span>. The institution produced <span className='about__highlighted' style={{color:'green'}}> topnotchers </span> 
                    over the past years and will <span className='about__highlighted' style={{color:'green'}}> continue to nurture successful Radiologic Technologists</span>.
                </Typography>
            </Box>
        </>
    )
})

export default AboutContent
