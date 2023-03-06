import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ totalItems }) {
  const classes = useStyles();

  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar
          className={classes.toolBar}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            <img
              src={logo}
              alt='Commerce.js'
              height={25}
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            {location.pathname === '/' && (
              <IconButton
                component={Link}
                to='/cart'
                style={{ marginLeft: 'auto' }}
                color='inherit'
                aria-label='Show cart items'
              >
                <Badge
                  badgeContent={totalItems ? totalItems : '0'}
                  color='secondary'
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
