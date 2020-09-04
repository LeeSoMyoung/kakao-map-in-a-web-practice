const container = document.getElementById('map');
var options = {
		center: new kakao.maps.LatLng(37.485902,126.804372),
		level: 3
};
let map = new kakao.maps.Map(container, options);
var positions=[
        {
            title:'가톨릭대',
            latlng:new kakao.maps.LatLng(37.485902,126.804372)
        }
    ]
for(var i=0;i<positions.length;++i){
    var marker=new kakao.maps.Marker({
        map:map,
        position:positions[i].latlng,
        title:positions[i].title
    });
    const message=`나무를 찾는 대학
    가톨릭대`;
    displayMarker(positions[i].latlng,message);
}


///////////// 현위치 불러오기↓
if(navigator.geolocation){
    console.log('geolocation 사용 가능');

    navigator.geolocation.getCurrentPosition(function(position){
        var lat=position.coords.latitude;
        var lon=position.coords.longitude;

        var locPosition=new kakao.maps.LatLng(lat,lon);
        var message=message = `<div style="padding:5px;">현 위치</div>`;

        console.log('현위치 ',locPosition);
        displayMarker(locPosition,message);

    });
}else{
    console.log('geolocation을 사용할 수 없습니다.');
}

function displayMarker(locPosition, message) {
    let marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    var iwContent = message,
        iwRemoveable = true;
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });

    infowindow.open(map, marker);
    map.setCenter(locPosition);      
}