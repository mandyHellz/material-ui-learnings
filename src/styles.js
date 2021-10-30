import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {

    console.log(theme);

    return {
        container: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6)
        },
        icon: {
            marginRight: '20px',
        },
        buttons: {
            marginTop: '40px',
        },
        cardGrid: {
            paddint: '20px 0',
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        cardMedia: {
            paddingTop: '56.25%'
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: '80px 0 50px'
        },
    }
});

export default useStyles;