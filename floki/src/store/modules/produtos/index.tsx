interface Actions {
  type: string;
  produto: Object;
}
export default function ProdutosList(state = [], action: Actions) {
  switch (action.type) {
    case 'ADD_TO_CART_SUCCESS':
      return [];
    default:
      return state;
  }
}
