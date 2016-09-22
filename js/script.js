$(function() {

    $('#search').on('click', function(){
        var searchTerm = $('#searchTerm').val();

        var url = "https://ru.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        $.ajax({
            url: url,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function(data, status, jqXHR){
                $("#output").html();
                for(var i = data[1].length - 1; i >= 0; --i) {
                    $('#output').prepend("<div class='well'><div><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }
            }
        })
        .done(function(){
            console.log("success");
        })
        .fail(function(){
            console.log("error");
        })
        .always(function(){
            console.log("complete");
        })
    });

});

