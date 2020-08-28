export function AddProdutoRequest(id: string) {
  return {
    type: 'ADD_TO_CART_REQUEST',
    id,
  };
}
export function AddProdutoSuccess(produto: Object) {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    produto,
  };
}
