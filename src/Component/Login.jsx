import React, {useContext } from 'react';
import Context from '../Provider/context';

const Login = () => {
const {
  getLogin,
  getPass,
  userReturn,
  isLogin,
  isRegister
} = useContext(Context);

  return (
  <form>
    <div className="form-group">
      <input type="text" name="login" id="loginLabel" className="form-control" placeholder="E-mail" onChange={({target}) => getLogin(target.value)}/>
    </div>
    <div className="form-group">
      <input type="password" name="pass" id="passwordLabel" className ="form-control"placeholder="Password" onChange={({target}) => getPass(target.value)}/>
    </div>        
      <span className="text.danger">{userReturn}</span>
      <div className="form-group form-check">
       <input type="checkbox" className="form-check-input" name="rememberme" id="remember"/> Remember-me
      </div>
      <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={() => isLogin()}>LOGIN</button>
      <button type="button" className="btn btn-primary" onClick={() => isRegister()}>REGISTER</button>
      </div>
  </form>
  );
}


export default Login;