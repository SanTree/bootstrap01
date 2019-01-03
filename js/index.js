var lineChartData = {
//	X坐标数据
    labels:["周一","周二","周三","周四","周五","周六","周日"],
    datasets:[
       {
//     	统计表背景颜色
            fillColor:"rbga(0,220,220,0.5)",
//          统计表画笔颜色
            strokeColor:"rbga(0,0,0,1)",
//          点的颜色
            pointColor:"#000",
//          点的边框颜色
            pointStrokeColor:"#fff",
//          鼠标触发时点的颜色
            pointHighlightFill:"#fff",
//          鼠标触发时点边框的颜色
            pointHighlightStroke:"rgba(225,220,220,1)",
//          Y坐标数据
            data:[300,768,500,1000,879,435,600]
       },
       {
       	    fillColor : "rgba(225,225,0,0)",
			strokeColor : "rgba(92, 184, 92, 1)",
			pointColor : "rgba(23, 126, 23, 1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,1)",
			data : [314,355,755,843,966,866,1000]
       	    
       }
    
    ]
}

window.onload = function(){
	var cxt = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(cxt).Line(lineChartData,{
		responsive:true
	});
}
