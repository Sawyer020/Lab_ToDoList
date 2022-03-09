$(document).ready(function(){

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500,function(){
$(this).remove();
});
event.stopPropagation();
});

var dateControl = document.querySelector('input[type="date"]');
//get date from HTML

$("input[type='text']").keypress(function(event){
if(event.which === 13){

var todoText = $(this).val()
$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "\n" + dateControl.value + "</li>")
}
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});


});
