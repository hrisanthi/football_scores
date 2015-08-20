var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1X_PAeTUlu3EYTXTheDDrWRQ955Sg6lHHPYzkxMjpASQ/pubhtml';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
                   callback: showInfo
                    } );
});

function showInfo(data, tabletop) {
  var source   = $(".sports-template").html();
  var template = Handlebars.compile(source);
  console.log(data);

  $.each( tabletop.sheets("Football").all(), function(i, soccer) {
    var html = template(soccer);
    $("#content").append(html);
  });

}
