import Layout from '@/components/pages/layout/Layout'
import GalleryDetails from '@/components/pages/gallery/GalleryDetails'

import Box from '@mui/material/Box';

const Gallery = (() => {
    return (
        <>
            <Layout title='Gallery' />
            <Box 
                sx={{ 
                    marginTop: { xs: 7, md: 9 },
                    height: { xs: '93.6vh', sm: '93.6vh', md: '91.8vh', lg: '92.2vh' },
                    width: '100%',
                    overflowY: 'auto',
                    borderBottom: '5px solid green',
                }} 
            justifyContent="space-between"
            >
                <Box justifyContent="space-between"
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                    }} 
                >
                    <GalleryDetails />
                </Box>
            </Box>

        </>
    )
})

export default Gallery