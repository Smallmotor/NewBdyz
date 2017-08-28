

var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[6|7]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
var regyzm = /^\d{6}$/;
var regmm = /^\w{6,}$/;

var reg4 = /^[0-9a-zA-z]{6,}$/;

var reg6 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

var falg1 = falg2 = falg3= false;
var falgb=falg4 = falg5 = falg6= false;

function sd(a,regs){
    if(regs.test(a.val())){
        a.parent().removeClass("has-error")
        a.parent().addClass("has-success")
        a.siblings(".glyphicon").addClass("glyphicon-ok")
        a.siblings(".glyphicon").removeClass("glyphicon-remove")
        return true;
    }else{
        a.parent().addClass("has-error")
        a.parent().removeClass("has-success")
        a.siblings(".glyphicon").addClass(" glyphicon-remove")
        a.siblings(".glyphicon").removeClass("glyphicon-ok")
        return false;
    }
     
}
$("#ibtn1").blur(function(){
    falg1=sd($(this),regtel)    
})

$("#ibtn2").blur(function(){
    falg2=sd($(this),regyzm)
})
$("#ibtn3").blur(function(){
    falg3=sd($(this),regmm)
})
$("#ibtn4").blur(function(){
    falg4=sd($(this),reg4)
})
$("#ibtn5").blur(function(){
    falg5=sd($(this),regmm)
})
$("#ibtn6").blur(function(){
    falg6=sd($(this),reg6)
})


for(var i=0,l=$(".boxs").length;i<l;i++){
    $($(".boxs")[i]).attr("index",i)
}
$(".boxs").click(function(){
    $(this).addClass("hbox")
    $(this).siblings().removeClass("hbox")
    var index = $(this).attr("index")
 
    $($(".yiye")[index]).addClass("yiye1").removeClass("yiye2")


    $($(".yiye")[index]).siblings(".yiye")
    .removeClass("yiye1")
    .addClass("yiye2")   
})

$("#wodema1").click(function(){
    $("#ibtn1").blur()
    $("#ibtn2").blur()
    $("#ibtn3").blur()
    if(falg1&&falg2&&falg3){
        alert("验证完成，正在提交")
    }else{
        alert("输入有误，请重新输入")
    }

})
$("#wodema2").click(function(){
    $("#ibtn4").blur()
    $("#ibtn5").blur()
    $("#ibtn6").blur()
    if(falg4&&falg5&&falg6){
        alert("验证完成，正在提交")
    }else{
        alert("输入有误，请重新输入")
    }
})