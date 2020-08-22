import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './reactotron/ReactotronConfig';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
