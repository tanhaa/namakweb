
//change this to the rootURL of your salt-api
var rootURL = "/m";

$(function(){
    $("#test").click(function()
    {
        getTest();
        return false
    });
});

$(function(){
    $("#test2").click(function()
    {
        getAuthTest2();
        return false
    });
});

function getTest(){
    url = rootURL;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: "json", //response datatype
        success: renderResponse
    });
}

function renderResponse(data){
    result = JSON.stringify(data, null, 2);
    $('#response').html('<pre>'+result+'</pre>');
    $("#myModal").modal('show');
}

function renderResponse2(data){
    result = JSON.stringify(data, null, 2);
    console.log(JSON.parse(result));
    result2 = DumpObjectIndented(data, " ");
    $('#response').html('<pre>'+result+'</pre>');
    $("#myModal").modal('show');
}

function getAuthTest2(){
    url = rootURL + "/run";
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: url,
        dataType: "json",
        data: authTestFormToJSON(),
        beforeSend: function(){$("#animModal").modal('show')},
        complete: function(){$("#animModal").modal('hide')},
        success: function(data, textStatus, jqXHR){
            renderResponse2(data);
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('something went wrong!' + textStatus);
            console.log(errorThrown);
        }
    });
}

function authTestFormToJSON() {
    var arr = {};
    arr["eauth"] = $('#eauth').val();
    arr["username"] = $('#username').val();
    arr["password"] = $('#password').val();
    arr["client"] = "local";
    arr["tgt"] = $('#tgt').val();
    arr["fun"] = $('#fun').val();

    var expr_form = $('#expr_form').val();

    if(expr_form !== "minion"){
        arr["expr_form"] = expr_form;
    }

    var arg = $('#arg').val().split(",");
    if(arg == null || arg==""){
        //dont do anything
    } else {
        arr["arg"] = arg;
    }

    jsonret = JSON.stringify(arr);
    return jsonret;
}

