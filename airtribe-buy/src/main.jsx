import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme,MantineProvider } from '@mantine/core'
import App from './App.jsx'
import "@mantine/core/styles.css"
import './index.css'
const theme = createTheme({

})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
    <App />
    </MantineProvider>
  </React.StrictMode>,
)
