import * as React from 'react';
import { withRouter } from 'react-router-dom';
import UserList from '../../features/user-list/components';
const Home = (props: any) => {
  const onClickHome = () => {
    props.history.push('/');
  };
  return (
    <React.Fragment>
      <a href={'/about'} onClick={onClickHome}>
        About
      </a>
      <div>My Home Page</div>
      <UserList />
    </React.Fragment>
  );
};

export default withRouter(Home);
