var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:13,  //缩放级别
        center: [116.39, 39.9],  //中心点坐标
    });
var polyline = new AMap.Polyline({
    path: [
        [116.368904,39.913423],
        [116.382122,39.901176],
        [116.387271,39.912501],
        [116.398258,39.904600]  
    ],
    borderWeight: 2, 
    strokeColor: 'red', 
    lineJoin: 'round' 
});
map.add(polyline);  // 将折线添加至地图实例

// 为地图绑定事件
map.on('click', function(e){
  alert("你点击了地图");
});

// 为覆盖物绑定事件
polyline.on('click', function(e){
  alert("你点击了折线");
});