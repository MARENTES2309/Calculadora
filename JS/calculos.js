$(document).ready(function(){
    $(".btn").click(function Agregar(){
        var n1=$(".text").val();
        var n2= n1 + $(this).html();
        $(".text").val(n2);
        n=n2;
    })
    $(".limpiar").click(function(){
        $(".text").val("");
    })
    var op;
    var num1;
    var num2;
    var res;
    $(".op").click(function(){
        op=$(this).html();
        num1=$(".text").val();
        $(".text").val("");
    })
    $(".igual").click(function(){
        num2=$(".text").val();
        switch(op){
        case '+':
        res=parseFloat(num1)+parseFloat(num2);   
        $(".text").val(res);         
        break;
        case '-':
        res=parseFloat(num1)-parseFloat(num2);   
        $(".text").val(res); 
        break;
        case 'x': 
        res=parseFloat(num1)*parseFloat(num2);   
        $(".text").val(res); 
        break;
        case '÷': 
        res=parseFloat(num1)/parseFloat(num2);   
        $(".text").val(res); 
        break;
        default: break;
        }
    
    })
    $(".pon").click(function(){
        var conv=$(".text").val();
        var res=parseFloat(conv)*-1;
        $(".text").val(res);
    })
});