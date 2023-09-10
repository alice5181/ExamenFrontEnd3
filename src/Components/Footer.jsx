import React from 'react'
import './Footer.css';
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const { theme} = useContextGlobal();

  return (
    <footer className={theme}> 
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer