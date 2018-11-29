$("#giraffe").hover(
    function () {
      $("#hi").show();
    }, 
    function () {
      $("#hi").hide();
    }
  );


function left() {
    $("#giraffe-move").animate({left: "-=500"}, 2000, "swing", left);
}
function right() {
    $("#giraffe-move").animate({left: "+=500"}, 2000, "swing", right);
}


$(document).ready(function() {
    moveGiraffe();
    function moveGiraffe() {
        var times = 0;
        while (times<5) {
            left(); 
            times += 1;
            }
        while (times > 0) {
            right();
            times -=1;
        } 
        moveGiraffe();   
        }

        $("#first").click(function(){
            $("#flower2").hide();
            $("#flower3").hide();
            $("#t3").hide();
            $("#t4-1").hide();
            $("#t4-2").hide();
            $("#t5").hide();
            $("#t6-3").hide();
            $("#t6-4").hide();
            $("#flower-1").show();
            $("#t1").show();
            $("#t2").show();
        })

        $("#second").click(function(){
            $("#t1").hide();
            $("#t2").hide();
            $("#flower-1").hide();
            $("#flower3").hide();
            $("#t5").hide();
            $("#t6-3").hide();
            $("#t6-4").hide();
            $("#flower2").show();
            $("#t3").show();
            $("#t4-1").show();
            $("#t4-2").show();
        })

        $("#third").click(function(){
            $("#t1").hide();
            $("#t2").hide();
            $("#flower-1").hide();
            $("#flower2").hide();
            $("#t3").hide();
            $("#t4-1").hide();
            $("#t4-2").hide();
            $("#flower3").show();
            $("#t5").show();
            $("#t6-3").show();
            $("#t6-4").show();
        })

        $("#one").click(function(){
            $("#a2").hide();
            $("#a3").hide();
            $("#a1").show();
        })

        $("#two").click(function(){
            $("#a1").hide();
            $("#a3").hide();
            $("#a2").show();
        })

        $("#three").click(function(){
            $("#a1").hide();
            $("#a2").hide();
            $("#a3").show();
        })

    }
);