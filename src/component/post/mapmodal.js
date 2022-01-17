import React, {useState}from 'react';
import Map from './kakaomap';
import styled from 'styled-components';

const Input = styled.input`
    width: 100px;
    font-family: SCDream4;
    :focus { outline: none; };
`

const MapModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, addPlace, addLatitude, addLongitude } = props;
  const [searchPlace, setSearchPlace] = useState('');
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'} style={{overlfow: 'scroll'}}>
      {open ? (
        <section>
          <header style={{padding: '0.7rem', textAlign: 'center'}}>
            {header}
            <button className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <form onSubmit={(e) => {e.preventDefault();
                                    console.log(e.target.keyword.value);
                                    setSearchPlace(e.target.keyword.value);}}>
                    키워드 : <Input type="text" name="keyword" size="15" /> 
                    <button type="submit" style={{marginLeft: '10px', marginBottom: '20px', backgroundColor: '#4F8A8B', fontFamily: 'SCDream4'}}>검색하기</button>
                    <Map searchPlace={searchPlace} addPlace={addPlace} addLatitude={addLatitude} addLongitude={addLongitude} close={close}/>
            </form>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default MapModal;