// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LogIn from './components/LogIn';
import ErrorBoundary from './ErrorBoundry';
import HomePage from './components/HomePage';
import { Fragment, useEffect } from 'react';
import SignUp from './components/SignUp';
import { useDispatch } from 'react-redux';
import { authenticationActions } from './store';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const value = localStorage.getItem('isLoggedIn', '1');
    if (value === '1') {
      dispatch(authenticationActions.logedIn())
      navigate('/home')
    }
    else {
      navigate('/login');
    }
  }, []);
  useEffect(() => {

  }, [])


  return (
    <Fragment>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </ErrorBoundary>



    </Fragment>
  );
}

export default App;
