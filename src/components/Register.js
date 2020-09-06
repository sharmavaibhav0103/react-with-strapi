import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { RegisterUser } from '../actions/auth';
import '../styles/reg.styles.scss';

const Register = ({ RegisterUser, isAuthenticated }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
            RegisterUser(data);
    };

    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center bg-grey">
            <div className="card shadow inc-w">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
{/* 
                        <div className="form-group d-flex flex-column align-items-center">
                            <label htmlFor="dp" className="text-muted">Choose profile picture</label>
                            <input type="file" className="border-rounded ml-5 mb-5" name="dp"
                                id="dp" ref={register()} />
                         </div> */}
                        <div className="form-group d-flex flex-column">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="input-typo" name="username"
                                id="username" ref={register({ required: true })} />
                            {errors.username && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="input-typo" name="email" id="email" ref={register({ required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group d-flex flex-column">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="input-typo" name="password" id="password" ref={register({ required: true, minLength: 6 })} />
                            {errors.password && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mg-top">
                            <Link to="/login" className="btn btn-hover border-none">Login</Link>
                            <button type="submit" className="float-right btn bg-light-green text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Register.propTypes = {
    RegisterUser: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { RegisterUser })(Register);