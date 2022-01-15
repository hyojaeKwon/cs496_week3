import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../module/auth';
import Auth from '../../component/auth';

const SignupForm = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.auth.signup);

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField('signup', name, value)
        );
    }

    const onSubmit = e => {
        e.preventDault();
        //회원가입 구현
        dispatch(
            initializeForm('signup')
        );
    }

    useEffect(() => {
        dispatch(initializeForm('signup'));
    }, [dispatch]);

    return(
        <Auth
            type='signup'
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default SignupForm;