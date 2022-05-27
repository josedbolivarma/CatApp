import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* TYPOGRAPHYS */
export const LinkRedirect = styled(Link)`
    color: blue;
    font-size: .8rem;
    text-decoration: none;
`;

// Buttons

export const ButtonPrimary = styled(Button)`
width: 100%;
`

export const ButtonGoogle = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
margin-top: .4rem;
cursor: pointer;
color: #FFF;
background: #13212c;
borderRadius: 2px;
padding: .34rem .6rem;
border: none;
outline: none;
width: 100%;
marginTop: 10px;
`;

