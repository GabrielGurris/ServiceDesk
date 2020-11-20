import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/index';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';

const SignIn = (props) => {
    const {account, signIn} = props;

    const submitHandler = (e) =>{
        e.preventDefault();

        signIn({email: 'gabriel_gurris@outlook.com', password: '123456'});
    }

    console.log('***SignIn.account', account);

    return (
        <>
            <Navbar />
            <div className="container h-100 pt-3">
                <h1 className="text-center">Login</h1>
                <div className="d-flex flex-column h-100 pt-3">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"></input>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <button className="btn btn-danger btn-round text-warning">Entrar</button>
                        </div>
                    </form>
                    <div className="container text-center fixed-bottom pb-5">
                        <div className="text-muted">Não possui uma conta?</div>
                        <Link to='/sign-in' className="text-warning">Criar conta</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return { account: state.signIn.account };
}

export default connect(mapStateToProps, {signIn})(SignIn);