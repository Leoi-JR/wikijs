var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:11,  //缩放级别
        center: [116, 40],  //中心点坐标
    });

// 浏览器定位
// 创建定位实例
AMap.plugin('AMap.Geolocation', function() {
    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：5s
        buttonPosition:'RB',    //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
    });
    map.addControl(geolocation);  // 添加定位控件
    geolocation.getCurrentPosition(function(status,result){
        if(status=='complete'){
            console.log("当前位置为：" ,result.position)  // 打印当前定位经纬度
        }else{
            console.log("error")
        }
    });
});