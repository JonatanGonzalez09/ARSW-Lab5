/* En este agregue más planos (con más puntos) a los autores 'quemados' en el código. */

var apimock = (function () {

  var mockdata = [];

  mockdata["JhonConnor"] = [
      {
          author: "JhonConnor",
          name: "house",
          points: [
              {
                  x: 100,
                  y: 150
              },
              {
                  x: 220,
                  y: 145
              },
              {
                  x: 245,
                  y: 200
              },
              {
                  x: 50,
                  y: 50
              },
              {
                  x: 90,
                  y: 25
              },
              {
                  x: 10,
                  y: 70
              },
              {
                x: 20,
                y: 30
              },
              {
                x: 35,
                y: 75
              },
              {
                x: 250,
                y: 70
              },
              {
                x: 110,
                y: 185
              }
          ]
      },
      {
          author: "JhonConnor",
          name: "gear",
          points: [
              {
                  x: 100,
                  y: 150
              },
              {
                  x: 200,
                  y: 250
              }
          ]
      }
  ]


  return {
      getBlueprintsByAuthor: function(author, callback) {
          callback(null, mockdata[author]);
      },
  }

})();