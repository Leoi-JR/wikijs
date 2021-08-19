var map = new BMapGL.Map("container"); 
var centerPoint = new BMapGL.Point(116.404, 39.915);  
map.centerAndZoom(centerPoint, 15);  
map.enableScrollWheelZoom();

// 浏览器定位
var geolocation = new BMapGL.Geolocation();  // 创建定位实例
geolocation.getCurrentPosition(function(r){  // 获取当前位置
  if(this.getStatus() == BMAP_STATUS_SUCCESS){
    var mk = new BMapGL.Marker(r.point);
    map.addOverlay(mk);
    map.panTo(r.point);  // 平移到当前位置
    alert('您的位置：' + r.point.lng + ',' + r.point.lat);
  }
  else {
    alert('failed' + this.getStatus());
  }
});