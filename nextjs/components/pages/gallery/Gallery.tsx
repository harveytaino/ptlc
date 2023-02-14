import Layout from '@/components/pages/layout/Layout'
import GalleryDetails from '@/components/pages/gallery/GalleryDetails'

import Box from '@mui/material/Box';

const Gallery = (() => {
    return (
        <>
            <Layout title='Gallery' />
            <Box justifyContent="space-between"
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 9,
                    height: '92vh',
                    width: '100%',
                }} 
            >
                <GalleryDetails />
            </Box>
        </>
    )
})

export default Gallery