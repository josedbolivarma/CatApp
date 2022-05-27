import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  loginWithEmailPassAsync } from '../redux/actions/actionLogin';
import { loginGoogle } from '../redux/actions/actionLogin';

//Material UI
import { makeStyles } from '@material-ui/core';
import { ButtonGoogle, LinkRedirect } from '../styled/styledcomponents';
import { useForm } from '../components/Hooks/useForm';

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: '',
})

  const { email, password } = values;

  const handleGoogle = () => {
      dispatch(loginGoogle());
      navigate('/');
  }

  const handleSubmit = e => {
  e.preventDefault();
  dispatch(loginWithEmailPassAsync(email, password));
  reset();
  navigate('/');
}

  return (
    <div className={classes.root}>
        <Link to='/'>
        <img 
        className={classes.login__logo}
        src='https://cdn4.iconfinder.com/data/icons/animals-57/500/cat_animal_-512.png'
        alt='Logo'
        />
        </Link>

        <div className={classes.login__container}>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit} className={classes.form}>
                <h5>E-mail</h5>
                <input type='email'
                name='email' 
                value={email}
                placeholder="Enter email"
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={classes.login__signInButton}>Sign In</button>

            <ButtonGoogle 
                type='button'
                onClick={handleGoogle}
                >
                    <img width='20px' height='20px' src='https://cdn-icons-png.flaticon.com/512/2875/2875404.png' alt='Google Icon'/>
                    Sign with Google</ButtonGoogle>
                   
         
            </form>
            
            <p>
                <b>Cats App</b>
            </p>
            <LinkRedirect to='/register'>
                Register
            </LinkRedirect>

         
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    login__logo: {
        marginTop: '4px',
        marginBottom: '4px',
        objectFit: 'contain',
        width: '100px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    login__container: {
        width: '400px',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        border: '1px solid lightgray',
        padding: '20px',
        '& h1': {
            fontWeight: '500',
            marginBottom: '12px',
        },
        '& p': {
            marginTop: '10px',
            fontSize: '12px'
        }
    },

    form: {
        '& h5': {
            marginBottom: '5px'
        },
        '& input': {
            height: '30px',
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '98%'
        }
    },
    login__signInButton: {
        background: '#111',
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '4px',
        color: '#FFF',
        letterSpacing: '1px',
        borderColor: '#000',
        cursor: 'pointer',
        '&:hover': {
            opacity: '.9'
        }
    },
    login__registerButton: {
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: 'darkgray'
    },

}))

export default Login