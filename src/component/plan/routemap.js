import React, { useEffect } from 'react';

const { kakao } = window;

const RouteMap = () => {
    useEffect(() => {
        const average = ( arr ) => {
            var sum = 0;

            for(let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }

            return sum / arr.length;
        }
        const Lat = new Array(36.36384436862, 36.3704985792808, 36.37601682770846);
        const Lng = new Array(127.343250512653, 127.344834223158, 127.36296203815101);

        const mapContainer = document.getElementById('map');
        const mapOption = {
            center: new kakao.maps.LatLng(average(Lat), average(Lng)),
            level: 5,
            mapTypeId: kakao.maps.MapTypeId.ROADMAP
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);

        const marker1 = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(36.3621376213944, 127.350057490123),
            map: map
        })
        const marker2 = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(36.3610860008778, 127.344771523599),
            map: map,
        })

        const polyline = new kakao.maps.Polyline({
            map: map,
            path: [
                new kakao.maps.LatLng(36.36384436862, 127.343250512653),
                new kakao.maps.LatLng(36.3704985792808, 127.344834223158),
                new kakao.maps.LatLng(36.37601682770846, 127.36296203815101),
            ],
            strokeWeight: 3,
            strokecolor: '#FF000',
            strokeOpacity: 0.9,
            strokeStyle: 'solid',
        });
    }, [])

    return(
        <div id="map" style={{width: '700px', height: '700px'}}></div>
    )
}

export default RouteMap;