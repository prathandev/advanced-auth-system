import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux"
import store from './redux/store.js'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persister = persistStore(store);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
