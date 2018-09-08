function createSDCQueryURL() {
/* contact Phil Brown pbrown@usgs.gov */
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GGGSCDataReleases');//Change the sheet name as appropriate
var activeCell = sheet.getActiveCell(); //Detect the ActiveCell
var row = activeCell.getRow(); 

for (var i = 2; i < 96; i++) {
   var doiURL = sheet.getRange(i, 6).getValue();
   sheet.getRange(i, 14).setValue('https://usgs.ornl.gov/sdcsolr/core1/select?fq=web_url:"'+ doiURL + '"&q=*:*&start=0&rows=10&wt=json');
                             }
}

function addJSON () {
/* contact Phil Brown pbrown@usgs.gov */ 
 //Run this function to harvest data from SDC
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SDC_Records');
  sheet2.clear();//clear worksheet before reloading data
  Logger.log('Sheet is cleared for newdata');
  sheet2.getRange(1, 1).setValue('Last SDC Report Harvest Performed: ' + new Date());
  sheet2.getRange(1, 1).setFontStyle('italic');
  sheet2.getRange(1, 1).setFontWeight('bold')
  for (var i = 2; i < 96; i++) {
    loadJSONvalues (i);
    Utilities.sleep(3000);
  }

  SpreadsheetApp.flush();  
  
}

function loadJSONvalues (i) {//i + 1 is the row where the values are printed
/* contact Phil Brown pbrown@usgs.gov */
var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('GGGSCDataReleases');//Change the sheet name as appropriate
var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SDC_Records');//Change the sheet name as appropriate
var lastRowData = sheet2.getDataRange().getValues();
var lastRow = lastRowData.length;  
	
Logger.log('Last row is: ' + lastRow);
var citation = sheet1.getRange(i, 11).getValue();
var querySDCurl = String(sheet1.getRange(i, 14).getValue());
var res = querySDCurl.replace('"', "%22");
var res2 = res.replace('"', "%22");
sheet2.getRange(lastRow + 1, 1).setValue(citation);
sheet2.getRange(lastRow + 1, 1, 1, 51).setBackground('#FFFF00');
Logger.log('URL is: ' + querySDCurl);
sheet2.getRange(lastRow + 2, 1).setValue('=ImportJSON("' + res2 + '","","")' );



}


function testSetBackground (){
var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SDC_Records');//Change the sheet name as appropriate
  sheet2.getRange(1,1).setValue('Test');
  sheet2.getRange(1,1,1,51).setBackground('#FFFF00');
}

function testFlush(){SpreadsheetApp.flush();}
