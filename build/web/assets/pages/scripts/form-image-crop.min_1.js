var FormImageCrop=function(){var t=function(){$("#demo1").Jcrop()},e=function(){function t(t){$("#x1").val(t.x),$("#y1").val(t.y),$("#x2").val(t.x2),$("#y2").val(t.y2),$("#w").val(t.w),$("#h").val(t.h)}function e(){$("#coords input").val("")}var o;$("#demo2").Jcrop({onChange:t,onSelect:t,onRelease:e},function(){o=this}),$("#coords").on("change","input",function(t){var e=$("#x1").val(),n=$("#x2").val(),a=$("#y1").val(),i=$("#y2").val();o.setSelect([e,a,n,i])})},o=function(){function t(t){if(parseInt(t.w)>0){var e=s/t.w,a=r/t.h;c.css({width:Math.round(e*o)+"px",height:Math.round(a*n)+"px",marginLeft:"-"+Math.round(e*t.x)+"px",marginTop:"-"+Math.round(a*t.y)+"px"})}}var e,o,n,a=$("#preview-pane"),i=$("#preview-pane .preview-container"),c=$("#preview-pane .preview-container img"),s=i.width(),r=i.height();console.log("init",[s,r]),$("#demo3").Jcrop({onChange:t,onSelect:t,aspectRatio:s/r},function(){var t=this.getBounds();o=t[0],n=t[1],e=this,a.appendTo(e.ui.holder)})},n=function(){function t(t){var e=$("<button />").addClass("btn small");return t&&e.append(t),e}function e(t,e){$("#interface").prepend($("<fieldset></fieldset>").attr("id",t).append($("<h4></h4>").append(e),'<div class="btn-toolbar"><div class="btn-group"></div></div>'))}function o(t,e){return function(o){$(o.target).closest(".btn-group").find(".active").removeClass("active"),$(o.target).addClass("active");var n={};return n[t]=e,a.setOptions(n),!1}}function n(t){return function(e){return $(e.target).addClass("active"),a.animateTo(t,function(){$(e.target).closest(".btn-group").find(".active").removeClass("active")}),!1}}var a;$("#demo4").Jcrop({bgFade:!0,bgOpacity:.2,setSelect:[60,70,540,330]},function(){a=this}),$("#fadetog").change(function(){a.setOptions({bgFade:this.checked})}).attr("checked",!0),App.updateUniform("#fadetog"),$("#shadetog").change(function(){this.checked?$("#shadetxt").slideDown():$("#shadetxt").slideUp(),a.setOptions({shade:this.checked})}).attr("checked",!1);var c={bgc_buttons:"Change bgColor",bgo_buttons:"Change bgOpacity",anim_buttons:"Animate Selection"},s={anim1:[217,122,382,284],anim2:[20,20,580,380],anim3:[24,24,176,376],anim4:[347,165,550,355],anim5:[136,55,472,183]},r={Low:.2,Mid:.5,High:.8,Full:1},l={R:"#900",B:"#4BB6F0",Y:"#F0B207",G:"#46B81C",W:"white",K:"black"};for(i in c)e(i,c[i]);var u=1;for(i in s)$("#anim_buttons .btn-group").append(t(u++).click(n(s[i]))," ");$("#anim_buttons .btn-group").append(t("Bye!").click(function(t){return $(t.target).addClass("active"),a.animateTo([300,200,300,200],function(){this.release(),$(t.target).closest(".btn-group").find(".active").removeClass("active")}),!1}));for(i in r)$("#bgo_buttons .btn-group").append(t(i).click(o("bgOpacity",r[i]))," ");for(i in l)$("#bgc_buttons .btn-group").append(t(i).css({background:l[i],color:"K"==i||"R"==i?"white":"black"}).click(o("bgColor",l[i]))," ");$("#bgo_buttons .btn:first,#bgc_buttons .btn:last").addClass("active"),$("#interface").show()},a=function(){function t(){$(".requiresjcrop").hide(),$("#demo5").Jcrop({onRelease:o},function(){n=this,n.animateTo([100,100,400,300]),$("#can_click,#can_move,#can_size").attr("checked","checked"),App.updateUniform("#can_click,#can_move,#can_size"),$("#ar_lock,#size_lock,#bg_swap").attr("checked",!1),App.updateUniform("#ar_lock,#size_lock,#bg_swap"),$(".requiresjcrop").show()})}function e(){var t=n.getBounds();return[Math.round(Math.random()*t[0]),Math.round(Math.random()*t[1]),Math.round(Math.random()*t[0]),Math.round(Math.random()*t[1])]}function o(){n.setOptions({allowSelect:!0}),$("#can_click").attr("checked",!1),App.updateUniform("#can_click")}var n;t(),$("#setSelect").click(function(t){n.setSelect(e())}),$("#animateTo").click(function(t){n.animateTo(e())}),$("#release").click(function(t){n.release()}),$("#disable").click(function(t){n.disable(),$("#enable").show(),$(".requiresjcrop").hide()}),$("#enable").click(function(t){n.enable(),$("#enable").hide(),$(".requiresjcrop").show()}),$("#rehook").click(function(e){return $("#rehook,#enable").hide(),t(),$("#unhook,.requiresjcrop").show(),!1}),$("#unhook").click(function(t){return n.destroy(),$("#unhook,#enable,.requiresjcrop").hide(),$("#rehook").show(),!1}),$("#img1").click(function(t){return $(this).addClass("active").closest(".btn-group").find("button.active").not(this).removeClass("active"),n.setImage("../../assets/global/plugins/jcrop/demos/demo_files/sago.jpg"),n.setOptions({bgOpacity:.6}),!1}),$("#img2").click(function(t){return $(this).addClass("active").closest(".btn-group").find("button.active").not(this).removeClass("active"),n.setImage("../../assets/global/plugins/jcrop/demos/demo_files/pool.jpg"),n.setOptions({bgOpacity:.6}),!1}),$("#img3").click(function(t){return $(this).addClass("active").closest(".btn-group").find("button.active").not(this).removeClass("active"),n.setImage("../../assets/global/plugins/jcrop/demos/demo_files/sago.jpg",function(){this.setOptions({bgOpacity:1,outerImage:"../../assets/global/plugins/jcrop/demos/demo_files/sagomod.jpg"}),this.animateTo(e())}),!1}),$("#can_click").change(function(t){n.setOptions({allowSelect:!!this.checked}),n.focus()}),$("#can_move").change(function(t){n.setOptions({allowMove:!!this.checked}),n.focus()}),$("#can_size").change(function(t){n.setOptions({allowResize:!!this.checked}),n.focus()}),$("#ar_lock").change(function(t){n.setOptions(this.checked?{aspectRatio:4/3}:{aspectRatio:0}),n.focus()}),$("#size_lock").change(function(t){n.setOptions(this.checked?{minSize:[80,80],maxSize:[350,350]}:{minSize:[0,0],maxSize:[0,0]}),n.focus()})},c=function(){var t;$("#demo6").Jcrop({bgOpacity:.5,bgColor:"white",addClass:"jcrop-light"},function(){t=this,t.setSelect([130,65,480,350]),t.setOptions({bgFade:!0}),t.ui.selection.addClass("jcrop-selection")}),$("#buttonbar").on("click","button",function(e){var o=$(this),n=o.closest(".btn-group");n.find("button.active").removeClass("active"),o.addClass("active"),n.find("[data-setclass]").each(function(){var e=$(this),o=e.data("setclass"),n=e.hasClass("active");if(n)switch(t.ui.holder.addClass(o),o){case"jcrop-light":t.setOptions({bgColor:"white",bgOpacity:.5});break;case"jcrop-dark":t.setOptions({bgColor:"black",bgOpacity:.4});break;case"jcrop-normal":t.setOptions({bgColor:$.Jcrop.defaults.bgColor,bgOpacity:$.Jcrop.defaults.bgOpacity})}else t.ui.holder.removeClass(o)})})},s=function(){var t={x:13,y:7,x2:487,y2:107,w:474,h:100};$("#demo7").Jcrop({bgFade:!0,setSelect:[t.x,t.y,t.x2,t.y2]})},r=function(){function t(t){$("#crop_x").val(t.x),$("#crop_y").val(t.y),$("#crop_w").val(t.w),$("#crop_h").val(t.h)}$("#demo8").Jcrop({aspectRatio:1,onSelect:t}),$("#demo8_form").submit(function(){return parseInt($("#crop_w").val())?!0:(alert("Please select a crop region then press submit."),!1)})},l=function(){$(window).width()<=1024&&$(window).width()>=678?$(".responsive-1024").each(function(){$(this).attr("data-class",$(this).attr("class")),$(this).attr("class","responsive-1024 col-md-12")}):$(".responsive-1024").each(function(){$(this).attr("data-class")&&($(this).attr("class",$(this).attr("data-class")),$(this).removeAttr("data-class"))})};return{init:function(){jQuery().Jcrop&&(App.addResizeHandler(l),l(),t(),e(),o(),n(),a(),c(),s(),r())}}}();jQuery(document).ready(function(){FormImageCrop.init()});