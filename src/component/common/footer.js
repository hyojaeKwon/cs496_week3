import react from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  width : 100%;
  background-color: rgba(234, 234, 234, 0.3);
  border-top: 1px solid #E9ECEF;
`;

const FooterContainer = styled.div`
  max-height: 125px;
  width: 1060px;
  margin : 0 auto;
  margin-top: 10px;
  display: grid;
  margin-bottom: 40px;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: column;
`;

const TextContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Text = styled.span`
  display: inline-block;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
      <TextContainer>
        <Text>
          이용 약관
        </Text>
        <Text>
          개인 정보 처리 방침
        </Text>
      </TextContainer>
      <TextContainer>
        <Text>2022 Mad Camp Week 3 | 이우진 최윤지 권효재</Text>
      </TextContainer>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;