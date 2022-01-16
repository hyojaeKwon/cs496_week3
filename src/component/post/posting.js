import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import location from '../../img/location.png';
import MapModal from './mapmodal';

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

const PlaceInput = styled.button`
    position: absolute;
    top: 600px;
    width: 500px;
    height: 50px;
    border: none;
    border-bottom: 2px solid #e3e3e3;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: white;
    color: #686D76;

    :focus { outline: none; };
`
const CostInput = styled.input`
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

    -webkit-appearance: none;
    :focus { outline: none; };
`

const DateInput = styled.input`
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
`;

const PostButton = styled(Link)`
    width: 150px;
    display: block;
    margin-left: 405px;
    margin-top: 5rem;
    padding: 0.4rem;
    text-decoration: none;
    border: 2.5px solid #4F8A8B;
    opacity: 70%;
    font-size: 1.2rem;
    font-weight: 350;
    color: #4F8A8B;
    text-align: center;
    font-weight: 500;
`

const Posting = ({ username, area, files}) => {
    const formatDate = (current_datetime)=>{
        let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();
        return formatted_date;
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');
    const [cost, setCost] = useState('');
    const [traveldate, setTraveldate] = useState('');
    const [writeDate, setWriteDate] = useState(formatDate(new Date()));
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const url = '/post/' + username + '/' + area;

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const addPlace = place => {
        setPlace(place);
    }

    const addLatitude = latitude => {
        setLatitude(latitude);
    }

    const addLongitude = longitude => {
        setLongitude(longitude);
    }

    return(
        <Wrapper>
            <AreaName>{area}</AreaName>
            <div style={{display: 'inline-block', fontSize: '1.3rem', color: '#9e9e9e'}}>새 게시물 올리기</div>
            <div style={{width: '1000px', borderBottom: '2px solid #e3e3e3', marginTop: '1rem'}}/>
            <FirstImg src={files[0]}></FirstImg>
            <Content textAlignVertical='top' placeholder='내용 입력하기' value={content} onChange={(e) => setContent(e.target.value)}/>
            <PlaceInput onClick={openModal}>
                <div style={{display: 'inline-block'}}>{place || '위치 추가하기'}</div>
                <img src={location} alt='location' width={30} style={{marginLeft: '15px'}}/>
            </PlaceInput>
            <CostInput type='number' min='0' placeholder='사용경비 추가하기' value={cost} onChange={(e) => setCost(e.target.value)}></CostInput>
            <DateInput type='text' placeholder='여행날짜 추가하기' value={traveldate} onChange={(e) => setTraveldate(e.target.value)}></DateInput>
            <MapModal open={modalOpen} close={closeModal} header="장소 추가하기" addPlace={addPlace} addLatitude={addLatitude} addLongitude={addLongitude}></MapModal>
            <PostButton to={url}>포스트 공유하기</PostButton>
        </Wrapper>
    )
}

export default Posting;