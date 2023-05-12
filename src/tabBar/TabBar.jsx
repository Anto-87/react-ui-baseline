import { TabList, TabPanel, TabContext } from '@mui/lab'
import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Component1 from '../component/component1/Component1'
import Component2 from '../component/component 2/Component2'
import Component3 from '../component/component3/Component3'
import Grid from '../component/grid/Grid';

export default function TabBar() {

    const [tabValue, setTabValue] =  React.useState('1');

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    }

  return (
    <Box >
    <TabContext value= {tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
            <TabList onChange={handleChange}>
                <Tab label="Component1" value ="1" />
                <Tab label="Component2" value ="2" />
                <Tab label="Component3 " value ="3" />
                <Tab label="Component4 " value ="4" />
            </TabList>
        </Box>
        <TabPanel value="1">
            <Component1/>
        </TabPanel>
        <TabPanel value="2">
            <Component2 />
        </TabPanel>
        <TabPanel value="3">
            <Component3 />
        </TabPanel>
        <TabPanel value="4">
            <Grid />
        </TabPanel>
    </TabContext>
    </Box >
  )
}
