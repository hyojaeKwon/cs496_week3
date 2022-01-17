import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { changeField, initializeForm } from '../../module/auth';
import Auth from '../../component/auth';

const SignupForm = () => {
    const dispatch = useDispatch();
    const form = useSelector((state) => state.auth.signup);
    const history = useHistory();

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField('signup', name, value)
        );
    }

    const onSubmit = e => {
        e.preventDefault();
        const { id, name, password, passwordConfirm } = form;

        if(password !== passwordConfirm) {
            console.log('password mismatch!')
            return;
        }

        console.log('회원가입 중 ');

        const SignupData = {
            "username": id, 
            "nickname": name,
            "password": password,
        };

        axios.post('http://192.249.18.146:443/api/auth/register', SignupData)
            .then(function (response) {
                console.log('성공');

                history.push('/');
            })
            .catch(function (error) {
                console.log('에러 발생')
            })



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
            onSubmit={onSubmit}
            onChange={onChange}
        />
    )
}

export default SignupForm;