import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import useStyles from './styles';
import CartItem from './cartItem/CartItem';
import { Link } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const classes = useStyles();
  const [subtotal, setSubtotal] = useState(0);

  // const isEmpty = !cart.length;

  const handleRemove = (item) => {
    // const newCart = cart.filter(cartItem => cartItem.product.id !== item.id)
    const newCart = cart.filter((cartItem) => cartItem !== item);

    setCart(newCart);
  };

  const handleEmptyCart = () => {
    setCart([]);
  };

  const handleIncrease = (itemId) => {
    const updateCart = cart.map(cartItem => {
      if (cartItem.product.id === itemId) {
        // const price = parseFloat(cartItem.product.price.replace("$", ""));
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          price: (cartItem.quantity + 1) * cartItem.product.price
        }
      }
      else {
        return cartItem
      }
    })

    // setSubtotal(subtotal + updateCart.price)

    setCart(updateCart);
  }

  const handleDecrease = (itemId, quantity) => {
    const updateCart = cart.map(cartItem => {
      if (cartItem.product.id === itemId) {
        // const price = parseFloat(cartItem.product.price.replace("$", ""));
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          price: (cartItem.quantity - 1) * cartItem.product.price
        }
      }
      else {
        return cartItem
      }
    })

    console.log(cart);
  
    const newCart = updateCart.filter(item => item.quantity !== 0);
    setCart(newCart);
  }

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
    setSubtotal(newSubtotal);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
      You have no items in your shopping cart,{' '}
      <Link to='/' style={{ color: 'blue' }} className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );

  return (
    <Container sx={{ marginTop: '5rem' }}>
      <div className={classes.toolBar} />
      <Typography className={classes.title} variant='h3'>
        Your Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  item={item}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                  handleRemove={handleRemove}
                />
              </Grid>
            ))}
            <div className={classes.cartDetails}>
              <Typography variant='h4'>
                Subtotal: ${subtotal.toFixed(2)}
              </Typography>
              <div>
                <Button
                  className={classes.emptyButton}
                  size='large'
                  type='button'
                  variant='contained'
                  color='secondary'
                  onClick={handleEmptyCart}
                >
                  Empty Cart
                </Button>
                <Button
                  className={classes.checkoutButton}
                  size='large'
                  type='button'
                  variant='contained'
                  color='primary'
                >
                  Checkout
                </Button>
              </div>
            </div>
          </Grid>
        </>
      )}
    </Container>
  );
}
