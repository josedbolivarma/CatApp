import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registerAsync } from '../redux/actions/actionRegister';
//Material UI
import { makeStyles } from '@material-ui/core';
import { LinkRedirect } from '../styled/styledcomponents';
import { useForm } from '../components/Hooks/useForm';

const Register = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
      nombre: '',
      email: '',
      pass1: '',
      pass2: ''
  })

  const { nombre, email, pass1, pass2 } = values;

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('/REGISTER.JS ',values);
      dispatch(registerAsync(email, pass1, nombre));
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
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit} className={classes.form}>
                <h5>E-mail</h5>
                <input type='email' 
                name='email'
                value={email}
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='pass1'
                value={pass1}
                onChange={handleInputChange}
                /> 
                  <h5>Repeat Password</h5>
                <input type='password'
                name='pass2'
                value={pass2}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={classes.login__signUpButton}>Sign Up</button>
            </form>
            
            <p>
                <b>Cats App</b>
            </p>
            <LinkRedirect to='/login'>
                Login
            </LinkRedirect>

         
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        height: '100vh',
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
            marginBottom: '20px',
        },
        '& p': {
            marginTop: '15px',
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
        
        cursor: 'pointer'
    },
    login__signUpButton: {
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
    }
   
}))

export default Register;