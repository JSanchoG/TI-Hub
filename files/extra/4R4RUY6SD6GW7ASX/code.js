$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("https://jsanchog.github.io/json/seWzbQNSRqDPBTTF/5a4RFHxPptNCJrE8.json", 
  function (data) {
    var code = '';
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      code += '<h2>' + value.service + '<br>' + value.code + '<br>' + value.valid-until + '</h2>';
    });
    // INSERTING ROWS INTO CONTAINER 
    $('#code').append(code);
  });
});
