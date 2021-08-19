var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:11,  //缩放级别
        center: [116, 40],  //中心点坐标
    });

// 创建地址解析实例
var geocoder = new AMap.Geocoder({
    city: "010", //城市设为北京，默认：“全国”
    radius: 1000 //解析范围，默认：500
});
// 解析
geocoder.getAddress([116.39,39.9], function(status, result) {
    if (status === 'complete'&&result.regeocode) {
        var address = result.regeocode.formattedAddress;
       alert("116.39,39.9地址为：" + address);
    }else{
        alert('根据经纬度查询地址失败')
    }
});