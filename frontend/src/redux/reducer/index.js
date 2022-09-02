import {
  GET_NAME_PRODUCT,
  GET_PRODUCTS,
  ORDER_ALPHABETICAL,
  ORDER_PRICE,
  GET_PRODUCT_BY_CATEGORY,
  GET_CATEGORIES,
  CLEAN_DETAIL,
  FILTER_BY,
  SET_PAGE,
  WEEK_PROD,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ORDER_PRODUCT,
  CLEAR_CART,
  FILTER_BY2,
} from "../actions/ActionTypes.js";
import { GET_DETAIL } from "../actions/ActionTypes";

const initialState = {
  product: [],
  productCopy: [],
  productCopy2: [],
  prodDetail: {},
  categories: [],
  page: 0,
  weekProd: [],
};

export default function reducer(state = initialState, { type, payload }) {
  //vamos a ejecutar los typos de accion para saber donde ejecutar cada logica
  switch (type) {
    case GET_NAME_PRODUCT:
      return {
        ...state,
        product: payload,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        product: payload,
        productCopy: payload,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        categories: payload,
      };

    case ORDER_ALPHABETICAL:
      const sortedName =
        payload === "A-Z"
          ? state.product.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.product.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        product: sortedName,
      };

    case ORDER_PRICE:
      const sortedPrice =
        payload === "min_price"
          ? state.product.sort((a, b) => parseInt(a.price) - parseInt(b.price))
          : state.product.sort((a, b) => parseInt(b.price) - parseInt(a.price));
      return {
        ...state,
        product: sortedPrice,
      };
    case GET_DETAIL: {
      return {
        ...state,
        prodDetail: payload,
      };
    }
    case CLEAN_DETAIL: {
      return {
        ...state,
        prodDetail: payload,
      };
    }
    case FILTER_BY: {
      return {
        ...state,
        product:
          payload === "all"
            ? state.productCopy
            : state.productCopy.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
        productCopy2:
          payload === "all"
            ? state.productCopy
            : state.productCopy.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
      };
    }
    case FILTER_BY2: {
      return {
        ...state,
        product:
          payload === "all"
            ? state.productCopy2
            : state.productCopy2.filter((prod) =>
                prod.categories.some((cat) => cat.name === payload)
              ),
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: payload,
      };
    }
    case WEEK_PROD: {
      return {
        ...state,
        weekProd: payload,
      };
    }
    case ADD_TO_CART:{
        return{

        }
    }
    case ORDER_PRODUCT:{
      return{

      }
    }
    case REMOVE_ONE_FROM_CART:{
      return{

      }
    }
    case REMOVE_ALL_FROM_CART:{
      return{
        
      }
      
    }
    case CLEAR_CART:{
      return{

      }
    }
    default:
      return state;
  }
}
