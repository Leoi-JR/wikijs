var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:11,  //缩放级别
        center: [116, 40],  //中心点坐标
    });
// 创建地址解析实例
var geocoder = new AMap.Geocoder({
        city: "010", //城市设为北京，默认：“全国”
    });
// 解析
geocoder.getLocation("北京市朝阳区阜荣街11号", function(status, result) {
     if (status === 'complete'&&result.geocodes.length) {
         var lnglat = result.geocodes[0].location
         alert("北京市朝阳区阜荣街11号的经纬度为：" + lnglat.lng + ", " + lnglat.lat );
      }else{
         alert('根据地址查询位置失败');
      }
});