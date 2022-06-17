import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../model';
const UserList = () => {
  const { userList } = useSelector((state: AppState) => state.user);
  return (
    <React.Fragment>
      <ul>
        {userList.map((i, index) => {
          return <li key={index}>{i.name}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};
export default UserList;
