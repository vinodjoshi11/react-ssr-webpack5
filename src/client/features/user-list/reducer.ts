import { produce, Draft } from 'immer';
import { ActionType } from './action-type';
import { UserListItem } from './models/user-list-item';

export const initialState: UserListItem = {
  userList: [
    {
      id: 1,
      name: 'Vinod',
    },
  ],
};

export default (
  state: UserListItem = initialState,
  action: any
): UserListItem =>
  produce(state, (draft: Draft<UserListItem>) => {
    switch (action.type) {
      case ActionType.SETUSERLIST: {
        draft.userList = action.payload;
        return;
      }
    }
  });
