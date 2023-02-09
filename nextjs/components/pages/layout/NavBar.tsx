import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

type LinkTabProps = {
    label: string;
    href: string;
    disabled?: boolean
    value?: string
}

// const LinkTab = ((props: LinkTabProps) => {
//     return (
//       <Tab
//         component="a"
//         onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//           event.preventDefault();
//         }}
//         {...props}
//       />
//     );
// })

const NavBar = ( () => {
    const [value, setValue] = useState('about');

    const links:LinkTabProps[] = [
        { label:'About', href:'/about', value:'about' },
        { label:'Modules', href:'/modules', disabled: true, value:'modules' },
        { label:'Contacts', href:'/contacts', disabled: true, value:'contacts' },
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
                                            <Tab label={link.label} href={link.href} value={link.value} disabled />
                                        </span>
                                    </Tooltip>
                                )
                            } else {
                                return (
                                    <Tab onClick={navigate} style={{color: 'white'}} label={link.label} href={link.href} value={link.value} />
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