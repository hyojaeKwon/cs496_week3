import React from 'react';
import './modal.css';
import styled from 'styled-components';


// //modal
// const ModalBox = styled.div`
//   display: none;
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 99;
//   background-color: rgba(0, 0, 0, 0.6);  
// `;

const ModalContainer = styled.div`
  /* width: 1000px;
  height: 20px; */
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: 1000px){
    display: flex;
    flex-direction: column;
  } 
  display: grid;

  grid-template-columns: 2.5fr 1fr;
  grid-auto-rows: minmax(1000px, auto);
  /* grid-template-rows: 3fr 1fr; */
  background-color: #FFF;
`;

const ImgContainer = styled.img`
  max-width: 100%;
  height: 700px;
  display: block;
  margin: 0 auto;
  background-color: #ccc;
  @media (max-width: 1000px){
    width : 100%;
  } 
`;

const DescContainer = styled.div`
  /* width: 100%; */
  display: flex;
  padding: 10px 10px;
  flex-direction: column;
`;

const ToWhere = styled.div`
  width: 100%;
  font-size: 15px;
  padding-top: 10px;
  font-weight: 500;
  padding-bottom: 15px;
  color: #3d393d;
  border-bottom: 0.5px solid #4F8A8B;
`;

const Author = styled.div`
  font-size : 25px;
  padding-top: 10px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: .5px solid #4F8A8B;
`
const AuthorSpan = styled.span`
  font-size : 18px;
  color: #393D39;
`;

const Place = styled.div`
  padding-top: 10px;
  font-size: 30px;
  font-weight: 650;
`;

const Text = styled.div`
  color: #4F8A8B;
  font-size: 12px;
  /* line-height: 0.2em; */
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 0.5px solid #4F8A8B;
`;

const Like = styled.button`
  margin-top: 14px;
  margin-right: 10px;
`;

const Back = styled.img`
  position: absolute;
  top: 2px;
  right:18px;
  width : 5px;
  height: auto;
`
const Modal = (props) => {

  Section.onClick = function(event){
    console.log(event.target.tagName)
    if(event.target.tagName == this.tagName){
      Section={close};
    }
  }

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, author, place, city, content, likes, image} = props;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <Section>
          
          <Main>
            <ModalContainer>
              <Back src='../../img/back.png' className="close" onClick={close}></Back>
              <ImgContainer src={image}/>
              <DescContainer>
                  <Author>
                    {author}
                    <AuthorSpan>
                      님의 포스트 입니다.
                    </AuthorSpan>
                  </Author>
                <Place>
                    {place}
                </Place>
                <ToWhere>
                    {city}
                </ToWhere>
                <Text>
                  {content}
                </Text>
                <div style={{'display':'flex'}}>
                  <Like>좋아요</Like>
                  <span style={{'margin-top':'14px'}}>
                    {likes}개
                  </span>
                </div>
              </DescContainer>
            </ModalContainer>
          </Main>
          { <Footer>
            <FooterBtn className="close" onClick={close}>
              {' '}
              close{' '}
            </FooterBtn>
          </Footer> }
        </Section>
      ) : null}
    </div>
  );
};

const Section = styled.div`
  width: 90%;
  height: 90%;
  max-width: 1260px;
  min-width: 800px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: rgba(0,0,0,.15);
  color : #4F8A8B;
  animation: modal-show 0.3s;
  overflow: hidden;
`;

const Header = styled.div`
  position: relative;
  padding: 12px 64px 12px 16px;
  font-size: 20px;
  background-color: #FFFFFF;
  font-weight: 500;
`;

const HeaderBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: auto;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #4F8A8B;
  background-color: transparent;
`;


const Main = styled.div`
  /* padding: 16px; */
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #ffffff;
`;

const Footer = styled.div`
  padding: 12px 16px;
  text-align: right;
`;

const FooterBtn = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #4F8A8B;
  border-radius: 5px;
  font-size: 13px;
`;

export default Modal;