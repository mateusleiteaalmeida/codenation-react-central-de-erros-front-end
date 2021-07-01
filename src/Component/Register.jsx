import React, {useContext} from 'react';
import '../App.css';
import Context from '../Provider/context';


const Register = () => {
    const {
        onRegister,
        cancel
      } = useContext(Context);

    return (
        <div className="form register-form">
            <div className="form-group">
                <input type="text" placeholder="Your name here." required className="form-control"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Your email here" required className="form-control"/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Your pass here" required className="form-control"/>
            </div>
            <div className="d-flex buttons-container">
                <button type="button" className="btn btn-success"  onClick={() => onRegister()}>REGISTER</button>
                <button type="button" className ="btn btn-danger" onClick={() => cancel()}>CANCEL</button>
            </div>
        </div>
    )
}

export default Register;