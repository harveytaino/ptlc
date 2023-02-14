import { useRouter } from 'next/router'

import { useState, useEffect } from 'react';
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

    const router = useRouter()

    const [value, setValue] = useState(router.pathname);

    const links:LinkTabProps[] = [
        { label:'About', href:'/about', value:'/about', icon: <HomeIcon />},
        { label:'Gallery', href:'/gallery', disabled: true, value:'/gallery', icon: <CollectionsIcon /> },
        { label:'Contacts', href:'/contacts', disabled: false, value:'/contacts', icon: <ContactsIcon /> },
    ]

    const navigate = ((event: React.SyntheticEvent) => {
        event.preventDefault();
    })

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      event.preventDefault()
      setValue(newValue);
      router.push(newValue)
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{style: {background:'green', color:'green'}}}
                >
                    {
                        links.map( (link, index) => {
                            if (link?.disabled) {
                                return (
                                    <Tooltip key={index} title="Coming Soon!">
                                        <span>
                                            <Tab 
                                                 key={index}
                                                 icon={link.icon} 
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
                                    <Tab 
                                        key={index}
                                        onClick={navigate} 
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