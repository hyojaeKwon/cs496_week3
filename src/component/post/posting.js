import React, {useState} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

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

const FirstImg = styled.img`
    display: inline-block;
    width: 500px;
    height: 500px;
`

const Content = styled.input`
    display: inline-block;
    position: absolute;
    width: 500px;
    height: 300px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    padding: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;
    overflow: auto;
    textOverflow: ellipsis;
    
    :focus { outline: none; };
`

const PlaceInput = styled.input`
    position: absolute;
    top: 600px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;

    :focus { outline: none; };
`
const DateInput = styled.input`
    position: absolute;
    top: 655px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;

    :focus { outline: none; };
`

const CostInput = styled.input`
    position: absolute;
    top: 710px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #686D76;

    :focus { outline: none; };
`

const Posting = ({ username, area, files}) => {
    const [date, setDate] = useState(new Date());

    return(
        <Wrapper>
            <AreaName>{area}</AreaName>
            <div style={{display: 'inline-block', fontSize: '1.3rem', color: '#9e9e9e'}}>새 게시물 올리기</div>
            <div style={{width: '1000px', borderBottom: '2px solid #e3e3e3', marginTop: '1rem'}}/>
            <FirstImg src={files[0]}></FirstImg>
            <Content textAlignVertical='top' placeholder='내용 입력하기'/>
            <PlaceInput placeholder='위치 추가하기'></PlaceInput>
            <DatePicker style={{width: '500px'}} selected={date} onChange={date => setDate(date)}></DatePicker>
            <CostInput placeholder='사용경비 추가하기'></CostInput>
        </Wrapper>
    )
}

export default Posting;