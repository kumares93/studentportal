
export default function SignupAction(e)  {
    e.preventDefault();
       return {
            type:"SIGNUP",
            event:e
       }
}