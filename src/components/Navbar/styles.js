import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 10px 0 5px'
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        profile: {
            justifyContent: 'center'
        },
        heading: {
            fontSize: '1.75rem'
        },
        toolbar: {
            width: '280px'
        }

    },
    [theme.breakpoints.up('sm')]: {
        heading: {
            fontSize: '3.75rem'
        },
        appBar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    },
    [theme.breakpoints.down('xs')]: {
        userName: {
            display: 'none'
        },
        purple: {
            marginRight: 10
        }

    }
}));