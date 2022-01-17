import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ResultItem = styled.div`
    display: block;
    margin-top: 10px;
    font-size: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1.5px dashed #5c5c5c;
    color: #5c5c5c;
`;

const Container = styled.div`
  display : flex;
  width: 100%;
  height: 600px;
`
const ResultList = styled.div`
    // display: absolute;
    // left: 400;
    // top: 0;
    width: 100%;
    height: 800px;
    margin-left : 20px;
    overflow: scroll;
`

const MapContainer = styled.div`
    width: 1000px;
    height: 600px;
    // display: absolute;
    // left: 0;

`;

const Pagination = styled.div`
    decoration: none;
`
const { kakao } = window

const PlanMap = ({ date, type, searchPlace, addPlace, addLatitude, addLongitude, close }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    var markers = []
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination)
        setPlaces(data)
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild)
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
      paginationEl.appendChild(fragment)
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <Container>
      <MapContainer id="map"/>
      <ResultList id="result-list">
        {Places.map((item, i) => (
            <ResultItem key={i} style={{ marginTop: '20px' }} onClick={() => { 
              
              var obj = new Object();
              obj['address_name'] = item.address_name;
              obj['place_name'] = item.place_name;
              obj['x'] = item.x;
              obj['y'] = item.y;
              // console.log(item.x + "현재 경도");
              console.log('now date')
              close(obj,date,type);
              // return obj;
                                                                                // console.log(item.address_name);
                                                                                // addPlace(item.place_name);
                                                                                // addLatitude(item.y);
                                                                                // addLongitude(item.x);
                                                                                // close();
                                                                              }}>
                <span style={{color: '#4F8A8B', fontSize: '1.2rem'}}> {i + 1}</span>
                <div style={{fontSize: '1.2rem', fontWeight: '500', marginBottom: '1rem'}}>{item.place_name}</div>
                {item.road_address_name ? (
                    <div>
                        <span>{item.road_address_name}</span>
                        <div>{item.address_name}</div>
                        <div>위도: {item.y}</div>
                        <div>경도: {item.x}</div>
                    </div> ) : (
                    <div>{item.address_name}</div>
                )}
                <div>{item.phone}</div>
            </ResultItem>
        ))}
        <Pagination id="pagination" last={10}></Pagination>
      </ResultList>
    </Container>
  )
}

export default PlanMap  ;