import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useStoreGeneralInformation } from 'store/useStoreGeneralInformation';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { userInformation, setuserInformation } = useStoreGeneralInformation();

  const responseGoogle = (response: any) => {
    localStorage.setItem('userInfo', JSON.stringify(response?.profileObj));
    localStorage.setItem('is-authenticated', 'true');
    setuserInformation(response?.profileObj);
  };
  const responseGoogleError = (response: any) => {
    console.error('Error', response);
  };
  useEffect(() => {
    if (userInformation !== '') {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [navigate, userInformation]);

  return (
    <div className="login-container">
      <div className="auth-google">
        <img
          className="img-login"
          src="https://dummyapi.io/img/icon.png"
          width={80}
        />
        <h3>Prueba DummyApi para Tita Media</h3>
        <GoogleLogin
          clientId="282806600206-pdbfktcgg2qevormmivkvfjq61ugcf21.apps.googleusercontent.com"
          buttonText="Inicia sesión con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleError}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};
export default Login;
