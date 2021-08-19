var map = new BMapGL.Map("container");
var centerPoint = new BMapGL.Point(116.404, 39.915);  
map.centerAndZoom(centerPoint, 15); 
map.enableScrollWheelZoom();

// 添加点（标注），Point→Marker
var point = new BMapGL.Point(116.399, 39.930);
var marker = new BMapGL.Marker(point);  // 创建标注
map.addOverlay(marker);  // 将标注添加到地图中

// 添加折线，Point→Polyline
var polyline = new BMapGL.Polyline([
    new BMapGL.Point(116.399, 39.910),
    new BMapGL.Point(116.405, 39.920),
    new BMapGL.Point(116.425, 39.900)
  ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  // 创建折线
map.addOverlay(polyline);  // 将折线添加到地图中

// 添加面，Point→Polygon
var polygon = new BMapGL.Polygon([
        new BMapGL.Point(116.387112,39.920977),
        new BMapGL.Point(116.385243,39.913063),
        new BMapGL.Point(116.394226,39.917988),
        new BMapGL.Point(116.401772,39.921364),
        new BMapGL.Point(116.41248,39.927893)
    ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  // 创建面
map.addOverlay(polygon);  // 将面添加到地图中