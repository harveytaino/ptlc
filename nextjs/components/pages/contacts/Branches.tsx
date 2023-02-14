import { useState } from 'react'

import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

type Location = {
    label: string
    value: number,
    iframe: string
}

const locations: Location[] = [
    {
        label: 'Bulacan',
        value: 0,
        iframe: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=14.757273877096264,%20120.95026035736625+(Progressive%20Training%20and%20Learning%20Center%20(%20Dream%20Camp))&t=&z=18&ie=UTF8&iwloc=B&output=embed'     
    },
    {
        label: 'Quezon City',
        value: 1,
        iframe: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=NS%20Amoranto,%20corner%20Biak%20na%20Bato,%20Quezon%20City,%201114%20Metro%20Manila,%20Philippines+(Steelworld%20Tower)&t=&z=14&ie=UTF8&iwloc=B&output=embed'        
    },
    {
        label: 'Laguna',
        value: 2,
        iframe: 'https://maps.google.com/maps?width=100%25&height=600&hl=en&q=14.537286698977264,%20121.47927563783247+(Progressive%20Training%20and%20Learning%20Center%20(%20Dream%20Camp))&t=&z=17&ie=UTF8&iwloc=B&output=embed'        
    },
    
]   

const Branches = ( () => {

    const [locationIframe, setLocationIframe] = useState(0);

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: number) => {
        setLocationIframe(nextView);
    };

    return (
        <>
            <Box
                sx={{
                    height: '100%', 
                    width: '100%',
                    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                }} 
            >
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                    }} 
                >
                <Box
                    sx={{
                        height: { xs: '5%', md: '8%' },
                        width: '100%',
                        backgroundColor: '#333',
                        marginTop: { sm: 1, md: 1, lg: 1 }
                    }} 
                >
                    <ToggleButtonGroup
                        color='success'
                        orientation="horizontal"
                        value={locationIframe}
                        exclusive
                        onChange={handleChange}
                        sx={{ height: '100%', width: '100%', }}
                    >
                    {
                        locations.map( (location, index) => {
                            return (
                                <ToggleButton key={index} value={location.value} aria-label="list" sx={{ color: 'white', fontSize: { xs: '8px', sm: '10px', md: '10px', lg: '15px' }, }}>
                                    {location.label}
                                </ToggleButton>
                            )
                        })
                    }
                    </ToggleButtonGroup>
                </Box>
                <Box
                    sx={{
                        height: { xs: '95%', md: '92%',  },
                        width: '100%',
                    }} 
                >
                        <iframe width="100%" height="100%"
                            src={locations[locationIframe].iframe}
                        >
                        </iframe>
                </Box>
                </Box>
            </Box>
        </>
    )
})

export default Branches