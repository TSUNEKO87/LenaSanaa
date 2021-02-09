import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import useStyles from './styles';
import {Link} from 'react-router-dom'


function Product({product, handleClick, handleToggle}) {
    const classes = useStyles();   
    return (
        <Card className={classes.root}>
        <Link to="/detail">
        {/* onClick={()=>handleClick(product.id)}  */} 
            <CardMedia className={classes.media} image={product.image} title={product.name}  > <span className={classes.pourcentage} >{product.pourcentage}</span> 
            </CardMedia>
        </Link>
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
