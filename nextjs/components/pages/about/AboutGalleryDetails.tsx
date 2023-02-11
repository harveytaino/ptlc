

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const AboutGalleryDetails = (( cards:any ) => {
    return (
        <>
            {
                cards.cards.map( (card: any, index: number) => {
                    return (
                        <Card sx={{ maxWidth: 345 }} key={index}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={card}
                                alt="TOPNOTCHERS 2022"
                            />
                            {/* <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TOPNOTCHERS 2022
                                </Typography>
                            </CardContent> */}
                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </>
      );
})

export default AboutGalleryDetails