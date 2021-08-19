var map = new BMapGL.Map("container"); 
var centerPoint = new BMapGL.Point(116.404, 39.915); 
map.centerAndZoom(centerPoint, 5);  

map.enableScrollWheelZoom();  // 允许地图可被鼠标滚轮缩放，默认禁用
map.setMapType(BMAP_EARTH_MAP);  // 设置地图类型，此处为地球