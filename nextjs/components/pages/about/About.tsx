import Layout from '@/components/pages/layout/Layout'
import AboutContent from '@/components/pages/about/AbooutContent'
import AboutGallery from '@/components/pages/about/AboutGallery'

import Box from '@mui/material/Box';

const About = (() => {
    return (
        <>
            <Layout title='About' />
            <Box justifyContent="space-between"
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 9,
                    height: '92vh',
                    width: '100%',
                    borderBottom: '5px solid green',
                    // backgroundImage: 'url(about.png)',
                    // backgroundSize: 'cover'
                }} 
            >
                <AboutContent />
            </Box>
            <Box 
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    height: 900,
                    width: '100%',
                }} 
            >

            </Box>
        </>
    )
})

export default About