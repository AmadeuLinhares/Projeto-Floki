import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { AddProdutoSuccess, AddProdutoRequest } from './actions';
import { ActionsTypesProdutos } from './interfacesActtions';

type Parametros = {
  id: string;
};

function* fetchUser(id: string) {
  const response = yield call(api.get, `cars/${id}`);
  yield put(AddProdutoSuccess(response));
}

function* AddProduto({ id }: ReturnType<typeof AddProdutoRequest>) {
  const response = yield call(api.get, 'cars');
  yield put(AddProdutoSuccess(response));
}
// export default all([takeLatest('ADD_TO_CAR_REQUEST', AddProduto)]);

export default all([takeLatest(ActionsTypesProdutos.ADD_Request, AddProduto)]);
