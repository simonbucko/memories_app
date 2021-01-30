import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        backgroundColor: 'rgb(0,210,0)',
        '&:hover': {
            backgroundColor: 'rgb(0,230,0)'
        }
    },
    buttonAddIcon: {
        marginBottom: 10,
        backgroundColor: '#00b7ff',
    },

}));