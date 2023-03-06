import React from 'react';
import {
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
} from '@mui/material';
import useStyles from './styles';

export default function CartItem({ item, handleRemove, handleDecrease, handleIncrease }) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Typography variant='h4'>{item?.product?.name}</Typography>
        <Typography variant='h5'>${item?.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type='button' size='small' onClick={() => handleDecrease(item.product.id, item.quantity)}>
            -
          </Button>
          <Typography>{item?.quantity}</Typography>
          <Button type='button' size='small' onClick={() => handleIncrease(item.product.id)}>
            +
          </Button>
        </div>
        <Button variant='contained' type='button' color='secondary' onClick={() => handleRemove(item)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
