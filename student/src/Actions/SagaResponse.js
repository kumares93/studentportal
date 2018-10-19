import {takeEvery,takeLatest, put,call,all} from 'redux-saga/effects';
const Login="LOGIN";
const Signup="SIGNUP";
export default function* watchLogin(){
    yield all([
        takeLatest(Signup, signupAsync), 
        takeLatest(Login, loginAsync),
      ]);
}

function* loginAsync(action){
   const url = '/login';
   console.log(url);
   const body={method: 'post', headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                                },
                body: JSON.stringify({"userid":action.event.target[0].value,"pass":action.event.target[1].value})}
const actionAsync= yield call(callApi,url,body)
yield put({    type:"LOGIN_ASYNC",
               ren: actionAsync
})
};
function* signupAsync(action){
    const e=action.event;
    const url = `./signup`;                           
    const body={method: 'post', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({"userid":e.target[0].value,"pass":e.target[1].value,"name":e.target[3].value,"age":e.target[4].value})};
        const actionAsync= yield call(callApi,url,body)
    yield put({    type:"SIGNUP_ASYNC",
                   ren: actionAsync
    })
    };
export const callApi = async (url,body) => {
    console.log(url,body);
    const response = await fetch(url,body);
    const res = await response.json();
    return res;
  }

//   fetch('https://api.github.com/gists', {
//     method: 'post',
//     body: JSON.stringify(opts)
//   })