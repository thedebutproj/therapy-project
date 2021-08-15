import { GoogleSpreadsheet } from "google-spreadsheet";
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const writeSheetRow = async (sheet_id, row) => {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
  const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, "\n");

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsById[sheet_id];

    await sheet.addRow(row);

    // Success message
    return true;
  } catch (e) {
    console.error("Error : ", e);
    return false;
  }
};

export default writeSheetRow;
