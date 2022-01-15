import React, { FormEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 30rem;
    margin-top: 10rem;
    margin-left: 35%;
    color: #686D76;
`;

const Input = styled.input`
    display: block;
    width: 18rem;
    border: none;
    border-bottom: 1px solid gray;
    padding-top: 0.7rem;
    margin-bottom: 1.3rem;
    font-size: 1.1rem;

    &:focus {
        outline: none;
    }
`;

const SubmitButton = styled.button`
    width: 18rem;
    border: none;
    border-radius: 0.5rem;
    margin-top: 1.8rem;
    padding: 0.5rem;
    font-size: 1.1rem;
    background-color: #4F8A8B;
    color: white;
`;

const Auth = ({ type, form, onChange, onSubmit }) => {

    return(
        <Wrapper>
            {type === 'signup' && (
                <form onSubmit={onSubmit}>
                    <h1>회원가입</h1>
                    <Input name="id" placeholder="아이디" onChange={onChange} value={form.id}/>
                    <Input name="name" placeholder="이름" onChange={onChange} value={form.name}/>
                    <Input name="password" placeholder="비밀번호" onChange={onChange} value={form.password}/>
                    <Input name="passwordConfirm" placeholder="비밀번호 확인" onChange={onChange} value={form.passwordConfirm}/>
                    <SubmitButton>회원가입</SubmitButton>
                </form>
            )}
            {type === 'signin' && (
                <form onSubmit={onSubmit}>
                    <h1>로그인</h1>
                    <Input name="id" placeholder="아이디" onChange={onChange} value={form.id}/>
                    <Input name="password" placeholder="비밀번호" onChange={onChange} value={form.password}/>
                    <SubmitButton>로그인</SubmitButton>
                </form>
            )}
        </Wrapper>
    )
}

export default Auth;