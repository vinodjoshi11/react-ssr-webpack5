import { Dispatch } from 'redux';
import { dataService } from './services/data-service';
import { ActionType } from './action-type';

export const fetchUserList = () => async (dispatch: Dispatch, getState) => {
  const res = await dataService.getUser();
  console.log(res, '-------------response');
  dispatch({
    type: ActionType.SETUSERLIST,
    payload: res,
  });
};
