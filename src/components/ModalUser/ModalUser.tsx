import React, { Fragment, useEffect, useState } from 'react';
import { useStoreModalUsers } from 'store/useStoreModalUsers';
import { get } from 'api/httprequest';
import { IUserPost } from './interface';

const transformData = (data: any) => {
  const dataTransformed = {
    photo: data?.picture,
    name: data?.firstName + '' + data?.lastName,
    email: data?.email,
    phone: data?.phone,
    title: data?.title,
    country: data?.location?.country,
    adrress: data?.location?.street,
  };

  return dataTransformed;
};

const ModalUser = () => {
  const [problemGetUser, setproblemGetUser] = useState<boolean>(false);
  const [gettingData, setgettingData] = useState<boolean>(false);
  const [userInfo, setuserInfo] = useState<IUserPost | ''>('');
  const url: any = process.env.REACT_APP_API_URL_BASE;
  const { openModalUser, setopenModalUser, userId } = useStoreModalUsers();

  const handlerClosedmodal = () => {
    setopenModalUser(false);
    setproblemGetUser(false);
    setuserInfo('');
  };

  const cbResponse = (response: any) => {
    const data = response?.data;
    if (response?.error) {
      setgettingData(false);
      setproblemGetUser(true);
    } else {
      setuserInfo(transformData(data));
      setgettingData(false);
    }
  };

  useEffect(() => {
    if (userId) {
      setgettingData(true);
      get(`${url}user/${userId}`, cbResponse);
    }
  }, [url, setgettingData, userId]);

  return (
    <Fragment>
      {openModalUser && (
        <div id="modal">
          <button className="butto-close-modal" onClick={handlerClosedmodal}>
            X
          </button>
          <div className="justify-content">
            <div className="section-user">
              {gettingData && <div className="loader"></div>}
              {!gettingData && problemGetUser && (
                <div>
                  <p className="emoji-nodata">😔</p>
                  <h3 className="emoji-nodata">
                    Lo se timos hay problemas con servidor
                  </h3>
                </div>
              )}
              {userInfo !== '' && (
                <Fragment>
                  <div className="front__bkg-photo"></div>
                  <img
                    className="round"
                    src={userInfo?.photo}
                    alt={userInfo?.name}
                  />
                  <h2 className="user-option">{userInfo?.name}</h2>
                  <p className="user-option">{`${userInfo?.title}. `}</p>
                  <p className="user-option">{userInfo?.email}</p>
                  <p className="user-option">{userInfo?.adrress}</p>
                  <p className="user-option">{userInfo?.country}</p>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default ModalUser;
