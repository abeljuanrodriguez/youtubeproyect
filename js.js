$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
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
		playlistId:'PLTC48guiTXNQNhf3fo1R3CpnZUNGw5Cyo',
		maxResults: 10
    };
  
    $.getJSON(url, params, showResults);
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
        html += '<div><iframe width="420" height="315" src="https://www.youtube.com/embed/' +value.id.videoId + '"' + '> </iframe><a href="http://www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v='+ value.id.videoId +'"target="_blank">link text</a></div>';
    }); 
    
    $('#search-results').html(html);
}