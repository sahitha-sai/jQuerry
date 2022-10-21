$(document).ready(function(){
    console.log("hello ");
    $("#add").click(function(){
        let invalue=$("#input1").val();
        $(".h1").addClass(invalue);
    });
    $("#remove").click(function(){
        let invalue=$("#input1").val();
        $("h1").removeClass(invalue);
    })

})
