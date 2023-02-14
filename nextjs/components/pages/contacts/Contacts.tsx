
import Layout from '@/components/pages/layout/Layout'

import Box from '@mui/material/Box';
import Branches from '@/components/pages/contacts/Branches';
import GeneralInformation from '@/components/pages/contacts/GeneralInformation';

const Contacts = ( () => {

    return (
        <>
            <Layout title='Contacts' />
            <Box justifyContent="space-between"
                sx={{ 
                    display: 'flex',
                    marginTop: 9,
                    height: 900,
                    width: '100%',
                }} 
            >
                <Box justifyContent="space-between"
                    sx={{ 
                        display: 'flex',
                        height: '100%',
                        width: '70%',
                    }} 
                >
                    <Branches />
                </Box>
                <Box justifyContent="space-between"
                    sx={{ 
                        height: '100%',
                        width: '30%',
                        background: 'green',
                        color: 'white'
                    }} 
                >
                    <GeneralInformation />
                </Box>
            </Box>
        </>
    )
})

export default Contacts