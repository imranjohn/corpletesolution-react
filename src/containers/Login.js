import React, {useEffect} from 'react';
import LoginLayout from '../Layout/LoginLayout';
import {useHistory} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axiosClient from "../shared/axiosClient";
import {extractResponse, showMessageError} from "../shared/helpers";
import {setUserStorage} from "../shared/Auth";

const Login = () => {

    let history = useHistory();

    useEffect(() => {
        document.getElementById('body').className = 'hold-transition login-page'
    });

    const handleOnChange = (e) => {
        formik.handleChange(e);
    }

    const formik = useFormik({
        initialValues: {
            email: 'rizefibaba@mailinator.net',
            password: 'Pa$$w0rd!'
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be greater than 6')
        }),
        onSubmit: values => {

            axiosClient.auth.login({
                email: values.email,
                password: values.password
            }).then(response => {
                const responseData = extractResponse(response);
                setUserStorage(responseData.data.data.token, responseData.data.data.user);
                history.push('/dashboard');

            }).catch(error => {
                showMessageError(error.message);
            })
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <LoginLayout>
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html">{process.env.REACT_APP_NAME}</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={formik.handleSubmit}>
                            {formik.touched.email && formik.errors.email ? (
                                <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small>
                            ) : null}
                            <div className="input-group mb-3">
                                <input type="email"
                                       name={'email'}
                                       className={
                                           formik.touched.email && formik.errors.email ?
                                               'form-control is-invalid' :
                                               formik.touched.email ?
                                                   'form-control is-valid' :
                                                   'form-control'}
                                       placeholder="Email"
                                       onChange={handleOnChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.email}

                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"/>
                                    </div>
                                </div>


                            </div>


                            {formik.touched.password && formik.errors.password ? (
                                <small id="emailHelp" className="form-text text-danger">{formik.errors.password}</small>
                            ) : null}
                            <div className="input-group mb-3">
                                <input type="password"
                                       name={'password'}
                                       className={
                                           formik.touched.password && formik.errors.password ?
                                               'form-control is-invalid' :
                                               formik.touched.email ?
                                                   'form-control is-valid' :
                                                   'form-control'}
                                       placeholder="Password"
                                       onChange={handleOnChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.password}
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    {/*<div className="icheck-primary">*/}
                                    {/*    <input type="checkbox" id="remember" />*/}
                                    {/*    <label htmlFor="remember">*/}
                                    {/*        Remember Me*/}
                                    {/*    </label>*/}
                                    {/*</div>*/}
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/*<div className="social-auth-links text-center mb-3">*/}
                        {/*    <p>- OR -</p>*/}
                        {/*    <a href="#" className="btn btn-block btn-primary">*/}
                        {/*        <i className="fab fa-facebook mr-2"/> Sign in using Facebook*/}
                        {/*    </a>*/}
                        {/*    <a href="#" className="btn btn-block btn-danger">*/}
                        {/*        <i className="fab fa-google-plus mr-2"/> Sign in using Google+*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/* /.social-auth-links */}
                        {/*<p className="mb-1">*/}
                        {/*    <a href="forgot-password.html">I forgot my password</a>*/}
                        {/*</p>*/}
                        {/*<p className="mb-0">*/}
                        {/*    <a href="register.html" className="text-center">Register a new membership</a>*/}
                        {/*</p>*/}
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
        </LoginLayout>
    )
}

export default Login;