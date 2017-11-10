import { takeLatest, call, put, select } from 'redux-saga/effects';

class Api {
  static rooms()
  {
    return fetch('https://qa02-bingo.bedegaming.net/api/v1/games/bingo/available/', {
      headers: {
        'x-site-code': 'bingostars.com'
      }
    })
    .then(res => res.json())
    .catch(e => console.log(e));
  }
}

function* fetchRooms(action) {
  try {
    const state = select();
    const rooms = yield call(Api.rooms);
    yield put({type: "FETCH_ROOMS_SUCCEEDED", payload: { rooms }});
  } catch(e) {
    yield put({ type: "FETCH_ROOM_FAILED", payload:{ message: e.message }});
  }
}

function* rootSaga() {
  yield takeLatest("ADD_ROOM", fetchRooms);
}

export default rootSaga;
