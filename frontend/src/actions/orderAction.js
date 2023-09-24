import axios from "axios";
import {

    CREAT_ORDER_REQUEST,CREAT_ORDER_SUCCESS,CREAT_ORDER_FAIL,
    MY_ORDER_REQUEST,MY_ORDER_SUCCESS,MY_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
} from "../constants/orderConstant";

export const createOrder=(order)=> async(dispatch)=>{

    try{
        dispatch({
            type:CREAT_ORDER_REQUEST,
        })
        const config={
            headers:{
                "Content-Type": "application/json"
            }
        }
        const {data} = await axios.post("/api/v1/eats/orders/new",order,config)
        dispatch({
            type:CREAT_ORDER_SUCCESS,
            payload:data,
        })
    } catch(error){
        dispatch({type:CREAT_ORDER_FAIL, payload:error.response.data.message});
    }
};

export const myOrders=()=> async(dispatch)=>{

    try{
        dispatch({
            type:MY_ORDER_REQUEST,
        })
        
        const {data} = await axios.get("/api/v1/eats/orders/me/myOrders");
        dispatch({
            type:MY_ORDER_SUCCESS,
            payload:data.orders,
        })
    } catch(error){
        dispatch({type:MY_ORDER_FAIL, payload:error.response.data.message});
    }
};

export const getOrderDetails=(id)=> async(dispatch)=>{

    try{
        dispatch({
            type:ORDER_DETAILS_REQUEST,
        })
        
        const {data} = await axios.get(`/api/v1/eats/orders/${id}`);
        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:data.order,
        })
    } catch(error){
        dispatch({type:ORDER_DETAILS_FAIL, payload:error.response.data.message});
    }
};

export const clearErrors=() => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS,
    });
};