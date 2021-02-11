import React from 'react'
import Paypal from '../Assets/Paypal.png'
import Visa from '../Assets/Visa.png'
import Mastercard from '../Assets/Mastercard.png'
import dress from '../Assets/dress.png'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
        display: 'flex',
      },
    },
  }));

const useStyless = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      textAlign: 'center',
     
    },
  }));


const Paiement = () => {
    const classes = useStyles();
    const classess = useStyless();


    return (
        <div className="paiment">
          
            <div className="formInput">
                <p> Adresse de paiement </p>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Prénom" variant="outlined" />
                    <TextField id="outlined-basic" label="Nom" variant="outlined" />
                    <TextField id="outlined-basic" label="Adresse" variant="outlined" />
                    <TextField id="outlined-basic" label="Télephone" variant="outlined" />
                </form>
                <Button
                variant="contained"
                color="secondary"
                className={classess.button}
                >
                Passer votre commande 
                </Button>
                <p> Retour au paiment </p>
                <p> Nous accepterons</p>
                <img src={Visa}  width="5%"/>
                <img src={Mastercard}  width="5%"/>
                <img src={Paypal} width="5%" />
            </div>
            <div className="final">
                <img src={dress} width= "100px" />   
                <p> Drop Shoulder Swiss Dot Smock Dress</p>
                <hr/>  
                <p> Sous-Total: 27€ </p>
                <p> Frais de livraison: 2€ </p>
                <hr/>
                <p> Total: 29€</p>
            </div>
            
        </div>
    )
}

export default Paiement