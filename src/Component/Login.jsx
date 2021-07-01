import React, {useContext } from 'react';
import ContextError from '../Provider/context';
import Lanterna from '../image/lanterninha.gif';


const Login = () => {
const {
  getLogin,
  getPass,
  userReturn,
  isLogin,
  isRegister
} = useContext(ContextError);

  return (
  <form className="border space ">
    <div className="sirene">
      <img src={Lanterna} alt="Sirene" />
    </div>
    <div className="container-logo">

    </div>
    <div className="form-group">
      <input 
      type="text"
      name="login"
      id="loginLabel"
      className="form-control"
      placeholder="Email"
      required
      onChange={({target}) => getLogin(target.value)}/>
    </div>
    <div className="form-group">
      <input 
      type="password" 
      name="pass" 
      id="passwordLabel" 
      className ="form-control"
      placeholder="Senha"  
      required 
      onChange={({target}) => getPass(target.value)}/>
    </div>        
      <span className="text.danger">{userReturn}</span>
      <div className="form-group form-check">
       <input type="checkbox" className="form-check-input" name="rememberme" id="remember"/> Remember me
      </div>
      <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={(event) => isLogin(event)}>LOGIN</button>
      <button type="button" className="btn btn-primary" onClick={() => isRegister()}>REGISTER</button>
      </div>
  </form>
  );
}


export default Login;