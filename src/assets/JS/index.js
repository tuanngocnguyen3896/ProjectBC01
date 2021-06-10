// Hide collapse menu 
$(document).on("click", function () {
  $(".collapse").collapse("hide");
});


// 
$(document).click(function () {
  $("#click-btn").click(function(){
    $(".auth__mobilenav__items").toggleClass("active");
  });
});
