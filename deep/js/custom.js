$(document).ready(function () {
	 // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
 // BOOTSTARP DROPDOWN HOVER //
$('.dropdown').hover(function(){
	$(this).children(".dropdown-menu").slideDown();
	$(this).addClass("open");
}, function(){
	$(this).children(".dropdown-menu").slideUp();
	$(this).removeClass("open");
});

 // SLIDE EFECTS Pretty wieardo//
 $('.nextbtn').click(function(){
	 $(".imageholder > img:first")
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('.imageholder');
	 $(".scaption > h3:first")
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('.scaption');
 });
 $('.prevbtn').click(function(){
	 $(".imageholder > img:first")
			.fadeOut(1000)
			.siblings(":last")
			.fadeIn(1000)
			.end()
	 $(".imageholder > img:last").prependTo(".imageholder");
	 $(".scaption > h3:first")
			.fadeOut(1000)
			.siblings(":last")
			.fadeIn(1000)
			.end()
	 $(".scaption > h3:last").prependTo(".scaption");
 });
 // Reservation Send //
 $('.sendbutton').click(function(){
	 $('form.rez-form').addClass('animout');
 })
 // İletişim Send //
 $('.iletisim-form .btn').click(function(){
	 $(this).parent('form').addClass('rape-me');
 })
 
});