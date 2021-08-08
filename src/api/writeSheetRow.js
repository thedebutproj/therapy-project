import { GoogleSpreadsheet } from "google-spreadsheet";

const writeSheetRow = async (sheet_id, row) => {
  const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";
  const CLIENT_EMAIL =
    "the-therapy-project@the-debut-project.iam.gserviceaccount.com";
  const PRIVATE_KEY =
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeWQBfGSaOabk0\njVI7hAT/efUhJdXLv+VeGy52OwsIryEqGqQn4OImTUJNcPk7YTh1SqChHg6Fa1/m\nvMDki5BKrfyEOX6n8WiRUKctBysHM1bRMYtFmmXJZqtcIU+CUe/PnDGM0746g2IE\nURQ+eKT9P+N6WMz3SCBQTogtRME3ATK+2oeoqoeJfdPnMARa72tAe0YU4Dz44QQJ\nJGUZKCfOxccU5CZWM8d+UI4KySkWZgA7EmgV53tAUCyNnH0tRot8KY0+9U9mCYiN\nTE9XEZz0D3RomS0d73Z7icnyxJz/T3DLAX3nnslKgcKqsZFY+Gj4pdTpdGTBtoqw\n55oUHHt3AgMBAAECggEAAZb/K/VCr9db5q0skDBpJG+DCIwqs1r/4IwBUWqSV8n6\nWUPfNg9J9fx8l+50ciYtvO+84SE+IBTN57EpdqH4FufcSy+Ql/sSg7L9mrQhuHbJ\nflwy+8XrE7SWL9ydwb802y7ESJevp0K+bzCpNV9cuLY1gHr3w9vThzrinyG7luPG\nJU2ECM/TKvoI1aLaC2gri29ivUtNCRGVfyOkUd6DMEddkv+8KhtdtfdHPmXbTpib\nXhgqwALaszzhiofmsws0CKJYN+TXh8l6dnd++VhsXKtMaHntgHDJrpV7y5om2Vp9\n/APrajCOxh2x5uT8Pl7sAwGzwT+/iDFoav0uYrynkQKBgQDOp/ANeP4vxtnEZrS7\n4VXkNrVy/HYG1wNa6gqVbff19viDd6VQel4H9rAe5CucJ3bRvoSZDvjzO+bqiYT/\nZn5JK/hSAKbgbtD9t9fbThHTHU8WMzAHgOo9/eItEgOuASbfpWLxi4YDOmG2qPRP\nA//fpxPsDaEA2TWoMQqWOFhXGwKBgQDEKCqKZjIvw7qzCMYbPmEiCWkpM6IbiFYM\ncFwpV5spwQVYe0bxJ36rjwXljOYHsw2Kzzcb/b+RUZuIRnLUjsu6/AI2e11xDiv+\ny1r+Nl1GsMGBT7xp8bjq7HjHQHuBeJQ0WpGKwtGXHSu2L02Luawh22hfilEkICl/\nhj6F1eom1QKBgESVa4+tFf7ZKbCKvXSVBiJlHbb5nloKxaxIfBa3llFlE3jeHlkl\nI0vVTQITi32Zg098wRji5TAkMzCnTyJL66FxHEpquPdHD8kEWHkJ4dSEp5igiFIV\nMKg+N+/pSJtY+oPCqaGsQl+T4pXyYJJQq3yYQH5Yz5QugiY9kFvmezr9AoGActgZ\nYAJJa9Gqo1uFsTmqYOUlnqvOQ1RlHM9EBih2fdG2sYErndFDxmnsR+NgYi2gxh5f\n45GC8S/YYcbtQCmCei1FlmRP5vsnIvwogCGQJu0hvfXTGCwf2dstM2s7ZCgWjThh\ncd5yG4lGqFm1ixLgBsqQpy8yJnZ2FWWhgXYmqykCgYEAv0WRiKTHIzCezTFWBo8G\n059bz49WRyPPINxrOBgyijHVRoO27/pvimAhQvh4YcPHSCzsUqNq+FoFsMjRyddQ\nFvT13MmRjUhI6uMIzk84bcgeEWYOzvNrl1p3a3lKy/VEoch0FGkkctt4+eTWqp5m\nghQapdiTAZpGgXteewhvTc8=\n-----END PRIVATE KEY-----\n";

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
