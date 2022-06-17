import * as express from 'express';
// import { ServerUtil } from '../server-util';
import { configureAppStore } from '../../shared/store';
import desktopReducer from '../../client/root-reducer';
// import mobileReducer from '../../client/mobile/root-reducer';

const addStore = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const reducer: any = desktopReducer;
  // if (ServerUtil.isMobile(device)) {
  //     reducer = mobileReducer;
  // }
  res.locals.store = configureAppStore({ reducer });
  next();
};

export default addStore;
