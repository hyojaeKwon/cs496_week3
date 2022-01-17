import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { changeField, initializeForm } from '../../module/auth';
import Auth from '../../component/auth';

const SigninForm = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.auth.signin);
    const history = useHistory();

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField('signin', name, value)
        );
    }

    const onSubmit = e => {
        e.preventDefault();
        const { id, password } = form;
        const SigninData = {
            "username": id,
            "password": password,
        };
        
        axios.post('http://192.249.18.146:443/api/auth/login', SigninData)
            .then(function (response) {
                console.log(response.data.token);
                localStorage.setItem('login-token', response.data.token);

                history.push('/');
            })
            .catch(function (error) {
                console.log('에러 발생')
            })




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