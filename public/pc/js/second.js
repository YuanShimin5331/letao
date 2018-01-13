$(function(){
  var page =1;
  var pageSize=5;

// 渲染二级分类
var render=function(){

  $.ajax({
    type:'get',
    url: "/category/querySecondCategoryPaging",
    data:{
      page:page,
      pageSize:pageSize
    },
    success:function(info){
      console.log(info);
       var result=template('tpl',info);
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


// 添加功能
  
  $(".btn_add").on("click",function(){
    $('#addModal').modal('show');
  });


  // 表单校验


   

  //  //注册表单校验成功事件
  // $form.on("success.form.bv", function (e) {
    
  //   e.preventDefault();


  //   $.ajax({
  //     type:'post',
  //     url:"/category/addTopCategory",
  //     data:$form.serialize(),
  //     success:function(info){
  //       if(info.success){
  //         $('#addModal').modal('hide');
  //         currentPage=1;
  //         render();

  //          //把模态框中的数据重置
  //          $form.data("bootstrapValidator").resetForm();
  //          $form[0].reset();
  //       }

  //     }
  //   });
  // });




});