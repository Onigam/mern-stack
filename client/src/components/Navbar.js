import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from '../Auth/store/UserActions';

const useStyles = makeStyles((theme) => ({
    title: {
        marginRight: "24px",
    },
}));

const Navbar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const isAuth = useSelector(state => state.user.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout());
    }

    const navItems = [
        { id: 'home', text: 'Home', link: '/', auth: null },
        { id: 'login', text: 'Login', link: '/login', auth: false },
        { id: 'signup', text: 'Signup', link: '/signup', auth: false },
        { id: 'logout', text: 'Logout', handler: handleLogout, auth: true }
    ];


    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    {
                        navItems.filter(item => item.auth == null || item.auth === isAuth).map(item => (
                            <Typography key={item.id} variant="h6" className={classes.title}>
                                {
                                    item.link ? <Link component={RouterLink} to={item.link} className="text-white">{item.text}</Link>
                                        : <Link component="button" onClick={item.handler} className="text-white">{item.text}</Link>
                                }
                            </Typography>
                        ))
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
