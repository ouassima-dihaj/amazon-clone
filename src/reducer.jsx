//3
export const initialState = {
  basket: [],
  user:null,
};

//5
const reducer = (state, action) => {
  //when ever u click on add to basket function it will dispatch and add to button
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
           ///remove the eelement 
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
        case "SET_USER":
          return{
            ...state,
            user:action.user,
          }
    default:
      return state;
  }
};
export default reducer;
