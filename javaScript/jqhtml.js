

$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: "+ $("#test").text());
    });

    $("#btn2").click(function(){
        alert("Html : "+ $("#test").html());
    });

    $("#btn3").click(function(){
        $("#p1").text("Hello world!");
    });

    $("#btn4").click(function(){
        $("#inpt").val("Hemant Gaur");
    });

    $("#btn5").click(function(){
        $("#div1").remove();

    });

    $("#btn6").click(function(){
        $("#div1").empty();
    });

    $("#btn7").click(function(){
    $("#h1, #h2, #p4, #p5").addClass("blue");
    $("#div2").addClass("important");
    });

    $("#btn8").click(function(){
    $("#p6, #p7, #p8").css({"background-color": "yellow", "font-size": "200%"});
    });

});
function appendText(){
    var text1 = "Text.";
    var text2 = $("<p></p>").text("Text.");
    var text3 = "Text."
    $("body").append(text1,text2,text3);
}