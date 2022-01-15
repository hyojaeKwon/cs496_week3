import React from 'react';
import './modal.css';
import Map from './kakaomap';

const MapModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'} style={{overlfow: 'scroll'}}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              {' '}
              close{' '}
            </button>
            <Map searchPlace='궁동 로데오거리'/>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default MapModal;