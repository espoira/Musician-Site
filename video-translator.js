		$(function () {
			
			var s = $('#solo').attr('src');
			$('.solo').click(function(){
				var title = s.split('-')[0] + '-' + $(this).find('h3').html();
				$('#solo').attr('src',title.slice(0,-1) + '.mp4');
				$('.solo').css('color','#010767');
				this.style.color = 'lime';
			});	

			$('input').click(function(){
				$('#name').html('With ' + $(this).next().html() + ': ' + this.name.replace('_',' & '));
				$('.select').attr('id','unchecked');
				$(this).parent().attr('id','checked');
			});	
			
			var new_title = $('#duet').attr('src');			
			$('#show').click(function(){
				if ($('#name').html()==' '){
					$('#name').html('With '	+ new_title.split('&')[1].replace(' -',':').split('.')[0]);				
				} else {
					var name = $('#name').html().replace(' &amp; ', '_');
					new_title = new_title.split('&')[0] + name.replace('With', '&').replace(':',' -') + '.mp4';
				};	
				$('#duet').attr('src',new_title);
				$('#unchecked').css('background','cornsilk');
				$('#checked').css('background','#92d0d1');
			});	
		
		});

