
import AboutGalleryDetails from '@/components/pages/about/AboutGalleryDetails'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Topnotchers = {
    title: string
    card: any[]
}

const topnotchers: Topnotchers[] = [
    { title: '2022', card: ['topnotcher_2022.jpg']},
    { title: '2021', card: ['topnotcher_may_2021.jpg','topnotcher_dec_2021.jpg']},
    { title: '2020', card: []},
    { title: '2019', card: ['topnotcher_2019.jpg']},
    { title: '2018', card: ['topnotcher_2018.jpg']},
]

const AboutGallery = (() => {
    return (
        <>
        <Box 
            sx={{
                margin: 'auto',
                width: '90%',
            }}
        >
          {
            topnotchers.map( (topnotcher, index) => {
                return (
                    <Accordion key={index}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{topnotcher.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <AboutGalleryDetails cards={topnotcher.card} />
                    </AccordionDetails>
                  </Accordion>
                )
            })
          }
        </Box>
        </>
      );
})

export default AboutGallery