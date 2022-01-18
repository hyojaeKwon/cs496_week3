import React, { useEffect } from 'react';

const { kakao } = window;

const RouteMap = (locArray) => {
    const locArr = locArray['props'];
    
    // console.log(locArr[0]['x']);
    useEffect(() => {
        var avgX = 0;
        var avgY = 0;
        const averageX = (arr) => {
            var sum = 0;
            for(let i = 0 ; i < arr.length; i++){
                sum += Number(arr[i]['x']);
            }
            // console.log(sum) 
            return sum/arr.length;
        };

        const averageY = (arr) => {
            var sum = 0;
            for(let i = 0 ; i < arr.length; i++){
                sum += Number(arr[i]['y']);
            }
            return sum/arr.length;
        }

        const mapContainer = document.getElementById('map');
        const mapOption = {
            center: new kakao.maps.LatLng(averageY(locArr),averageX(locArr)),
            level: 8,
            mapTypeId: kakao.maps.MapTypeId.ROADMAP
        };
        // const map = new kakao.maps.Map();
        console.log(averageX(locArr))
        const map = new kakao.maps.Map(mapContainer,  mapOption)
        console.log("Hi")
        const pathList = [];
        const markers = (locArr) => {
            console.log("ok")
            for(let i = 0 ; i < locArr.length; i++){
                pathList.push(new kakao.maps.LatLng(Number(locArr[i]['y']),Number(locArr[i]['x'])));
                const marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(Number(locArr[i]['y']),Number(locArr[i]['x'])),
                    map: map
                })
            }
            console.log(pathList)
        }
        markers(locArr);
        // console.log(pat)
        // const marker1 = new kakao.maps.Marker({
        //     position: new kakao.maps.LatLng(36.3621376213944, 127.350057490123),
        //     map: map
        // })
        // const marker2 = new kakao.maps.Marker({
        //     position: new kakao.maps.LatLng(36.3610860008778, 127.344771523599),
        //     map: map,
        // })

        const polyline = new kakao.maps.Polyline({
            map: map,
            path: [
               pathList
            ],
            strokeWeight: 3,
            strokecolor: '#FF000',
            strokeOpacity: 0.9,
            strokeStyle: 'solid',
        });
    }, [locArray])

    return(
        <div id="map" style={{'width': '700px', 'height': '700px'}}></div>
    )
}

export default RouteMap;