var UIButtons=function(){var n=function(){$(".demo-loading-btn").click(function(){var n=$(this);n.button("loading"),setTimeout(function(){n.button("reset")},3e3)})};return{init:function(){n()}}}();jQuery(document).ready(function(){UIButtons.init()});