import './style/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './js/components/Header/Header';
// Screens
import Home from './js/screens/Home/Home';
import Login from './js/screens/Login/Login';
import Locales from './js/screens/Locales/Locales';
import Locale from './js/screens/Locale/Local';

function App() {
  return (
    <BrowserRouter>
      <div className="O-App">
        <Header />

        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/locales" component={Locales} />
        <Route path="/locale" component={Locale} />
      </div>
    </BrowserRouter>
  );
}

export default App;
