import { useState } from 'react'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

type Filter = {
    location: string
    value: number
    image: string[]
}

const filters: Filter[] = [
    { location: 'Bulacan', value: 0, image: [] },
    { location: 'Quezon City', value: 1, image: ['qc-1.jpg', 'qc-2.jpg', 'qc-3.jpg', 'qc-4.jpg', 'qc-5.jpg', 'qc-6.jpg', 'qc-7.jpg', 'qc-8.jpg'] },
    { location: 'Laguna', value: 2, image: ['lag-1.jpg', 'lag-2.jpg', 'lag-3.jpg', 'lag-4.jpg', 'lag-5.jpg', 'lag-6.jpg', 'lag-7.jpg', 'lag-8.jpg', 'lag-9.jpg', 'lag-10.jpeg'] },
]

const GalleryDetails = (() => {

    const [location, setLocation] = useState(0);

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: number) => {
        setLocation(nextView);
    };

    return (
        <>
            <Box
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    width: { xs: '20%', md: '15%' },
                }} 
            >
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        borderRight: '1px solid black'
                    }} 
                >
                    <ToggleButtonGroup
                        color='success'
                        orientation="vertical"
                        value={location}
                        exclusive
                        onChange={handleChange}
                        sx={{ width: '100%', marginTop: 1 }}
                    >
                    {
                        filters.map( (filter, index) => {
                            return (
                                <ToggleButton key={index} value={filter.value} aria-label="list" sx={{ color: 'black', fontSize: { xs: '10px', md: '10px', lg: '15px' }, }}>
                                    {filter.location}
                                </ToggleButton>
                            )
                        })
                    }
                    </ToggleButtonGroup>
                </Box>               
            </Box>

            <Box
                sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    width: { xs: '80%', md: '85%' },
                    overflowY: 'auto'
                }} 
            >
                <Box sx={{ height: '100%', width: '100%' }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 4, lg: 12 }}>
                        {
                            filters[location].image.map( (filter: string, index: number) => {
                                return (
                                    <Grid item xs={2} sm={2} md={2} lg={4} key={index}>
                                        <Card sx={{ maxWidth: 345, m: 2 }} key={index}>
                                            <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={filter}
                                                alt="TOPNOTCHERS 2022"
                                            />
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })

                        }
                        </Grid>
                </Box>
            </Box>
        </>
    )
})

export default GalleryDetails