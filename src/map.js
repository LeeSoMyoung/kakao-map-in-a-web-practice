const container = document.getElementById('map');
const geocoder=kakao.maps.services.Geocoder();

const chatting_icon='https://firebasestorage.googleapis.com/v0/b/tauu-34869.appspot.com/o/chatting.png?alt=media&token=fb136268-3732-4f7c-806a-e2a518beeb53';
const currentLocation_icon='https://firebasestorage.googleapis.com/v0/b/tauu-34869.appspot.com/o/current_location.png?alt=media&token=5a6b46d7-9506-440a-bf98-529b0d16df25';
const history_icon='https://firebasestorage.googleapis.com/v0/b/tauu-34869.appspot.com/o/history.png?alt=media&token=b1fd40b1-405d-44a1-bde3-3bf257c39bc2';

console.log('초기 위치 가대 성심교정');

var options = {
		center: new kakao.maps.LatLng(37.485902,126.804372),
		level: 3
};
var map = new kakao.maps.Map(container, options);
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
    const message=`<div class="overlaybox">나무를 찾는 대학 가톨릭대학교</div>`;
    displayMarker(positions[i].latlng,message);
}

getCurrentLocation();

function getCurrentLocation(){
    if(navigator.geolocation){
        console.log('geolocation 사용 가능');

        navigator.geolocation.getCurrentPosition(function(position){
            var lat=position.coords.latitude;
            var lon=position.coords.longitude;

            var locPosition=new kakao.maps.LatLng(lat,lon);
            var message = `<div style="padding:5px;">현 위치</div>`;
            
            console.log('현위치 ',locPosition);
            displayMarker(locPosition,message);


        });
    }else{
        alert('현 위치를 불러올 수 없습니다.');
        consolelog('unable to use geolocation');
    }
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

///////////////////////

// 행정동 주소 정보 가져오기
function searchAddrFromCoords(coords,callback){
    geocoder.coord2RegionCode(coords.getLng(),coords.getLat(),callback);
}

// 법정동 상세 주소 정보 요청
function searchDetailAddrFromCoords(coords,callback){
    geocoder.coord2RegionCode(coords.getLng(),coords.getLat(),callback);
}

/////////////////

function createButtonImage(src,size,options){
    var markerImage=new kakao.maps.marker(src,size,options);
    return markerImage;
}

function goHistoryPage(){
    //TODO : 히스토리 페이지로 가도록 만듦
}

function goChattingPage(){
    //TODO : 채팅목록으로 이동
}