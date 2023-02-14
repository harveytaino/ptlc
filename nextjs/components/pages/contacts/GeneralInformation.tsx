import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BusinessIcon from '@mui/icons-material/Business';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

type Branches = {
    location: string
    address: string
    contact: string,
}

const branches: Branches[] = [
    { location: 'Bulacan', address: '35 Roxville, Subd, Marilao, Bulacan', contact: '0966-897-6062'},
    { location: 'Quezon City', address: 'NS Amoranto, corner Biak na Bato, Quezon City, 1114 Metro Manila', contact: '0995-530-0357'},
    { location: 'Laguna', address: 'Brgy, little Baguio, Km. 89 Marikina-Infanta Hwy, Santa Maria', contact: '0956-694-7771'},
]

const GeneralInformation = ( () => {

    return (
        <>
            <Box
                sx={{ 
                    margin: 5,
                    padding: 3,
                    height: '30%',
                    width: '90%',
                    border: '2px solid white'
                }} 
            >
                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2, borderBottom: '1px solid white'}}>
                    <InfoIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6" >
                        General Information
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                    <BusinessIcon sx={{ marginRight: 1 }} />
                    <Typography variant="subtitle2" >
                        Progressive Training and Learning Center
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                    <HomeIcon sx={{ marginRight: 1 }}  />
                    <Typography variant="subtitle2" >
                        35 Roxville Subdivision, Saog, Marilao, Bulacan
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                    <CallIcon sx={{ marginRight: 1 }} />
                    <Typography variant="subtitle2" >
                        (044) 322-9851
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                    <MailIcon sx={{ marginRight: 1 }}  />
                    <Typography variant="subtitle2" >
                        abelardomarvaiii@gmail.com
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{ 
                    margin: 5,
                    padding: 3,
                    width: '90%',
                    border: '2px solid white'
                }} 
            >

                <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2, borderBottom: '1px solid white'}}>
                    <BusinessIcon sx={{ marginRight: 1 }} />
                    <Typography variant="h6" >
                        Branches
                    </Typography>
                </Box>
                {
                    branches.map( (branch) => {
                        return (
                            <>
                            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                                <Typography variant="h6" >
                                    {branch.location}
                                </Typography>
                            </Box>
            
                            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                                <HomeIcon sx={{ marginRight: 1 }} />
                                <Typography variant="subtitle2" >
                                    {branch.address}
                                </Typography>
                            </Box>
            
                            <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
                                <CallIcon sx={{ marginRight: 1 }} />
                                <Typography variant="subtitle2" >
                                    {branch.contact}
                                </Typography>
                            </Box>
                            </>
                        )
                    })
                }
            </Box>
        </>
    )
})

export default GeneralInformation