import { GoogleSpreadsheet } from "google-spreadsheet";

const fetchSheetRow = async (id) => {
  const API_KEY = "AIzaSyCXAsyMDl9PSPSD_VXRO0J - JUSiYoeD - io";
  const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useApiKey(API_KEY);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
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
