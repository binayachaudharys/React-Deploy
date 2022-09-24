import { all,call, put, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess,fetchCategoriesEnd } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const fetchCategoriesAsyncs = () => async (dispatch) =>{
//     dispatch(fetchCategoriesStart());
    
//   };

  export function* fetchCategoriesAsyncs(){
    try {
        const categoriesArray = yield call( getCategoriesAndDocuments,'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
        // dispatch(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(fetchCategoriesEnd(error));
        // dispatch(fetchCategoriesEnd(error));
      }

  }

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsyncs)
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]);
}
