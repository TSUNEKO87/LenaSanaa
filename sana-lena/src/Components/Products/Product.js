import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import useStyles from './styles';


function Product({product, handleClick, handleToggle}) {
    const classes = useStyles();   
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name} onClick={()=>handleClick(product.id)} > <span className={classes.pourcentage} >{product.pourcentage}</span> </CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" color="textPrimary">
                        {product.description}
                   </Typography>
                    <Typography variant="body2" className={classes.prices} >
                        <del className={classes.del}>{product.price}</del> 
                        {product.soldPrice}
                    </Typography>
                </div>          
            </CardContent>
             <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to card">
                    <AddShoppingCart onClick={()=>handleToggle(product.id)}/>
                </IconButton>
            </CardActions> 
            
        </Card>
    )
}

export default Product
