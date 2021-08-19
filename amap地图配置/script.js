var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:11,  //缩放级别
        center: [116, 40],  //中心点坐标
    });
map.setCenter([114, 22.5]);  // 设置地图显示的中心点
map.setZoom(8);  // 设置地图级别，级别为数字。