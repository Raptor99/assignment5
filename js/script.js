$(function(){     //same as document.addEventListener("DOMContentLoaded,...")
   
   //same as document.queryselector("#navbarToggle").addEventListener("blur,function()")

   $("#nav1").blur(function(event){
   	var screenWidth=window.innerWidth;
   	if(screenWidth<768){
   		$("#collapse_target").collapse('hide');
   	}
   });
});

(function(global){

	var bk={};

	var homeHtml="snippets/home.html";

	// convenience function for inserting innerHTML for 'select'

	var insertHtml=function(selector,html){

		var targetElem= document.queryselector(selector);
		targetElem.innerHTML=html;
	};
}

// show loading icon iside element identified by 'selector'.
var showloading= function(selector){

	var html="<div class='text-center'>";
	html+="<img src='images/ajax-loader.gif'></div>";
	insertHtml(selector,html);

};


// on page load 
document.addEventListener("DOMContentLoaded",function(event){

	// on first load show home view
	showloading("#main-content");
	$ajaxutils.sendGetRequest(homeHtml,function(responseText){
		document.queryselector("#main-content")
		.innerHTML=responseText;
	},false);
});

 global.$bk=bk;
})(window);