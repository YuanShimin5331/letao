$(function(){
  var page =1;
  var pageSize=2;

// 渲染一级分类
var render=function(){

  $.ajax({
    type:'get',
    url:"/category/queryTopCategoryPaging",
    data:{
      page:page,
      pageSize:pageSize
    },
    success:function(info){
      console.log(info);
       var result=template('tpl2',info);
       $('tbody').html(result);
       $("#paginator").bootstrapPaginator({
        bootstrapMajorVersion:3,
        totalPages:Math.ceil(info.total/info.size),
     
        currentPage:page,
        onPageClicked:function(a,b,c,p){
        //  console.log(page);
        //  page=page
        page=p;
        render();
        } 
      });


    }
  })

}
render();



})