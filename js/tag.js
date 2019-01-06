$(function(){
	$(".addBtn").click(function(){
		var tagcont = $(".tagCont").val()||"";
		if(tagcont==""){
			alert("请输入要添加的标签!");
		}else{
			var html = '<div class="alert alert-warning alert-dismissible pull-left addname" role="alert">'+
							'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
							'<strong>'+tagcont+'</strong></div>';
			$("#tagBox").append(html);
			$(".tagCont").val("");
		}
	})
	
})
