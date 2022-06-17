import * as React from 'react';
import { withRouter } from 'react-router-dom';
import UserList from '../../features/user-list/components';
const About = (props: any) => {
  const onClickHome = () => {
    props.history.push('/');
  };
  return (
    <React.Fragment>
      <a href={'/'} onClick={onClickHome}>
        Home
      </a>
      <div>About Page</div>
      <UserList />
    </React.Fragment>
  );
};

export default withRouter(About);
