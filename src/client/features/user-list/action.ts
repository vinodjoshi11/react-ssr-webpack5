import { UserList } from './models/user-list';
import { ActionType } from './action-type';

export const setUserList = (userList: UserList) => ({
    type: ActionType.SETUSERLIST,
    payload: userList,
});
