import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    root:{
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: "100%",
        // "56.25%",
        cursor: 'pointer'
    },
    cardActions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'column',

    },
    pourcentage: {
        backgroundColor: "pink",
        color: "red" ,
        position: "relative"

    },
    prices:{
        fontWeight: "bold"
    },
    
    del: {
        color: "red",
        margin: "5px",
        
    }


}));