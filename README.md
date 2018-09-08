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
