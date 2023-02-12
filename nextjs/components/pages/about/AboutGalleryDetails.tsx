
import { useState } from 'react'

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '900px',
};

const AboutGalleryDetails = (( cards:any ) => {

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState();

    const handleOpen = (card: any) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setImage(card);
            setOpen(true);
          }
    }
    const handleClose = () => setOpen(false);

    return (
        <>
            {
                cards.cards.map( (card: any, index: number) => {
                    return (
                        <Card sx={{ maxWidth: 345, m: 2 }} key={index} onClick={handleOpen(card)}>
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
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <img src={image} alt="Picture of the Topnotchers" style={{ height: '100%', width: '100%' }}/>
                    </Box>
                </Modal>
            </div>
        </>
      );
})

export default AboutGalleryDetails