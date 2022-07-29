import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreGeneralInformation } from 'store/useStoreGeneralInformation';

const Navbar = () => {
  const { userInformation, setuserInformation } = useStoreGeneralInformation();
  const navigate = useNavigate();
  const [showClosedText, setshowClosedText] = useState<boolean>(false);
  const handlerShowClosedSession = () => {
    setshowClosedText(!showClosedText);
  };
  const onLogoutSuccess = () => {
    localStorage.clear();
    setuserInformation('');
    navigate('/');
    return;
  };

  useEffect(() => {
    if (userInformation === '') {
      navigate('/');
    }
  }, [navigate, userInformation]);

  return (
    <nav className="menu">
      <h2 className="name-user">{userInformation?.name}</h2>
      <button className="button-profile" onClick={handlerShowClosedSession}>
        <img
          className="user-avatar"
          src={userInformation?.imageUrl}
          alt={userInformation?.name}
        />
      </button>

      {showClosedText && (
        <button className="close-session" onClick={onLogoutSuccess}>
          Salir
        </button>
      )}
    </nav>
  );
};

export default Navbar;
