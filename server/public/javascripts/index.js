console.log('okk')
var trainno = 12138;
$('.button').on('click',function(){
	$.ajax({
        url: "/pnr",
        type: "GET",
        success: function (response) {
            console.log(response);
            $('div').html("the response is "+response.key.data)
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });
})