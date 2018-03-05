$(document).ready(function(){
  $(".show").on('click', function(){
$(this).prev(".post-body").toggle()
    //$(this).before(".post-body").toggle()
  })
})