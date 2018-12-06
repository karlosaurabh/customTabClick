// JavaScript Document


$('.colorIndicators').on('click', 'a', function(event){
                event.preventDefault();
                var $current = $(this);               
                $('.colorIndicators a').removeClass();
                $('.ProdContent .content').hide();
                $current.addClass('active');
                var contentID = $current.attr('href');
				
                $('.ProdContent').find(contentID).fadeIn();
				 
            });
			
			
			
			
		window.onload = function move() {
			  var elem = document.getElementById("myBar1");   
			  var width = 50;
			  var id = setInterval(frame, 50);
			  function frame() {
				if (width >= 50) {
				  clearInterval(id);
				} else {
				  width++; 
				  elem.style.width = width + '%'; 
				  elem.innerHTML = width * 4  + '%';
				}
			  }
			}
			
			window.onload = function move() {
			  var elem = document.getElementById("myBar2");   
			  var width = 10;
			  var id = setInterval(frame, 10);
			  function frame() {
				if (width >= 90) {
				  clearInterval(id);
				} else {
				  width++; 
				  elem.style.width = width + '%'; 
				  elem.innerHTML = width * 1  + '%';
				}
			  }
			}
			/*================================== end code ======================*/
			
			
			
			$('.sa').click(function(){
			 
			  var element = $(this).attr('class').split(" sa");
			  $(".colorName").html(element);
   			 // alert(element);

			/* var res = str.split(" are");
   			   document.getElementById("demo").innerHTML = res;
			  alert(name);*/
			});

			
			
			/*================================== Gauge code ======================*/
			
			$(function () {
		$("button").click(function () {
			var randomNum = Math.floor((Math.random() * 100));
			$('#gaugeDemo .gauge-arrow').trigger('updateGauge', randomNum);
		});

		$('#gaugeDemo .gauge-arrow').cmGauge();
	});

