$(function(){

  // 1.发送ajax请求,获取用户数据
  var page=1;
  var pageSize=5;
  render();
  function render(){
    // 2通过模板引擎，数据渲染
  $.ajax({
    type:'get',
    url:'/user/queryUser',
    data:{
      page:page,
      pageSize:pageSize
    },
    success:function(info){
      // 3.模板：渲染数据
      console.log(info);
      // 4.让数据与模板绑定
      var result=template('tpl',info);
      // 5.渲染到页面
      $('tbody').html(result);



      // 渲染分页
      $("#paginator").bootstrapPaginator({
        bootstrapMajorVersion:3,
        totalPages:Math.ceil(info.total/info.size),
        numberOfPages:3,
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
})