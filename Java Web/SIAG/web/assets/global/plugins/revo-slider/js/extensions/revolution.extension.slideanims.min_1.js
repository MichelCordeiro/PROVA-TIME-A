/************************************************
 * REVOLUTION 5.0 EXTENSION - SLIDE ANIMATIONS
 * @version: 1.0.1 (11.08.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
************************************************/

!function(){var t=jQuery.fn.revolution;jQuery.extend(!0,t,{animateSlide:function(t,e,o,a,n,r,s,l,d){return i(t,e,o,a,n,r,s,l,d)}});var e=function(e,o,a,i){var n=e,r=n.find(".defaultimg"),s=n.data("zoomstart"),l=n.data("rotationstart");void 0!=r.data("currotate")&&(l=r.data("currotate")),void 0!=r.data("curscale")&&"box"==i?s=100*r.data("curscale"):void 0!=r.data("curscale")&&(s=r.data("curscale")),t.slotSize(r,o);var d=r.attr("src"),h=r.css("backgroundColor"),c=o.width,f=o.height,p=r.data("fxof"),u=0;"on"==o.autoHeight&&(f=o.c.height()),void 0==p&&(p=0);var g=0,v=r.data("bgfit"),w=r.data("bgrepeat"),m=r.data("bgposition");switch(void 0==v&&(v="cover"),void 0==w&&(w="no-repeat"),void 0==m&&(m="center center"),i){case"box":var y=0,x=0,T=0;if(y=o.sloth>o.slotw?o.sloth:o.slotw,!a)var g=0-y;o.slotw=y,o.sloth=y;for(var x=0,T=0,z=0;z<o.slots;z++){T=0;for(var b=0;b<o.slots;b++)n.append('<div class="slot" style="position:absolute;top:'+(u+T)+"px;left:"+(p+x)+"px;width:"+y+"px;height:"+y+'px;overflow:hidden;"><div class="slotslide" data-x="'+x+'" data-y="'+T+'" style="position:absolute;top:0px;left:0px;width:'+y+"px;height:"+y+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-T)+"px;left:"+(0-x)+"px;width:"+c+"px;height:"+f+"px;background-color:"+h+";background-image:url("+d+");background-repeat:"+w+";background-size:"+v+";background-position:"+m+';"></div></div></div>'),T+=y,void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l});x+=y}break;case"vertical":case"horizontal":if("horizontal"==i){if(!a)var g=0-o.slotw;for(var b=0;b<o.slots;b++)n.append('<div class="slot" style="position:absolute;top:'+(0+u)+"px;left:"+(p+b*o.slotw)+"px;overflow:hidden;width:"+(o.slotw+.6)+"px;height:"+f+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+g+"px;width:"+(o.slotw+.6)+"px;height:"+f+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:0px;left:"+(0-b*o.slotw)+"px;width:"+c+"px;height:"+f+"px;background-image:url("+d+");background-repeat:"+w+";background-size:"+v+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}else{if(!a)var g=0-o.sloth;for(var b=0;b<o.slots+2;b++)n.append('<div class="slot" style="position:absolute;top:'+(u+b*o.sloth)+"px;left:"+p+"px;overflow:hidden;width:"+c+"px;height:"+o.sloth+'px"><div class="slotslide" style="position:absolute;top:'+g+"px;left:0px;width:"+c+"px;height:"+o.sloth+'px;overflow:hidden;"><div style="background-color:'+h+";position:absolute;top:"+(0-b*o.sloth)+"px;left:0px;width:"+c+"px;height:"+f+"px;background-image:url("+d+");background-repeat:"+w+";background-size:"+v+";background-position:"+m+';"></div></div></div>'),void 0!=s&&void 0!=l&&punchgs.TweenLite.set(n.find(".slot").last(),{rotationZ:l})}}},o=function(t,e,o,a,i){function n(){jQuery.each(x,function(t,e){(e[0]==o||e[8]==o)&&(v=e[1],w=e[2],m=y),y+=1})}var r=punchgs.Power1.easeIn,s=punchgs.Power1.easeOut,l=punchgs.Power1.easeInOut,d=punchgs.Power2.easeIn,h=punchgs.Power2.easeOut,c=punchgs.Power2.easeInOut,f=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),p=punchgs.Power3.easeInOut,u=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],g=[16,17,18,19,20,21,22,23,24,25,27],v=0,w=1,m=0,y=0,x=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,s,s,500,6],["boxfade",1,0,10,0,"box",!1,null,1,l,l,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,c,c,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,c,c,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,s,s,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,s,s,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,s,s,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,s,s,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,h,h,500,8],["slotfade-horizontal",9,0,0,500,"horizontal",!0,null,9,h,h,500,25],["slotfade-vertical",10,0,0,500,"vertical",!0,null,10,h,h,500,25],["fade",11,0,1,300,"horizontal",!0,null,11,c,c,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,p,p,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,p,p,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,p,p,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,p,p,1e3,1],["papercut",16,0,0,600,"",null,null,16,p,p,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,l,l,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,l,l,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,p,p,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,p,p,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,f,p,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,p,p,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,c,c,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,h,h,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,h,h,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,c,c,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,c,c,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,c,c,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,c,c,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,c,c,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,c,c,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,c,c,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,c,c,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,c,c,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,c,c,1e3,1],["parallaxtoright",12,3,1,0,"horizontal",!0,!0,36,c,d,1500,1],["parallaxtoleft",15,3,1,0,"horizontal",!0,!0,37,c,d,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,c,r,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,c,r,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,c,d,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,c,d,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,c,d,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,c,d,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,c,d,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,c,d,1e3,1],["notransition",26,0,1,0,"horizontal",!0,null,46,c,d,1e3,1]]);"slidehorizontal"==o&&(o="slideleft",1==i&&(o="slideright")),"slidevertical"==o&&(o="slideup",1==i&&(o="slidedown")),"slideoverhorizontal"==o&&(o="slideoverleft",1==i&&(o="slideoverright")),"slideoververtical"==o&&(o="slideoverup",1==i&&(o="slideoverdown")),"slideremovehorizontal"==o&&(o="slideremoveleft",1==i&&(o="slideremoveright")),"slideremovevertical"==o&&(o="slideremoveup",1==i&&(o="slideremovedown")),"parallaxhorizontal"==o&&(o="parallaxtoleft",1==i&&(o="parallaxtoright")),"parallaxvertical"==o&&(o="parallaxtotop",1==i&&(o="parallaxtobottom")),"random"==o&&(o=Math.round(Math.random()*x.length-1),o>x.length-1&&(o=x.length-1)),"random-static"==o&&(o=Math.round(Math.random()*u.length-1),o>u.length-1&&(o=u.length-1),o=u[o]),"random-premium"==o&&(o=Math.round(Math.random()*g.length-1),o>g.length-1&&(o=g.length-1),o=g[o]);var T=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==e.isJoomla&&void 0!=window.MooTools&&-1!=T.indexOf(o)){var z=Math.round(Math.random()*(g.length-2))+1;z>g.length-1&&(z=g.length-1),0==z&&(z=1),o=g[z]}n(),v>26&&(v=26),0>v&&(v=0);var b=new Object;return b.nexttrans=v,b.STA=x[m],b.specials=w,b},a=function(t,e){return void 0==e||jQuery.isNumeric(t)?t:void 0==t?t:t.split(",")[e]},i=function(t,i,n,r,s,l,d,h,c){var f=l.index(),p=s.index(),u=f>p?1:0;"arrow"==r.sc_indicator&&(0==f&&p==r.slideamount-1&&(u=1),f==r.slideamount-1&&0==p&&(u=0));var g=o(n,r,i,d,u),v=g.STA,w=g.specials,t=g.nexttrans;"on"==d.data("kenburns")&&(t=11);var m=s.data("nexttransid")||0,y=a(s.data("masterspeed"),m);y="default"===y?v[11]:"random"===y?Math.round(1e3*Math.random()+300):void 0!=y?parseInt(y,0):v[11],y=y>r.delay?r.delay:y,y+=v[4],r.slots=a(s.data("slotamount"),m),r.slots=void 0==r.slots||"default"==r.slots?v[12]:"random"==r.slots?Math.round(12*Math.random()+4):v[12],r.slots=r.slots<1?"boxslide"==i?Math.round(6*Math.random()+3):"flyin"==i?Math.round(4*Math.random()+1):r.slots:r.slots,r.slots=(4==t||5==t||6==t)&&r.slots<3?3:r.slots,r.slots=0!=v[3]?Math.min(r.slots,v[3]):r.slots,r.slots=9==t?r.width/20:10==t?r.height/20:r.slots,r.rotate=a(s.data("rotate"),m),r.rotate=void 0==r.rotate||"default"==r.rotate?0:999==r.rotate||"random"==r.rotate?Math.round(360*Math.random()):r.rotate,r.rotate=!jQuery.support.transition||r.ie||r.ie9?0:r.rotate,11!=t&&(null!=v[7]&&e(h,r,v[7],v[5]),null!=v[6]&&e(d,r,v[6],v[5])),c.add(punchgs.TweenLite.set(d,{autoAlpha:1}),0),c.add(punchgs.TweenLite.set(h,{autoAlpha:1}),0);var x=a(s.data("easein"),m),T=a(s.data("easeout"),m);if(x="default"===x?v[9]||punchgs.Power2.easeInOut:x||v[9]||punchgs.Power2.easeInOut,T="default"===T?v[10]||punchgs.Power2.easeInOut:T||v[10]||punchgs.Power2.easeInOut,0==t){var z=Math.ceil(r.height/r.sloth),b=0;d.find(".slotslide").each(function(t){var e=jQuery(this);b+=1,b==z&&(b=0),c.add(punchgs.TweenLite.from(e,y/600,{opacity:0,top:0-r.sloth,left:0-r.slotw,rotation:r.rotate,force3D:"auto",ease:x}),(15*t+30*b)/1500)})}if(1==t){var L,D=0;d.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*y+300,a=500*Math.random()+200;o+a>L&&(L=a+a,D=t),c.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:r.rotate,ease:x}),a/1e3)})}if(2==t){var M=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.to(t,y/1e3,{left:r.slotw,ease:x,force3D:"auto",rotation:0-r.rotate}),0),c.add(M,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.from(t,y/1e3,{left:0-r.slotw,ease:x,force3D:"auto",rotation:r.rotate}),0),c.add(M,0)})}if(3==t){var M=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.to(t,y/1e3,{top:r.sloth,ease:x,rotation:r.rotate,force3D:"auto",transformPerspective:600}),0),c.add(M,0)}),d.find(".slotslide").each(function(){var t=jQuery(this);M.add(punchgs.TweenLite.from(t,y/1e3,{top:0-r.sloth,rotation:r.rotate,ease:T,force3D:"auto",transformPerspective:600}),0),c.add(M,0)})}if(4==t||5==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var j=y/1e3,M=new punchgs.TimelineLite;h.find(".slotslide").each(function(e){var o=jQuery(this),a=e*j/r.slots;5==t&&(a=(r.slots-e-1)*j/r.slots/1.5),M.add(punchgs.TweenLite.to(o,3*j,{transformPerspective:600,force3D:"auto",top:0+r.height,opacity:.5,rotation:r.rotate,ease:x,delay:a}),0),c.add(M,0)}),d.find(".slotslide").each(function(e){var o=jQuery(this),a=e*j/r.slots;5==t&&(a=(r.slots-e-1)*j/r.slots/1.5),M.add(punchgs.TweenLite.from(o,3*j,{top:0-r.height,opacity:.5,rotation:r.rotate,force3D:"auto",ease:punchgs.eo,delay:a}),0),c.add(M,0)})}if(6==t){r.slots<2&&(r.slots=2),r.slots%2&&(r.slots=r.slots+1);var M=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);M.add(punchgs.TweenLite.to(e,(y+o)/1e3,{top:0+r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:x}),0),c.add(M,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<r.slots/2)var o=90*(t+2);else var o=90*(2+r.slots-t);M.add(punchgs.TweenLite.from(e,(y+o)/1e3,{top:0-r.height,opacity:1,force3D:"auto",rotation:r.rotate,ease:T}),0),c.add(M,0)})}if(7==t){y=2*y,y>r.delay&&(y=r.delay);var M=new punchgs.TimelineLite;setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),h.find(".slotslide").each(function(){var t=jQuery(this).find("div");M.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.slotw/2+"px",top:0-r.height/2+"px",width:2*r.slotw+"px",height:2*r.height+"px",opacity:0,rotation:r.rotate,force3D:"auto",ease:x}),0),c.add(M,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");M.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*r.slotw+"px",ease:T,force3D:"auto",top:"0px",width:r.width,height:r.height,opacity:1,rotation:0,delay:.1}),0),c.add(M,0)})}if(8==t){y=3*y,y>r.delay&&(y=r.delay);var M=new punchgs.TimelineLite;h.find(".slotslide").each(function(){var t=jQuery(this).find("div");M.add(punchgs.TweenLite.to(t,y/1e3,{left:0-r.width/2+"px",top:0-r.sloth/2+"px",width:2*r.width+"px",height:2*r.sloth+"px",force3D:"auto",ease:x,opacity:0,rotation:r.rotate}),0),c.add(M,0)}),d.find(".slotslide").each(function(t){var e=jQuery(this).find("div");M.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*r.sloth+"px",width:d.find(".defaultimg").data("neww")+"px",height:d.find(".defaultimg").data("newh")+"px",opacity:1,ease:T,rotation:0}),0),c.add(M,0)})}if(9==t||10==t){var P=0;d.find(".slotslide").each(function(t){var e=jQuery(this);P++,c.add(punchgs.TweenLite.fromTo(e,y/1e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:x,delay:5*t/1e3}),0)})}if(11==t||26==t){var P=0;26==t&&(y=0),c.add(punchgs.TweenLite.fromTo(d,y/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:x}),0),c.add(punchgs.TweenLite.to(h,y/1e3,{autoAlpha:0,force3D:"auto",ease:x}),0),c.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),c.add(punchgs.TweenLite.set(h.find("defaultimg"),{autoAlpha:1}),0)}if(12==t||13==t||14==t||15==t){y=y,y>r.delay&&(y=r.delay),setTimeout(function(){punchgs.TweenLite.set(h.find(".defaultimg"),{autoAlpha:0})},100);var A=r.width,Q=r.height,O=d.find(".slotslide"),k=0,I=0,X=1,Y=1,S=1,C=y/1e3,V=C;("fullwidth"==r.sliderLayout||"fullscreen"==r.sliderLayout)&&(A=O.width(),Q=O.height()),12==t?k=A:15==t?k=0-A:13==t?I=Q:14==t&&(I=0-Q),1==w&&(X=0),2==w&&(X=0),3==w&&(C=y/1300),(4==w||5==w)&&(Y=.6),6==w&&(Y=1.4),(5==w||6==w)&&(S=1.4,X=0,A=0,Q=0,k=0,I=0),6==w&&(S=.6);7==w&&(A=0,Q=0);var Z=d.find(".slotslide"),H=h.find(".slotslide");if(c.add(punchgs.TweenLite.set(l,{zIndex:15}),0),c.add(punchgs.TweenLite.set(s,{zIndex:20}),0),8==w?(c.add(punchgs.TweenLite.set(l,{zIndex:20}),0),c.add(punchgs.TweenLite.set(s,{zIndex:15}),0),c.add(punchgs.TweenLite.set(Z,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:x,force3D:"auto"}),0)):c.add(punchgs.TweenLite.from(Z,C,{left:k,top:I,scale:S,opacity:X,rotation:r.rotate,ease:x,force3D:"auto"}),0),(4==w||5==w)&&(A=0,Q=0),1!=w)switch(t){case 12:c.add(punchgs.TweenLite.to(H,V,{left:0-A+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0);break;case 15:c.add(punchgs.TweenLite.to(H,V,{left:A+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0);break;case 13:c.add(punchgs.TweenLite.to(H,V,{top:0-Q+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0);break;case 14:c.add(punchgs.TweenLite.to(H,V,{top:Q+"px",force3D:"auto",scale:Y,opacity:X,rotation:r.rotate,ease:T}),0)}}if(16==t){var M=new punchgs.TimelineLite;c.add(punchgs.TweenLite.set(l,{position:"absolute","z-index":20}),0),c.add(punchgs.TweenLite.set(s,{position:"absolute","z-index":15}),0),l.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),l.find(".tp-half-one").clone(!0).appendTo(l).addClass("tp-half-two"),l.find(".tp-half-two").removeClass("tp-half-one");var A=r.width,Q=r.height;"on"==r.autoHeight&&(Q=n.height()),l.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+A+"px;height:"+Q+'px;"></div>'),l.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+A+"px;height:"+Q+'px;"></div>'),l.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),l.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),c.add(punchgs.TweenLite.set(l.find(".tp-half-two"),{width:A,height:Q,overflow:"hidden",zIndex:15,position:"absolute",top:Q/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),c.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{width:A,height:Q/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var J=(l.find(".defaultimg"),Math.round(20*Math.random()-10)),N=Math.round(20*Math.random()-10),_=Math.round(20*Math.random()-10),q=.4*Math.random()-.2,B=.4*Math.random()-.2,E=1*Math.random()+1,F=1*Math.random()+1,G=.3*Math.random()+.3;c.add(punchgs.TweenLite.set(l.find(".tp-half-one"),{overflow:"hidden"}),0),c.add(punchgs.TweenLite.fromTo(l.find(".tp-half-one"),y/800,{width:A,height:Q/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:E,rotation:J,y:0-Q-Q/4,autoAlpha:0,ease:x}),0),c.add(punchgs.TweenLite.fromTo(l.find(".tp-half-two"),y/800,{width:A,height:Q,overflow:"hidden",position:"absolute",top:Q/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:F,rotation:N,y:Q+Q/4,ease:x,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(l,{position:"absolute","z-index":15}),punchgs.TweenLite.set(s,{position:"absolute","z-index":20}),l.find(".tp-half-one").length>0&&(l.find(".tp-half-one .defaultimg").unwrap(),l.find(".tp-half-one .slotholder").unwrap()),l.find(".tp-half-two").remove()}}),0),M.add(punchgs.TweenLite.set(d.find(".defaultimg"),{autoAlpha:1}),0),null!=l.html()&&c.add(punchgs.TweenLite.fromTo(s,(y-200)/1e3,{scale:G,x:r.width/4*q,y:Q/4*B,rotation:_,force3D:"auto",transformOrigin:"center center",ease:T},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),c.add(M,0)}if(17==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);c.add(punchgs.TweenLite.fromTo(e,y/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:x,delay:.06*t}),0)}),18==t&&d.find(".slotslide").each(function(t){var e=jQuery(this);c.add(punchgs.TweenLite.fromTo(e,y/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:x,delay:.06*t}),0)}),19==t||22==t){var M=new punchgs.TimelineLite;c.add(punchgs.TweenLite.set(l,{zIndex:20}),0),c.add(punchgs.TweenLite.set(s,{zIndex:20}),0),setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var K=90,X=1,R="center center ";1==u&&(K=-90),19==t?(R=R+"-"+r.height/2,X=0):R+=r.height/2,punchgs.TweenLite.set(n,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),d.find(".slotslide").each(function(t){var e=jQuery(this);M.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:r.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:R,rotationX:K},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:x}),0),M.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),c.add(M)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=-90;1==u&&(o=90),M.add(punchgs.TweenLite.fromTo(e,y/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:R,rotationX:0},{autoAlpha:1,rotationY:r.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:T}),0),c.add(M)}),c.add(punchgs.TweenLite.set(l,{zIndex:18}),0)}if(20==t){if(setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100),1==u)var U=-r.width,K=80,R="20% 70% -"+r.height/2;else var U=r.width,K=-80,R="80% 70% -"+r.height/2;d.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;c.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:U,rotationX:40,z:-600,opacity:X,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:R,transformStyle:"flat",rotationY:K},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:x}),0)}),h.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;if(o=t>0?o+y/9e3:0,1!=u)var a=-r.width/2,i=30,n="20% 70% -"+r.height/2;else var a=r.width/2,i=-30,n="80% 70% -"+r.height/2;T=punchgs.Power2.easeInOut,c.add(punchgs.TweenLite.fromTo(e,y/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:T}),0)})}if(21==t||25==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var K=90,U=-r.width,W=-K;if(1==u)if(25==t){var R="center top 0";K=r.rotate}else{var R="left center 0";W=r.rotate}else if(U=r.width,K=-90,25==t){var R="center bottom 0";W=-K,K=r.rotate}else{var R="right center 0";W=r.rotate}d.find(".slotslide").each(function(){var t=jQuery(this),e=y/1.5/3;c.add(punchgs.TweenLite.fromTo(t,2*e/1e3,{left:0,transformStyle:"flat",rotationX:W,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:R,rotationY:K},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:e/1e3,ease:x}),0)}),1!=u?(U=-r.width,K=90,25==t?(R="center top 0",W=-K,K=r.rotate):(R="left center 0",W=r.rotate)):(U=r.width,K=-90,25==t?(R="center bottom 0",W=-K,K=r.rotate):(R="right center 0",W=r.rotate)),h.find(".slotslide").each(function(){var t=jQuery(this);c.add(punchgs.TweenLite.fromTo(t,y/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:R,rotationY:0},{left:0,rotationX:W,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:K,ease:T}),0)})}if(23==t||24==t){setTimeout(function(){h.find(".defaultimg").css({opacity:0})},100);var K=-90,X=1,$=0;if(1==u&&(K=90),23==t){var R="center center -"+r.width/2;X=0}else var R="center center "+r.width/2;punchgs.TweenLite.set(n,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),d.find(".slotslide").each(function(t){var e=jQuery(this);c.add(punchgs.TweenLite.fromTo(e,y/1e3,{left:$,rotationX:r.rotate,force3D:"auto",opacity:X,top:0,scale:1,transformPerspective:1200,transformOrigin:R,rotationY:K},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:x}),0)}),K=90,1==u&&(K=-90),h.find(".slotslide").each(function(e){var o=jQuery(this);c.add(punchgs.TweenLite.fromTo(o,y/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:R,rotationY:0},{left:$,rotationX:r.rotate,top:0,scale:1,rotationY:K,delay:50*e/500,ease:T}),0),23==t&&c.add(punchgs.TweenLite.fromTo(o,y/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*e/500+y/3e3,ease:T}),0)})}return c}}(jQuery);