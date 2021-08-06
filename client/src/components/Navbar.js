import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const navItems = [
    { id: 'home', text: 'Home', link: '/', auth: false },
    { id: 'login', text: 'Login', link: '/login', auth: false },
    { id: 'signup', text: 'Signup', link: '/signup', auth: false },
    { id: 'logout', text: 'Logout', link: '/logout', auth: true }
];


const useStyles = makeStyles((theme) => ({
    title: {
        marginRight: "24px",
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const isAuth = useSelector(state => state.user.isLoggedIn);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    {
                        navItems.filter(item => item.auth === isAuth).map(item => (
                            <Typography key={item.id} variant="h6" className={classes.title}>
                                <Link href={item.link} className="text-white">{item.text}</Link>
                            </Typography>
                        ))
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
