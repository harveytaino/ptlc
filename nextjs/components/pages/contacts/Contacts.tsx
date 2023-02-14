
import Layout from '@/components/pages/layout/Layout'

import Box from '@mui/material/Box';
import Branches from '@/components/pages/contacts/Branches';
import GeneralInformation from '@/components/pages/contacts/GeneralInformation';

const Contacts = ( () => {

    return (
        <>
            <Layout title='Contacts' />
            <Box 
                sx={{ 
                    marginTop: { xs: 7, md: 9 },
                    height: '92vh',
                    width: '100%',
                    overflowY: 'auto',
                }} 
            >
                <Box justifyContent="space-between"
                    sx={{ 
                        height: '100%',
                        width: '100%',
                    }} 
                >
                    <Branches />
                </Box>
                <Box justifyContent="space-between"
                    sx={{ 
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                        width: '100%',
                        padding: 5
                    }} 
                >
                    <GeneralInformation />
                </Box>
            </Box>
        </>
    )
})

export default Contacts