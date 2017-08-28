var reg1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var reg2 = /^[a-zA-z]{4,}$/;


var reg4 = /^\d{6,}[^\u4e00-\u9fa5]{0,}\d*$/;      //一级
var reg5 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}[^\u4e00-\u9fa5]{0,}\d*$/;      //三级


var falg1 = falg2 = falg3 = false;

function sd(x,y,z){
    if(x.attr("id")=="btn3"){
        x.siblings(".sps").text("弱");
        if(reg5.test(x.val())){
            x.siblings(".sps").text("强");
        }
    }
}
function ab (x,y,z){
    if(y.test(x.val())){
        x.parent().removeClass("has-error")
        x.parent().addClass("has-success")
        console.log(x.attr("id"))
        sd(x,y,z)
        return true;    
    }else{
        x.parent().addClass("has-error")
        x.parent().removeClass("has-success")
        alert(z)
        return false;
    }
}
$("#btn1").blur(function(){
    var text = "邮箱格式错误"
    falg1=ab($(this),reg1,text)
})
$("#btn2").blur(function(){
    var text = "用户名格式错误，请输入至少四个英文字符"
    falg2=ab($(this),reg2,text)
})
$("#btn3").blur(function(){
    var text = "密码格式错误，请输入至少6个英文或数字"
    falg3=ab($(this),reg4,text)
})

$("#zhuce").click(function(){
    $("#btn1").blur()
    $("#btn2").blur()
    $("#btn3").blur()
    if(falg1&&falg2&&falg3){
        alert("填写成功，正在提交，请稍后……")
    }
})