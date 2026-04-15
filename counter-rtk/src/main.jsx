import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>

)

// MVC folder structure
// M - Model - data
// V - View - UI,screens,components
// C - Controller - Logic