!function(e,i,t,l){"use strict";e("#js-grid-juicy-projects").cubeportfolio({filters:"#js-filters-juicy-projects",loadMore:"#js-loadMore-juicy-projects",loadMoreAction:"click",layoutMode:"grid",defaultFilter:"*",animationType:"quicksand",gapHorizontal:35,gapVertical:30,gridAdjustment:"responsive",mediaQueries:[{width:1500,cols:5},{width:1100,cols:4},{width:800,cols:3},{width:480,cols:2},{width:320,cols:1}],caption:"overlayBottomReveal",displayType:"sequentially",displayTypeSpeed:80,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageCallback:function(i,t){var l=this;e.ajax({url:i,type:"GET",dataType:"html",timeout:1e4}).done(function(e){l.updateSinglePage(e)}).fail(function(){l.updateSinglePage("AJAX Error! Please refresh the page!")})}})}(jQuery,window,document);