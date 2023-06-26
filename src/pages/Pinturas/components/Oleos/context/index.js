import { contextFactory } from '../../../../../config/context';

import { actionCreators, INITIAL_STATE, reducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const { useSelector, Context, useDispatch } = contextFactory(INITIAL_STATE);

export { INITIAL_STATE, actionCreators, reducer };