	function SedemyLoad(Module,location,params,form,animate)
	{
		var ajax_url=base_url+ Module;
		var d= params;
		if(form){d+='&'+$("#"+form).serialize();}
		if(location==''){location='box';}
		$('#'+location).html("");
		
		$(":button,button").attr('disabled','disabled');
		$('#'+location).append("<div id='loading' align='center'><img src='"+base_url+"files/assets/imgs/loading.gif' border='0' title='loading now'/></div>");
		$.ajax({
			type: "POST",
			url: ajax_url,
			data: d,
			dataType: "html",
			success: function(msg){
				//$('#loading').fadeOut(500, function() {
					 //$(this).remove();
					 //$('#'+location).html('');
					 $('#loading').remove();
					 $('#'+location).html(msg);	
					 
					 
				//});		
				$(":button,button").attr('disabled','');
				$(":button,button").attr('disabled',false);
				if(animate=='1'){
					var targetdiv=$('#'+location).offset().top;
					if($.browser.opera){
						$('html').animate({scrollTop:targetdiv}, '3000');
					}else{ 
						$('html,body').animate({scrollTop:targetdiv}, '3000');
					}
				}
			}
		});
		
	}

	function move_to(location){
		var targetdiv=$('#'+location).offset().top - 75;
		$('html,body').animate({scrollTop:targetdiv}, '0');
		
	}	
	
	function check_email(elm,ret){
		var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!reg.test($('#'+elm).val())){
        	$('#'+ret).html("<div class='alert alert-danger'><strong>خطأ !</strong> برجاء كتابة البريد الالكترونى بشكل صحيح !!.</div");
			return false;
    	}else{
			return true;
		}
	}
	

var myApp;
myApp = myApp || (function () {
    var pleaseWaitDiv = $('<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="container text-center" style="margin-top:200px;position:absolute;left:0;right:0;"><button class="btn btn-lg btn-warning"><span class="fa fa-refresh fa-refresh-animate"></span> إنتظر من فضلك ...</button></div></div>');
    return {
        showPleaseWait: function() {
            pleaseWaitDiv.modal();
        },
        hidePleaseWait: function () {
            pleaseWaitDiv.modal('hide');
        },

    };
})();

  function openModal(modallink){
	myApp.showPleaseWait();
	var $modal = $('#ajax-modal');  
	  setTimeout(function(){
		$modal.load(modallink, '', function(){
		 myApp.hidePleaseWait();
		 $('body').css('overflow','hidden');
		  $modal.modal().on('hidden.bs.modal', function () {
        	$(this).empty();
			$('body').css('padding','0px');
			$('body').css('overflow','auto');
    	  });
		});
	  }, 1000);
	  
 }
 
 
 
 
 function validateNewsletter(){
	if(document.getElementById('newsletter_name').value==''){
		document.getElementById('newsletter_name').focus();
		$('#newsletterMsgRet').html("<div class='alert alert-danger p-2' style='font-size: .8rem;'><strong>خطـأ !</strong> من فضلك أدخل إسمكم الكريم !!.</div");//alert('Your name !!');
		return false;
	}
	if(document.getElementById('newsletter_email').value==''){
		document.getElementById('newsletter_email').focus();
		$('#newsletterMsgRet').html("<div class='alert alert-danger p-2' style='font-size: .8rem;'><strong>خطـأ !</strong> من فضلك أدخل بريدك الإلكترونى !!.</div");//alert('Your E-mail !!');
		return false;
	}
	if(document.getElementById('newsletter_mobile').value==''){
		document.getElementById('newsletter_mobile').focus();
		$('#newsletterMsgRet').html("<div class='alert alert-danger p-2' style='font-size: .8rem;'><strong>خطـأ !</strong> من فضلك أدخل جوالك !!.</div");//alert('Your phone !!');
		return false;
	}
	if(check_email('newsletter_email','newsletterMsgRet')){
		$('#newsletter_btn').attr('disabled','disabled');
		SedemyLoad('pages/add_to_newsletter','newsletter_btn_ret','','subscribeNews');
	}
 }
 
  function validate_order(){
	if(document.getElementById('order_title').value==''){
		document.getElementById('order_title').focus();
		$('#ord_retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل عنوان الطلب !!.</div");
		return false;
	}
	if(document.getElementById('order_service').value==''){
		document.getElementById('order_service').focus();
		$('#ord_retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك إختر الخدمة المطلوبة !!.</div");
		return false;
	}
	if(document.getElementById('order_name').value==''){
		document.getElementById('order_name').focus();
		$('#ord_retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل إسمكم الكريم !!.</div");
		return false;
	}
	if(document.getElementById('order_email').value==''){
		document.getElementById('order_email').focus();
		$('#ord_retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل بريدك الإلكترونى !!.</div");
		return false;
	}
	if(document.getElementById('order_mobile').value==''){
		document.getElementById('order_mobile').focus();
		$('#ord_retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل جوالك !!.</div");//alert('Your phone !!');
		return false;
	}
	if(document.getElementById('order_text').value==''){
		document.getElementById('order_text').focus();
		$('#ord_retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> تفضل بكتابة رسالتك !!.</div");//alert('Message !!');
		return false;
	}
	if(check_email('order_email','ord_retmsg')){
		$('#send_order_btn').attr('disabled','disabled');
		SedemyLoad('pages/send_order','order_span','','order_form');
	}
 }


 function validate_contactus(){
	if(document.getElementById('contact_name').value==''){
	  document.getElementById('contact_name').focus();
	  $('#retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل إسمكم الكريم !!.</div");//alert('Your name !!');
	  return false;
	}
	if(document.getElementById('contact_email').value==''){
	  document.getElementById('contact_email').focus();
	  $('#retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل بريدك الإلكترونى !!.</div");//alert('Your E-mail !!');
	  return false;
	}
	if(document.getElementById('mobile').value==''){
	  document.getElementById('mobile').focus();
	  $('#retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> من فضلك أدخل جوالك !!.</div");//alert('Your phone !!');
	  return false;
	}
	if(document.getElementById('contact_text').value==''){
	  document.getElementById('contact_text').focus();
	  $('#retmsg').html("<div class='alert alert-danger'><strong>خطـأ !</strong> تفضل بكتابة رسالتك !!.</div");//alert('Message !!');
	  return false;
	}
	if(check_email('contact_email','retmsg')){
	  $('#send_contact_btn').attr('disabled','disabled');
	  SedemyLoad('pages/send_contact_ajax','contact_span','','contact_form');
	}
}

 // The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
		window.setTimeout(
			function(){
				window.scrollTo(window.scrollX, window.scrollY  - 75);
			}
			, 2);
		
    }
}
// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);
