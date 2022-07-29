import React, { Fragment } from 'react';
import CardPost from 'components/CardPost/CardPost';
import ModalComments from 'components/ModalComments/ModalComments';
import ModalUser from 'components/ModalUser/ModalUser';

const Home = () => {
  return (
    <Fragment>
      <CardPost />
      <ModalComments />
      <ModalUser />
    </Fragment>
  );
};

export default Home;
