fetch("https://sheets.googleapis.com/v4/spreadsheets/1LYI1K4KCfjZburyhLcEDQ5DHv32HEtShJQbFiMEIdos/values/Data!A1:C6?key=AIzaSyD93uu9Us0m2ULwaBBp4bSuKTE6H7TpsFs").then(
    response => {
      return response.json();
    }
).then(
    json => {
      console.log(json);
      let html = "<ul>";

      json.values.forEach( row => {
            html += `<li>${row[0]}, ${row[1]}, ${row[2]},${row[3]}</li>`;
          }
      );

      html += "</ul>";
      document.querySelector("#result").innerHTML = html;
    }
);