import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';

import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles';

export default function Product({ product, onAddToCart }) {
  const classes = useStyles();

  function handleAddToCart () {
    onAddToCart({ product });
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product?.image}
        title={product?.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h5' gutterBottom>
            {product?.name}
          </Typography>
          <Typography variant='h5'>${product?.price}</Typography>
        </div>
        <Typography mt={2} variant='body2' color='textSecondary'>
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Add to Cart' onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
