import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Titulo from './components/titulo.jsx'
import Checkbox from './components/checkBox.jsx'
import ItemLista from './components/itemLista.jsx'
import Lista from './components/lista.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Lista />
  </React.StrictMode>,
)
