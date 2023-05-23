const defaultState = {
    customers: []
}
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const FETCH_CUSTOMER = 'FETCH_CUSTOMER'


export const customerReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_CUSTOMER':
            return {...state, customers: action.payload} 
        default:
            return state
    }
  }

  export const AddCustomerAction = (payload) => ({type:'ADD_CUSTOMER', payload})
  export const fetchCustomers = () => ({type:'FETCH_CUSTOMER'})