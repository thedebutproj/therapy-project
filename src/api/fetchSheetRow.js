import { GoogleSpreadsheet } from "google-spreadsheet";
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const fetchSheetRow = async (sheet_index, id) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useApiKey(API_KEY);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[sheet_index];
    const rows = await sheet.getRows();

    return rows.filter((row) => {
      //We are getting id as a string but rowNumber is a number that's why we have to convert
      return row._rowNumber.toString() === id;
    })[0];
  } catch (e) {
    console.error("Error : ", e);
  }
};

export default fetchSheetRow;
