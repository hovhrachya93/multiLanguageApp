import React from 'react';

import { I18n } from 'react-polyglot'
import axios from 'axios'

import LocaleContext from './contexts/locale'
import Message from './components/message'
import Header from './components/selectLang'
import Footer from './components/flag'

import './App.css';

const App = () => {
  const [locale, setLocale] = React.useState('en')
  const [messages, setMessages] = React.useState({})

  React.useEffect(
    () => {
      async function fetchData() {
        const result = await axios.get(`/translations/${locale}.json`)
        setMessages(result.data)
      }
      fetchData()
    },
    [locale]
  )

  return (
    <div className="section">   
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <I18n locale={locale} messages={messages}>
        <>
          <Header />
          <Message name="User" messageCount={1} />
          <Footer />
        </>
      </I18n>
    </LocaleContext.Provider>
    </div>
  )
}

export default App;
