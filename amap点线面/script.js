var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:13,  //缩放级别
        center: [116.38, 39.9],  //中心点坐标
    });

// 添加点（标注），LngLat→Marker
var marker = new AMap.Marker({
  position: new AMap.LngLat(116.39, 39.9)  // 位置
  // position: [116.39, 39.9]  // 简写
})
map.add(marker);  // 添加到地图

// 添加折线，LngLat→Polyline
var polyline = new AMap.Polyline({
    path: [
        // new AMap.LngLat(116.368904,39.913423),
        // new AMap.LngLat(116.382122,39.901176),
        // new AMap.LngLat(116.387271,39.912501),
        // new AMap.LngLat(116.398258,39.904600)
        [116.368904,39.913423],
        [116.382122,39.901176],
        [116.387271,39.912501],
        [116.398258,39.904600]  // 简写
    ],
    borderWeight: 2, // 线条宽度，默认为 1
    strokeColor: 'red', // 线条颜色
    lineJoin: 'round' // 折线拐点连接处样式
});
map.add(polyline);  // 将折线添加至地图实例

// 添加面，LngLat→Polygon
var polygon = new AMap.Polygon({
    path: [
        new AMap.LngLat(116.368904,39.923423),
        new AMap.LngLat(116.382122,39.911176),
        new AMap.LngLat(116.387271,39.922501),
        new AMap.LngLat(116.398258,39.914600)
        // [116.368904,39.923423],
        // [116.382122,39.911176],
        // [116.387271,39.922501],
        // [116.398258,39.914600]  // 简写
    ],
    fillColor: '#fff', // 多边形填充颜色
    borderWeight: 2, // 线条宽度，默认为 1
    strokeColor: 'black', // 线条颜色
});
map.add(polygon);  // 将面添加至地图实例