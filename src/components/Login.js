import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { LoginUser } from '../actions/auth';
import '../styles/reg.styles.scss';

const Login = ({ LoginUser }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        LoginUser(data);
    }

    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center bg-grey">
            <div className="card shadow inc-w">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="input-typo" name="identifier" id="identifier" ref={register({ required: true })} />
                            {errors.identifier && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="input-typo" name="password" id="password" ref={register({ required: true, minLength: 6 })} />
                            {errors.password && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mg-top">
                            <Link to="/" className="btn btn-hover border-none">Sign Up?</Link>
                            <button type="submit" className="float-right btn bg-light-green text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { LoginUser })(Login);