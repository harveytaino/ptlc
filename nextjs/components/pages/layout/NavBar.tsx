import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import HomeIcon from '@mui/icons-material/Home';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactsIcon from '@mui/icons-material/Contacts';

type LinkTabProps = {
    label: string;
    href: string;
    disabled?: boolean
    value?: string
    icon?: any
}

const NavBar = ( () => {
    const [value, setValue] = useState('about');

    const links:LinkTabProps[] = [
        { label:'About', href:'/about', value:'about', icon: <HomeIcon />},
        { label:'Modules', href:'/modules', disabled: true, value:'modules', icon: <ViewModuleIcon /> },
        { label:'Gallery', href:'/gallery', disabled: true, value:'gallery', icon: <CollectionsIcon /> },
        { label:'Contacts', href:'/contacts', disabled: true, value:'contacts', icon: <ContactsIcon /> },
    ]

    const navigate = ((event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log('Does not refresh')
    })

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
      console.log(newValue)
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{style: {background:'white'}}}
                >
                    {
                        links.map( (link) => {
                            if (link?.disabled) {
                                return (
                                    <Tooltip title="Coming Soon!">
                                        <span>
                                            <Tab icon={link.icon} 
                                                 iconPosition="start" 
                                                 label={link.label} 
                                                 href={link.href} 
                                                 value={link.value} 
                                                 disabled 
                                                 style={{color: 'black'}}
                                            />
                                        </span>
                                    </Tooltip>
                                )
                            } else {
                                return (
                                    <Tab onClick={navigate} 
                                         icon={link.icon} 
                                         iconPosition="start" 
                                         label={link.label} 
                                         href={link.href} 
                                         value={link.value} 
                                         style={{color: 'green'}}
                                    />
                                )
                            }
                        })
                    }
                </Tabs>
            </Box>
        </>
    )
})

export default NavBar