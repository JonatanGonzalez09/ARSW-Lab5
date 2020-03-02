/* crear un Módulo JavaScript */

var app = (function () {

  var getBlueprintsByAuthor = function (author) {
      return apimock.getBlueprintsByAuthor(author, function (err, data) {
          if (err) {
              return new Error("Error obteniendo los blueprints:" + err)
          }
          console.log("lista: "+apimock.getBlueprintsByAuthor);
          console.log("data: "+data.length);
          console.log("data: "+data[0].name);
          console.log("data: "+data[1].name);
          console.log("author: " +author);

          $('#tablaAuthor').html(author + "'s blueprints");
          var table = $('#bluePrints')
          table.empty();
          table.append(`
          <thead>
              <tr>
                  <th>Blueprint name</th>
                  <th>Number of points</th>
                  <th>Open</th>
              </tr>
          </thead>
          `)
          var totalPoints = 0;
          for(var i = 0; i < data.length; i++){
              table.append(`
              <tr>
                  <td>` + data[i].name + `</td>
                  <td>` + data[i].points.length + `</td>
                  <td>
                      <button type="button" class="btn btn-info">Open</button>
                      </button>
                  </td>
              </tr>
              `)
              totalPoints = totalPoints + data[i].points.length;
          }
          table.append('</tbody>');
          $('#puntosTotales').html('Total user points: ' + totalPoints);
          
      });
  }

  return {
    getBlueprintsByAuthor: getBlueprintsByAuthor,
  }

})();