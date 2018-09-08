# SDC_Harvest-GAS
GGGSC SDC HarvestGAS - Google Application Scripts being used by the GGGSC for tracking Data releases and Harvesting records from the Science Data Catalog
US Geological Survey (USGS)

Geology, Geophysics, and Geochemistry Science Center (GGGSC)

Google Application Scripts (GAS)

Contact Phil Brown (pbrown@usgs.gov)

USGS Profile: https://www.usgs.gov/staff-profiles/philip-j-brown

ORCID: https://orcid.org/0000-0002-2415-7462

GitHub: https://github.com/pbrown-usgs


## SDCcheckURL:

Google sheet functions that sets up queries of the Science Data Catalog for a list of Data Releases based upon DOI numbers as the Data Unique Identifier.  These include:

- **createSDCQueryURL**, function that creates the SDC query URL using the DOI

- **addJSON**, function that determines were to insert SDC JSON queries

- **loadJSONvalues**, function that calls JSON import from SDC 

## GetJSON:

Generic JSON Parser not being used by this project but needs to be tested more.  Functions include:

- **getJSON**

- **insertData**

- **setRowsData**

- **getObjects**

- **isCellEmpty**

- **isAlpha**

- **isDigit**

- **chunk**

- **normalizeHeader**

## ImportJSON:

  **ImportJSON by Trevor Lohrbeer (@FastFedora)

  Version:      1.1
  Project Page: http://blog.fastfedora.com/projects/import-json
  Copyright:    (c) 2012 by Trevor Lohrbeer
  License:      GNU General Public License, version 3 (GPL-3.0) 
                http://www.opensource.org/licenses/gpl-3.0.html
  ------------------------------------------------------------------------------------------------------------------------------------
  A library for importing JSON feeds into Google spreadsheets. Functions include:
     ImportJSON            For use by end users to import a JSON feed from a URL 
     ImportJSONAdvanced    For use by script developers to easily extend the functionality of this library
  Future enhancements may include:
   - Support for a real XPath like syntax similar to ImportXML for the query parameter
   - Support for OAuth authenticated APIs
  Or feel free to write these and add on to the library yourself!
  ------------------------------------------------------------------------------------------------------------------------------------
  Changelog:
  
  1.1    Added support for the noHeaders option
  1.0    Initial release
 *====================================================================================================================================*/
/**
 * Imports a JSON feed and returns the results to be inserted into a Google Spreadsheet. The JSON feed is flattened to create 
 * a two-dimensional array. The first row contains the headers, with each column header indicating the path to that data in 
 * the JSON feed. The remaining rows contain the data. 
 * 
 * By default, data gets transformed so it looks more like a normal data import. Specifically:
 *
 *   - Data from parent JSON elements gets inherited to their child elements, so rows representing child elements contain the values 
 *      of the rows representing their parent elements.
 *   - Values longer than 256 characters get truncated.
 *   - Headers have slashes converted to spaces, common prefixes removed and the resulting text converted to title case. 
 *
 * To change this behavior, pass in one of these values in the options parameter:
 *
 *    noInherit:     Don't inherit values from parent elements
 *    noTruncate:    Don't truncate values
 *    rawHeaders:    Don't prettify headers
 *    noHeaders:     Don't include headers, only the data
 *    debugLocation: Prepend each value with the row & column it belongs in
 *
 * For example:
 *
 *   =ImportJSON("http://gdata.youtube.com/feeds/api/standardfeeds/most_popular?v=2&alt=json", "/feed/entry/title,/feed/entry/content",
 *               "noInherit,noTruncate,rawHeaders")
 * 
 * @param {url} the URL to a public JSON feed
 * @param {query} a comma-separated lists of paths to import. Any path starting with one of these paths gets imported.
 * @param {options} a comma-separated list of options that alter processing of the data
 *
 * @return a two-dimensional array containing the data, with the first row containing headers
 * @customfunction
 **/
