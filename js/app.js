console.log("script js");


// // read data
// function readData() {
//     var jdata = [];
//     // load json without caching
//     var nonCacheableURL = 'js/data.json?nocache=' + (new   
//         Date()).getTime();
//     $.getJSON(nonCacheableURL, function(json) {
//         for (var i=0; i<json.length; i++) {
//             jdata[i] = json[i];
//         }
//     });
//     return jdata;
// }

// // save data
// function saveData(jsondata) {
//     $.post('js/postjson.php', {json : JSON.stringify(jsondata)},
//         function (data, textStatus, jqXHR){}
//     );
// }

// var but = document.getElementById('loadData');
// console.log("111"); 
// but.addEventListener("click",function(event){
//  event.preventDefault();
//  console.log("clcicked");
//     readData;
//     console.log(jdata);
//     console.log("/n");
//     console.log(jdata.stringify);
// },false);


// var but2 = document.getElementById('test');

var myEl = document.getElementById('myelement');

myEl.addEventListener('click', function() {
    alert('Hello world');
}, false);

