function main(){
   console.log(game_name, streams_number);
$.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams/?game=' + game_name + '&limit=' + streams_number,
      headers: {
         'Client-ID': '352ei7jf3jq2mu6jvvovjy4qwv6huc'
      },
      success: function(data) {
         console.log(data);
         $("#table").append("<table>");
         for(var i = 0;i<data.streams.length;i++){
               $("#table").append("<tr><td class='img'><a href='" + data.streams[i].channel.url + "'><img src='" + data.streams[i].preview.small + "'></img></a><td><td class='title'>" + data.streams[i].channel.status + "</td><td class='creator'>" + data.streams[i].channel.display_name + "</td><td class='views'>" + data.streams[i].viewers + "</td></tr>");
         }
         $("#table").append("</table>");
          
         
      



      ///////////////////////////
      //make every "a" useable///
      ///////////////////////////
            $('body').on('click', 'a', function(){
               chrome.tabs.create({url: $(this).attr('href')});
               return false;
            });

      ///////
      //end//
      ///////
      
   }
   });
}

var game_name = "";
var streams_number = 0;

chrome.storage.sync.get({
    game: 'Overwatch',
    streams_number: 4
  }, function(items) {
    game_name = items.game;
    streams_number = items.streams_number;
    main();
  });


