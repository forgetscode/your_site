import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useColorMode } from '../context/ColorModeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { FormControlLabel } from '@mui/material';



const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Toggle() {
    const { mode, toggleColorMode } = useColorMode()
    return (
        <FormControlLabel
        control ={<Switch {...label} defaultChecked onChange={() => toggleColorMode()} />}
        label = {mode ==="dark" ? <DarkModeIcon/> : <WbSunnyIcon/>}
        />
    );
  }