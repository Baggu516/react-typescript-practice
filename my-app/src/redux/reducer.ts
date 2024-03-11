// reducers.ts
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

interface State {
 loading: boolean;
 data: any;
 error: string | null;
}

const initialState: State = {
 loading: false,
 data: [],
 error: null,
};

export const dataReducer = (state = initialState, action: any) => {
 switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
 }
};