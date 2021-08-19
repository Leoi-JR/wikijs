var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:7,  //缩放级别
        center: [107.943579, 30.131735],  //中心点坐标
    });

ajax('https://a.amap.com/jsapi_demos/static/geojson/chongqing.json', function(err, geoJSON) {
    if (!err) {
        var geojson = new AMap.GeoJSON({
            geoJSON: geoJSON,
            // 还可以自定义getMarker和getPolyline
            getPolygon: function(geojson, lnglats) {
                // 计算面积
                var area = AMap.GeometryUtil.ringArea(lnglats[0])

                return new AMap.Polygon({
                    path: lnglats,
                    fillOpacity: 1 - Math.sqrt(area / 8000000000),// 面积越大透明度越高
                    strokeColor: 'white',
                    fillColor: 'red'
                });
            }
        });

        geojson.setMap(map);

        log.success('GeoJSON 数据加载完成')
    } else {
        log.error('GeoJSON 服务请求失败')
     }
})