var map = new AMap.Map('container', {  //“container”即为地图容器div元素的id值
        zoom:11,  //缩放级别
        center: [116.399028, 39.845042],  //中心点坐标
    });

var walking = new AMap.Walking({
        map: map,
        panel: "panel"
    })  // 创建步行规划实例
walking.search([116.399028, 39.845042], [116.436281, 39.880719], function(status, result) {
        // result即是对应的步行路线数据信息
        if (status === 'complete') {
            if (result.routes && result.routes.length) {
                // result的数据信息详见  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
                console.log('步行路线数据查询成功')
            }
        } else {
            alert('步行路线数据查询失败' + result)
        } 
    });