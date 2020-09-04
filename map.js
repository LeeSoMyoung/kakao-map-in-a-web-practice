var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.485902,126.804372),
			level: 4
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
        }