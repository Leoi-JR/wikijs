var map = new BMap.Map("container");
map.enableScrollWheelZoom();
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

// 出行规划
var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});  // 创建出行规划实例
walking.setLocation("北京市");  // 定位到北京市搜索
walking.search('西单', '慈云寺');