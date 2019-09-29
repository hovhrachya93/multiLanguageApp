import React from 'react';
import LocalContext from '../contexts/locale';

const Footer = () => {
    const { locale } = React.useContext(LocalContext)
    return(
        <footer>
      <img src={`/flags/${locale}.svg`} alt={`Flag of ${locale}`} width="15px" />   
        </footer>
    )
}

export default Footer