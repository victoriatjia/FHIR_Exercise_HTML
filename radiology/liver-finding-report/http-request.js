var ret;

//@desc： Query data from server
function HTTPGetData(urlStr) {
    var xhttp = new XMLHttpRequest();   
	xhttp.open("GET", urlStr, true);
    xhttp.onreadystatechange = function() 
	{
        if (xhttp.readyState === 4) {
            ret = xhttp.responseText;
			callBack(ret);
        }
    }
    xhttp.send();
}

//@desc： Send data to server
function HTTPPostData(urlStr, dataStr) {
    var xhttp = new XMLHttpRequest();
	xhttp.open("POST", urlStr, true);
    xhttp.setRequestHeader("Content-type", "application/json+fhir");
    xhttp.onreadystatechange = function()
	{
        if (xhttp.readyState === 4)
		{
            ret = xhttp.responseText;
			alert(ret);
        }
    }
    xhttp.send(dataStr);
}