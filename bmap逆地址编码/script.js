var map = new BMapGL.Map("container"); 
var centerPoint = new BMapGL.Point(116.404, 39.915);  
map.centerAndZoom(centerPoint, 15);  
map.enableScrollWheelZoom();

// 创建地理编码实例
var myGeo = new BMapGL.Geocoder();
// 根据坐标得到地址描述
myGeo.getLocation(new BMapGL.Point(116.364, 39.993), function(result){
    if (result){
      alert("[116.364, 39.993]的地址为:     "+result.address);
    }
});