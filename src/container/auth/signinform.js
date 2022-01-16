import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm } from '../../module/auth';
import Auth from '../../component/auth';

const SigninForm = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.auth.signin);

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField('signin', name, value)
        );
    }

    const onSubmit = e => {
        e.preventDault();
        const { id, password } = form;
        
        const SigninData = {
            id: id,
            password: password,
        };
        //signin api 호출

        dispatch(
            initializeForm('signin')
        );
    }

    useEffect(() => {
        dispatch(initializeForm('signin'));
    }, [dispatch]);

    return(
        <Auth
            type='signin'
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default SigninForm;