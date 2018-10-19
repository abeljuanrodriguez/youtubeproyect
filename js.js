$(document).ready(function () {
    $( "#buscar" ).click(function(event) {
		event.preventDefault();
		var busqueda = $('#query').val();
		getRequest(busqueda);
	});
	
	$( "#buscarLista" ).click(function(event) {
		event.preventDefault();
		var busqueda = $('#query').val();
		getRequestList(busqueda);
	});
});

function getRequest(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyDyM-6eVucAnkCzkbPysS-BxgCMhuCzhBM',
		maxResults: 10,
        q: searchTerm
    };
  
    $.getJSON(url, params, showResults);
}

function getRequestList(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    var params = {
        part: 'snippet',
        key: 'AIzaSyDyM-6eVucAnkCzkbPysS-BxgCMhuCzhBM',
		playlistId:searchTerm,
		maxResults: 10
    };
  
    $.getJSON(url, params, downloadResults);
}

function downloadResults(results){
	var entries = results.items;
    
    $.each(entries, function (index, value) {
		window.open('http://www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=' + value.snippet.resourceId.videoId);
    }); 
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
        html += '<div><iframe width="550" height="300" src="https://www.youtube.com/embed/' +value.id.videoId + '"' + '> </iframe><a href="http://www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v='+ value.id.videoId +'"target="_blank">link text</a></div>';
    }); 
    
    $('#search-results').html(html);
}