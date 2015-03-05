var trainno = 12138;
$('.button').on('click',function(){
	$.ajax({
        url: "/pnr",
        type: "GET",
        data: '&iam=anuj&your=sachan',
        success: function (response) {
            var data = jQuery.parseJSON(response);
            $('div').html("the response is "+data)
            console.log(data);
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });
})