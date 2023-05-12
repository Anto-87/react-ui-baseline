import './login.css';
import React from 'react';
import {TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const submit = (e) =>{
    e.preventDefault();
    navigate('/dashboard');

  }

  return (
    <div className="loginpanel">
          <div className="formpanel">
          <TextField id="standard-basic" label="UserName" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained" onClick={submit}>Login</Button>
          </div>
     </div>

  );
}
