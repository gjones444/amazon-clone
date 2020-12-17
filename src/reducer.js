// Setting state of user's basket
export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector; updates basket item count and cost
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  // add items to the basket array in our state in reducer
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
  // Spread operator (…) to save the previous stat
          ...state,
          basket: [...state.basket, action.item],
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
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
        return {
          ...state,
          user: action.user
        }
    default:
      return state;
  }
};

export default reducer;