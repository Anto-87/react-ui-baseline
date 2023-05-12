import React from 'react'
import './component1.css'
import {TextField, 
        Button, 
        Box, 
        Checkbox,
        FormLabel,
        RadioGroup,
        Radio,
        FormControlLabel,
        MenuItem,
        Select,
        Switch,
        InputLabel,
        InputAdornment,
        Input
    } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Component1() {

  return (

<div className="container">
          <div className="formpanel">
              <div className="inputElement">
                  <FormLabel>Sample Data </FormLabel>
              </div>
              <div className="inputElement">   
          <RadioGroup row>
              <FormControlLabel value="Data1" control={<Radio />} label="Data1" />
              <FormControlLabel value="Data2" control={<Radio />} label="Data2" />
              <FormControlLabel value="Data3" control={<Radio />} label="Data3" />
          </RadioGroup>
          </div>
          <div className="inputElement">
          <FormControlLabel control={<Checkbox />} label="Is PO ?" />
          </div>
          <div className="inputElement">
          <InputLabel>Age</InputLabel>
          <Select label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </div>
          <div className="inputElement">
          <FormControlLabel required control={<Switch />} label="Required" />
          </div>
          <div className="inputElement">
          <TextField id="standard-basic" label="Standard" variant="standard" />
          </div>
          <div className="inputElement">
          <Input
              id="input-with-icon-adornment"
              startAdornment={
              <InputAdornment position="start">
                  <AccountCircle />
              </InputAdornment>} />
            </div>
            <div className="inputElement">
          <Button variant="contained">Submit</Button>
          </div>
          </div>
      </div>
      );
    }