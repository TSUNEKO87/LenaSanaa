import React, {useState} from 'react';
import dress from '../Assets/dress.png'
import Paypal from '../Assets/Paypal.png'
import Visa from '../Assets/Visa.png'
import Mastercard from '../Assets/Mastercard.png'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Size from './Size'


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      textAlign: 'center',
      marginLeft: '40%',
      position: 'relative',
    },
  }));

const Card = () => {
    const [price, setPrice]= useState(287)
    const [qte, setQte]= useState(1)
    const [sum, setSum]= useState(0)



    const classes = useStyles();
    return (
        <div className="card">
            <h5> Panier </h5>
            <hr/>
            <div className="panier"> 
                <div className="img">
                    <img src={dress}  width= "120px"/>   
                </div>
                <div className="content">
                    <p> Robe suiss </p>
                    <p> Drop Shoulder Swiss Dot Smock Dress  </p>  
                </div>
                <div>
                    <p> Prix </p> 
                    <span> {price} </span> 
                </div>
                <div>
                    <p> Quantité </p>  
                    <input type="number" value={qte} name="quantité" min="1" max= "10"/>
                </div>
                <Size />
                <div >
                    <p> Prix Total</p>                   
                    <span> 289 </span>
                </div>   
            </div>
            <Link to="/paiment">
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
            >
            Passer votre commande 
            </Button>
            </Link>
            
            <div>
                <h5> Nous accepterons : </h5>
                <img src={Visa}  width="5%"/>
                <img src={Mastercard}  width="5%"/>
                <img src={Paypal} width="5%" />
            </div>
        </div>
    ) 
}


export default Card;