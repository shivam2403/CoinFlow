import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open,setOpen]=useState(false);


  return (
    <div>
        <Button style={{color:"#fff"}} onClick={()=>setOpen(true)}><MenuIcon/></Button>
        <Drawer
          anchor={'right'}
          open={open}
          onClose={()=>setOpen(false)}
        >
          <div className='drawer-div'>
            <Link to="/">
                <p className='link'>Home</p>
            </Link>
            <Link to="/">
                <p className='link'>Compare</p>
            </Link>
            <Link to="/">
                <p className='link'>Watchlist</p>
            </Link>
            <Link to="/">
                <p className='link'>Dashboard</p>
            </Link>
        </div>
        </Drawer>
    </div>
  );
}
