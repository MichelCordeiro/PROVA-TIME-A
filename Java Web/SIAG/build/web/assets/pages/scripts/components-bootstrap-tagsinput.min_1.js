var ComponentsBootstrapTagsinput=function(){var t=function(){var t=$("#object_tagsinput");t.tagsinput({itemValue:"value",itemText:"text"}),$("#object_tagsinput_add").on("click",function(){t.tagsinput("add",{value:$("#object_tagsinput_value").val(),text:$("#object_tagsinput_city").val(),continent:$("#object_tagsinput_continent").val()})}),t.tagsinput("add",{value:1,text:"Amsterdam",continent:"Europe"}),t.tagsinput("add",{value:4,text:"Washington",continent:"America"}),t.tagsinput("add",{value:7,text:"Sydney",continent:"Australia"}),t.tagsinput("add",{value:10,text:"Beijing",continent:"Asia"}),t.tagsinput("add",{value:13,text:"Cairo",continent:"Africa"})},a=function(){var t=$("#state_tagsinput");t.tagsinput({tagClass:function(t){switch(t.continent){case"Europe":return"label label-primary";case"America":return"label label-danger label-important";case"Australia":return"label label-success";case"Africa":return"label label-default";case"Asia":return"label label-warning"}},itemValue:"value",itemText:"text"}),$("#state_tagsinput_add").on("click",function(){t.tagsinput("add",{value:$("#state_tagsinput_value").val(),text:$("#state_tagsinput_city").val(),continent:$("#state_tagsinput_continent").val()})}),t.tagsinput("add",{value:1,text:"Amsterdam",continent:"Europe"}),t.tagsinput("add",{value:4,text:"Washington",continent:"America"}),t.tagsinput("add",{value:7,text:"Sydney",continent:"Australia"}),t.tagsinput("add",{value:10,text:"Beijing",continent:"Asia"}),t.tagsinput("add",{value:13,text:"Cairo",continent:"Africa"})};return{init:function(){t(),a()}}}();jQuery(document).ready(function(){ComponentsBootstrapTagsinput.init()});