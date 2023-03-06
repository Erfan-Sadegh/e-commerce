import React from 'react';
import { Grid } from '@mui/material';
import Product from './product/Product';

import useStyles from './styles'

export default function Products({ products, onAddToCart }) {
  const classes = useStyles();

  return (
    <main className={classes.content} style={{marginTop: '5rem'}}>
      <div className={classes.toolBar}></div>
      <Grid container justifyContent='center' spacing={4}>
        {products?.map((product) => (
          <Grid key={product?.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}


