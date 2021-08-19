var map = new BMapGL.Map("container"); 
var centerPoint = new BMapGL.Point(116.404, 39.915);  
map.centerAndZoom(centerPoint, 15);  
map.enableScrollWheelZoom();

//创建地址解析器实例
var myGeo = new BMapGL.Geocoder();
// 将地址解析结果显示在地图上，并调整地图视野
myGeo.getPoint('北京市海淀区上地10街', function(point){
    if(point){
        map.centerAndZoom(point, 16);  // 解析成功则缩放至目标经纬度
        map.addOverlay(new BMapGL.Marker(point, {title: '北京市海淀区上地10街'}));  // 添加标注
    }else{
        alert('您选择的地址没有解析到结果！');
    }
}, '北京市')  // 提供地址解析所在的城市