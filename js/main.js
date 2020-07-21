$(function(){
$.ajax({
  url:"https://api.github.com/users/diego3g/repos",
  dataType: "json",
  cache: false,
  success: function(data,status){
   
    $.each(data,function(index){
      $(".row").append(`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3">
      <img src="img/deigo.jpg" class="img-fluid rounded-circle">
      <h2>${data[index].owner.login}</h2>
      <p>${data[index].description}</p>
         <a href="${data[index].html_url}" target="_blank" class="btn btn-primary">${data[index].name}</a>
    </div>`);
    });
  },
  error:function(xhr,textStatus,err){
    console.log(xhr);
    console.log(textStatus);
    console.log(err);
  }
});
});