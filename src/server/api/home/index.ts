import { Dispatch } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { ActionType } from '../../../client/features/user-list/action-type';
// import { DataService } from 'features/user-list/services/data-service';
export const fetchUserList = () => async (dispatch: Dispatch) => {
  await dispatch({
    type: ActionType.SETUSERLIST,
    payload: [
      {
        id: 1,
        name: 'Rahul',
      },
      {
        id: 1,
        name: 'Vinod',
      },
      {
        id: 1,
        name: 'Piyush',
      },
    ],
  });
};
export default async (store: Store, params: any) => {
  try {
    await store.dispatch<any>(fetchUserList());
  } catch (error) {
    console.log('Load Data err', error);
    return;
  }
};
