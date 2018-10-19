import React from 'react';
const error="Userid or Passowrd mismatch ";
const success="SuccessFully Updated ";
const INITIAL_STATE = {
    status:false,
    loginerror:'',
    content:{},
    homecontent:{},
    portalstatus:false
};
const OLD_STATE = atob((localStorage.getItem('id')));
console.log(OLD_STATE);
const INI_STATE=OLD_STATE?OLD_STATE:INITIAL_STATE;   
export default (state = INI_STATE, action) => {
    debugger;
    console.log(action);
    switch (action.type) {
        case "HOME"        :return{   ...state,
                                    homecontent:action.res,
                                    portalstatus:true
                                }
        case "LOGIN_ASYNC":       {
                            if(action.ren.error===error){
                                return {...state,
                                    loginerror:action.ren.error,
                                    status:false};
                                }
                            else 
                                return {...state,
                                content:action.ren,
                                status:true};
                            }
        case "SIGNUP_ASYNC":{
                            if(action.ren.report===success){
                                return {...state,
                                    loginerror: success,
                                    signup_status:true};
                                }
                            else 
                                return {...state,
                                content:action.ren,
                                signup_status:false};
                            }
        case "LOGOUT": return{
                            ...state,
                            portalstatus:true,
                            content:{},
                            status:false,
                            }
        default:            return {
                            ...state,
                            content:<h1>Welcome to Student Hub!!!<br />
                            You can find a great solution for every post </h1>
                           }
    }
};