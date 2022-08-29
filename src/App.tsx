import React from 'react';
import AppRouter from './router/AppRouter';
import './styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';
import MyToastContainer from './ui/MyToast/MyToastContainer';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <MyToastContainer />
    </div>
  );
}

export default App;
