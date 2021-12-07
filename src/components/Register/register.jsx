import React from 'react';
import classes from './register.module.scss';

function Register(props) {
    return (
        <div className={classes.register}>
            <div className={classes['register-inner']}>
    <span className={classes['register__title']}>
        New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
    </span>
                <input
                    className={classes['register__input']}
                    type="email"
                    placeholder="Your email address"/>
                    <button
                        className={classes['register__button']}
                        type="button">
                        Register
                    </button>
            </div>
        </div>
);
}

export default Register;