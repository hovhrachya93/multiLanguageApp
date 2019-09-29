import React from 'react';
import LocaleContext from '../contexts/locale'

const Header = () => {
    const { setLocale } = React.useContext(LocaleContext)
   
    return (
        <header>
            <select onChange={ e => setLocale(e.target.value)}>
                <option value="en">English</option>
                <option value="am">Armenian</option>
                <option value="ru">Russian</option>
            </select>
        </header>
    )

}

export default Header