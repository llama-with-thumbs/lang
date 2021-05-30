import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SignIn from '../sing-in/SignIn.component';

const useStyles = makeStyles(() =>
  createStyles({
    backdrop: {
      zIndex: 1,
      color: '#fff',
    },
  }),
);

const LoginMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        className="login-button dark"
        variant="contained"
        onClick={handleToggle}
      >
        Login
      </Button>
      <Backdrop className={classes.backdrop} open={open}>
        {/* <CircularProgress color="inherit" /> */}
        <SignIn />
      </Backdrop>
    </div>
  );
};
export default LoginMenu;
