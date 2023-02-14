import Layout from '@/components/pages/layout/Layout'
import AboutIntroduction from '@/components/pages/about/AboutIntroduction'
import AboutContent from '@/components/pages/about/AbooutContent'
import AboutGallery from '@/components/pages/about/AboutGallery'

import Box from '@mui/material/Box';

const About = (() => {
    return (
        <>
            <Layout title='About' />
            <Box 
                sx={{ 
                    marginTop: { xs: 7, md: 9 },
                    height: '92vh',
                    width: '100%',
                    overflowY: 'auto'
                }} 
            justifyContent="space-between">
                <Box justifyContent="space-between"
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        height: { xs: 400, md: 900 },
                        width: '100%',
                        borderBottom: '5px solid green',
                        backgroundImage: 'url(lag-1.jpg)',
                        backgroundSize: 'cover',
                        backgroundColor: '#404040',
                        backgroundBlendMode: 'overlay'
                    }} 
                >
                    <AboutIntroduction />
                </Box>
                <Box justifyContent="space-between"
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        height: { xs: 400, md: 900 },
                        width: '100%',
                        borderBottom: '5px solid green',
                        backgroundImage: 'url(about_bg.jpg)',
                        backgroundSize: 'cover',
                    }} 
                >
                    <AboutContent />
                </Box>
                <Box 
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        height: { xs: 900, md: 900 },
                        width: '100%',
                        backgroundImage: 'url(lag-7.jpg)',
                        backgroundSize: 'cover',
                        backgroundColor: '#404040',
                        backgroundBlendMode: 'overlay'
                    }} 
                >
                    <AboutGallery />
                </Box>
            </Box>
        </>
    )
})

export default About