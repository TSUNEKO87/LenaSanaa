import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'Large',
    label: 'L',
  },
  {
    value: 'Medium',
    label: 'M',
  },
  {
    value: 'Small',
    label: 'S',
  },
  {
    value: 'X-small',
    label: 'XS',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '8ch',    
    },
  },
}));
export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('S');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>      
        <TextField
          id="standard-select-currency-native"
          select
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Taille"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}