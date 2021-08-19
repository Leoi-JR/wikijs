var map = new BMapGL.Map("container");  // 参数“container”即为地图容器div元素的id值，亦可传入div元素对象
var centerPoint = new BMapGL.Point(116.404, 39.915);  // 定义地图中心点位置
map.centerAndZoom(centerPoint, 15);  // 地图初始化，设置地图的中心点经纬度坐标（116， 20）以及缩放级别（15）