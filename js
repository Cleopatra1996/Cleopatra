function uploadFile(form) { 
  const formData = new FormData(form); 
  var oOutput = document.getElementById("static_file_response") 
  var oReq = new XMLHttpRequest(); 
  oReq.open("POST", "http://localhost:5000", true); 
  oReq.onload = function(oEvent) { 
    if (oReq.status == 200) { 
      oOutput.innerHTML = "Uploaded!"; 
      let test = JSON.parse(oReq.responseText); 

      let table = document.getElementById('t_body');
      //svuoto la tabella per evitare duplicati
      table.innerHTML = '';

      $("#result_table").show() 
      test['result'].forEach(function(testEntry) { 
        let citta = document.createTextNode(testEntry['Comune']);
        let cittaCercata = document.createTextNode(testEntry['Comune_cercato']);
        let denominazione = document.createTextNode(testEntry['Denominazione']);
        let denominazioneCercata= document.createTextNode(testEntry['Denominazione_cercata']);
        let titolo= document.createTextNode(testEntry['Titolo']);
        let titoloCercato = document.createTextNode(testEntry['Titolo_cercato']);
        let data = document.createTextNode(testEntry['Data']);
        let dataCercata = document.createTextNode(testEntry['Data_cercata']);
        let capienza = document.createTextNode(testEntry['Capienza']);
        let capienzaCercata =  document.createTextNode(testEntry['Capienza_cercata']);
        let affluenza = document.createTextNode(testEntry['Affluenza_Totale']);
        let affluenzaCercata = document.createTextNode(testEntry['Affluenza_Totale_cercata']);
        let incasso = document.createTextNode(testEntry['Incasso_Totale']);
        let incassoCercato = document.createTextNode(testEntry['Incasso_Totale_cercato']);

        let trAdd = document.createElement('tr');
        let tdCitta = document.createElement('td');
        tdCitta.appendChild(citta);
        let tdCittaCercata = document.createElement('td');
        tdCittaCercata.appendChild(cittaCercata);
        let tdDenominazione = document.createElement('td');
        tdDenominazione.appendChild(denominazione);
        let tdDenominazioneCercata = document.createElement('td');
        tdDenominazioneCercata.appendChild(denominazioneCercata);
        let tdTitolo = document.createElement('td');
        tdTitolo.appendChild(titolo);
        let tdTitoloCercato = document.createElement('td');
        tdTitoloCercato.appendChild(titoloCercato);
        let tdData = document.createElement('td');
        tdData.appendChild(data);
        let tdDataCercata = document.createElement('td');
        tdDataCercata.appendChild(dataCercata);
        let tdCapienza = document.createElement('td');
        tdCapienza.appendChild(capienza);
        let tdCapienzaCercata = document.createElement('td');
        tdCapienzaCercata.appendChild(capienzaCercata);
        let tdAffluenza = document.createElement('td');
tdAffluenza.appendChild(affluenza);
let tdAffluenzaCercata = document.createElement('td');
tdAffluenzaCercata.appendChild(affluenzaCercata);
let tdIncasso = document.createElement('td');
tdIncasso.appendChild(incasso);
let tdIncassoCercato = document.createElement('td');
tdIncassoCercato.appendChild(incassoCercato);

let tr = document.createElement('tr');
tr.appendChild(tdCitta);
tr.appendChild(tdCittaCercata);
tr.appendChild(tdDenominazione);
tr.appendChild(tdDenominazioneCercata);
tr.appendChild(tdTitolo);
tr.appendChild(tdTitoloCercato);
tr.appendChild(tdData);
tr.appendChild(tdDataCercata);
tr.appendChild(tdCapienza);
tr.appendChild(tdCapienzaCercata);
tr.appendChild(tdAffluenza);
tr.appendChild(tdAffluenzaCercata);
tr.appendChild(tdIncasso);
tr.appendChild(tdIncassoCercato);
table.appendChild(tr);



  }); 

     } else { 
       oOutput.innerHTML = "Error occurred when trying to upload your file.<br />"; 
     } 
     }; 
 oOutput.innerHTML = "Loading in progress....Wait !!! "; 
 console.log("Loading in progress....Wait !!! ") 
 oReq.send(formData); 
}
