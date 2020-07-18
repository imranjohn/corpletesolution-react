



import React, {useEffect} from 'react';
import LoginLayout from '../Layout/LoginLayout';
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import FieldError from "../components/common/FieldError";

const Login = () => {

    let history = useHistory();
    const initialValues = {
        email: null,
        password: null,
    };

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const onSubmit = (values, {resetForm}) => {

    }
    const formik = useFormik({
        initialValues: initialValues,
        validate,
        onSubmit
    })

    useEffect(() => {
        document.getElementById('body').className = 'hold-transition login-page'
    });

    return (
        <LoginLayout>
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="email"
                                       className='form-group'
                                       placeholder="Email"
                                       value={formik.values.email}
                                       name="email"
                                       onChange={formik.handleChange}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>

                            </div>
                            {formik.errors.email ? (
                                <FieldError message={formik.errors.email} />
                            ) : null}
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password"/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember"/>
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button  className="btn btn-primary btn-block" type="submit">Submit</button>
                                    {/*<button type="submit" className="btn btn-primary btn-block"*/}
                                    {/*        onClick={() => history.push('dashboard')}>Sign In*/}
                                    {/*</button>*/}
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"/> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"/> Sign in using Google+
                            </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
        </LoginLayout>
    )
}

export default Login;











