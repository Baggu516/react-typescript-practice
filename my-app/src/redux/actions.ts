import { FETCH_DATA_FAILURE,FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS } from "./types";
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
   });
   
   export const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
   });
   
   export const fetchDataFailure = (error: string) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
   });


   export const fetchData = () => {
    return async (dispatch: any) => {
       dispatch(fetchDataRequest());
       try {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         dispatch(fetchDataSuccess(data));
       } catch (error:any) {
         dispatch(fetchDataFailure(error.toString()));
       }
    };
   };