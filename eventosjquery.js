//sintaxis
//para manejar los eventos en jquery

//$(selector).on('evento',handler);
/*$('#target').on('click', function(){
	alert("Evento click :P");
})*/

//$(selecto).evento(handler)
/*$('#target').click(function(){
	alert("Evento click :D");
});*/

//no me funciona :(
/*var $target = $('#target');
$('.target').on('click', function(e) {
  $('.target').toggleClass( "colored" );
  //alert('click');
});

$('#target').mouseover(function() {
	//alert('mouseover');
    //$(this).toggleClass('highlight');
  })
  .mouseout(function() {
    //alert('mouseout');
    //$(this).toggleClass('yellow');
  });

  $('.demo').on('click', function (e) {
	    $('.demo').toggleClass("highlight");
	});*/


//addclass
//setTimeout(function(){ alert("Hello"); }, 3000);
var $target=$('#target');
var items = Array("cBlue","cRed","cGreen","cBlue","cRed","cGreen");

setInterval(function(){
	//alert("clase "+item);
	var item = items[Math.floor(Math.random()*items.length)];
	$target.removeClass().addClass(""+item+"");
	/*console.log($target.attr('class'));
	if($target.attr('class') == "cGreen"){
		$('#puntos').text($target.attr('class'));
	}else{
		$('#puntos').text("0");
	}*/
	//$target.addClass('cBlue');
},1500);

$('#cBlue').on('click', function(){
	/*$target.removeClass('cTarget cRed cGreen');
	$target.addClass('cBlue');
	$(this).addClass('active');
	$('#cRed').removeClass('active');
	$('#cGreen').removeClass('active');*/
});
$('#cRed').on('click', function(){
	/*$target.removeClass().addClass('cRed');
	$(this).addClass('active');
	$(this).siblings().removeClass('active');*/
});
$('#cGreen').on('click', function(){
	/*$target.removeClass('cTarget cBlue cRed');
	$target.addClass('cGreen');
	
	$(this).addClass('active');
	$('#cBlue').removeClass('active');
	$('#cRed').removeClass('active');*/
});
var puntos=0;
$('#botones').on('click','a',function(e){
	//console.log(e.target);
	console.log($(this).attr('id'));
	console.log($target.attr('class'));
	/*if($(this).attr('id') == "cGreen"){
		$('#puntos').text($(this).attr('id'));
	}*/
	if($target.attr('class') == $(this).attr('id')){
		puntos++;
		$('#puntos').text(puntos);

	}else{
		//$('#puntos').text("0");
	}
});