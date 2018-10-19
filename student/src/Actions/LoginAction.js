

export default function LoginAction(e)  {
  e.preventDefault();
               return {
                    type:"LOGIN",
                    event:e
               }
}

export function logoutAction()  {
               return {
                    type:"LOGOUT",
               }
}
export function homeAction(response)  {
  return {
       type:"HOME",
       res:response
  }
}
export function userAction(response)  {
  return {
       type:"HOME",
       res:response
  }
}