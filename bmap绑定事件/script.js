var map = new BMapGL.Map("container");
var centerPoint = new BMapGL.Point(116.404, 39.915);  
map.centerAndZoom(centerPoint, 15);  
map.enableScrollWheelZoom();

// 添加折线，Point→Polyline
var polyline = new BMapGL.Polyline([
    new BMapGL.Point(116.399, 39.910),
    new BMapGL.Point(116.405, 39.920),
    new BMapGL.Point(116.425, 39.900)
  ], {strokeColor:"blue", strokeWeight:5, strokeOpacity:0.5});  
map.addOverlay(polyline);  

// 为覆盖物绑定事件
polyline.addEventListener('click', function(e){
  alert("你点击了折线");
});

// 为地图绑定事件
map.addEventListener('dblclick', function(e){
  alert("你双击了地图");
});