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
            // Spread operator (…) to save the previous state
            ...state,
            basket: [...state.basket, action.item],
          };
        default:
          return state;
      }
    };
  
  export default reducer;