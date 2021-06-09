import { GoogleSpreadsheet } from "google-spreadsheet";

const fetchSheet = async () => {
  const API_KEY = "AIzaSyCXAsyMDl9PSPSD_VXRO0J - JUSiYoeD - io";
  const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    await doc.useApiKey(API_KEY);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    return rows;
  } catch (e) {
    console.error("Error : ", e);
  }
};

export default fetchSheet;
