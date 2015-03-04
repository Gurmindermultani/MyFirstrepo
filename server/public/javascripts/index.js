console.log('okk')
var trainno = 12138;
$('.button').on('click',function(){
	$.ajax({
        url: "/pnr",
        type: "GET",
        success: function (response) {
            console.log(response);
            //console.log(typeof response);
            //var data= JSON.parse(response);
            //console.log(data);
            $('div').html("the response is "+response)
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });
})