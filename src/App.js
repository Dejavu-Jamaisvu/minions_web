// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './onepirate/Home';
import SingnIn from './onepirate/SignIn';
import SingnUp from './onepirate/SignUp';
import ForgotPassword from './onepirate/ForgotPassword';
import Privacy from './onepirate/Privacy';
import Terms from './onepirate/Terms';
import Hello from './onepirate/Hello';
import Secret from './onepirate/Secret';
import Error from './onepirate/Error';

function App() {
  return (

    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<SingnIn />}/>
          <Route path="/sign-up" element={<SingnUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/privacy" element={<Privacy />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/hello" element={<Hello />}/>
          <Route path="/secret" element={<Secret />}/>
          <Route path="/error" element={<Error />}/>
        </Routes>
      </div>
    </BrowserRouter>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
