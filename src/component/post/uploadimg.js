import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../img/upload.png';

const Wrapper = styled.div`
    margin-left: 15%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    color: #686D76;
    font-weight: 600;
`

const AreaName = styled.div`
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    color: #686D76;
    margin-right: 1.5rem;
`

const UploadWrapper = styled.div`
    width: 1000px;
    border: 1px solid white;
`

const Button = styled.div`
    width: 210px;
    margin-left: 375px;
    padding: 0.4rem;
    text-decoration: none;
    background-color: #4F8A8B;
    border-radius: 0.5rem;
    opacity: 70%;
    font-size: 1.2rem;
    font-weight: 350;
    color: white;
`;

const PreviewWrapper = styled.div`
    width: 1000px;
    margin-top: 5rem;
    color: #4F8A8B;
    font-size: 1.8rem;
    font-weight: 500;
`

const ImagePrview = styled.img`
    width: 180px;
    height: 180px;
    margin-right: 30px;
    padding: 0.5rem;
`;

const PostButton = styled(Link)`
    width: 170px;
    display: block;
    margin-left: 405px;
    margin-top: 5rem;
    padding: 0.4rem;
    text-decoration: none;
    border: 2.5px solid #4F8A8B;
    opacity: 70%;
    font-size: 1.5rem;
    font-weight: 350;
    color: #4F8A8B;
    text-align: center;
    font-weight: 500;
`;


const UploadImg = ({ username, area}) => {
    const [files, setFiles] = useState('');
    const imgInput = useRef();
    const postUrl = '/posting/'+ username + '/' + area + '/detail';
    const [imgUrl, setImgUrl] = useState('');

    const onLoadFile = e => {
        const currentfiles = e.target.files;
        setFiles(currentfiles);
        console.log('current files');
        console.log(currentfiles);
        const currentUrl = [...imgUrl];

        for(let i = 0; i < currentfiles.length; i++){
            const ImageUrl = URL.createObjectURL(currentfiles[i])
            currentUrl.push(ImageUrl);
        }
        setImgUrl(currentUrl);
        console.log('files');
        console.log(files);
    }

    const handleClick = () => {
        imgInput.current.click();
    }

    return(
        <Wrapper>
            <AreaName>{area}</AreaName>
            <div style={{display: 'inline-block', fontSize: '1.3rem', color: '#9e9e9e'}}>새 게시물 올리기</div>
            <div style={{width: '1000px', borderBottom: '1px solid #e3e3e3', marginTop: '1rem', marginBottom: '1rem'}}></div>
            <UploadWrapper>
                <img src={img} width='130' alt='upload' style={{marginLeft: '430px', marginTop: '100px'}}/>
                <Button onClick={handleClick}>컴퓨터에서 이미지 선택하기</Button>
                    <input ref={imgInput} type='file' id='image' accept='image/*' multiple='multiple' onChange={onLoadFile} style={{display: 'none'}}/>
                { imgUrl && 
                    <PreviewWrapper>
                        <div style={{marginBottom: '2rem'}}>미리보기</div>
                        {imgUrl.map((url) => <ImagePrview alt='preview' src={url}/>)}
                        <PostButton to={{
                                    pathname: postUrl,
                                    state: {
                                        files: imgUrl
                                    }}}>포스트 쓰러가기</PostButton>
                    </PreviewWrapper>        
                }
            </UploadWrapper>
        </Wrapper>
    )
}

export default UploadImg;