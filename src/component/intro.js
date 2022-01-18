import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 100px;
    color: #707070;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 5rem;
`;

const Text = styled.div`
    display: inline-block;
    margin-left: 5rem;
`;

const Title = styled.div`
    font-family: RaleWay;
    font-size: 3rem;
    font-weight: 700;
    font-family: SCDream5;
    color: #5A5A5A;
`; 

const Content = styled.div`
    margin-top: 3rem;
    color: #5A5A5A;
    font-family: SCDream5;
    font-size: 1.3rem;
`;
const Image = styled.img`
    display: inline-block;
    margin-left: 5rem;
    margin-top: 7rem;
`;


const Intro = () => {
    
    return(
        <div>
           <Image src='https://kr.blog.kkday.com/wp-content/uploads/america_argentina_patagonia_2.jpg' alt='travel' width='500'/>
            <Text>
                <Title>
                    새로운 경험
                </Title>
                <Content>
                    <span style={{fontSize: '1.7rem', fontWeight: '600', color: '#4F8A8B'}}>RETRAVEL</span>은 '다시 여행한다'는 뜻으로, 
                    <p/>기록을 통해 지난 곳을 다시 여행하거나, 
                    <p/>새로운 곳을 간접여행 하는 듯한 경험을 제공합니다
                </Content>
            </Text>
            <div></div>
            <Text>
                <Title>
                    나만의 기록
                </Title>
                <Content>
                    국내 지도에서 내가 여행한 곳에 기록을 남기고 색칠하면서
                    <p/>나만의 여행지도를 완성할 수 있습니다.
                </Content>
            </Text>
            <Image src='https://www.ekn.kr/mnt/file/202105/2021052601001146900050641.jpg' alt='map' width='500'/>
        </div>
    );
}
export default Intro;