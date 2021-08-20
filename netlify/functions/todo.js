// const axios = require("axios");

// exports.handler = async function (event, context) {
//   console.log(event);
//   console.log(context);
//   try {
//     const { id } = event.queryStringParameters;
//     const response = await axios.get(`${process.env.TODO_BASE_URL}/${id}`);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ title: response.data.title }),
//     };
//   } catch (err) {
//     return {
//       statusCode: 404,
//       body: err.toString(),
//     };
//   }
// };

const { GoogleSpreadsheet } = require("google-spreadsheet");
// import path from "path";
// require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

exports.handler = async (event, context) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;

  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

  try {
    const { sheet_index } = event.queryStringParameters;
    await doc.useApiKey(API_KEY);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[sheet_index];
    const rows = await sheet.getRows();
    return {
      statusCode: 200,
      body: JSON.stringify({ rows: rows }),
    };
    // return rows;
  } catch (e) {
    return {
      statusCode: 404,
      body: JSON.stringify({ rows: e }),
    };
  }
};
