export const fetchData = async(doc) => {
    try {
        await doc.useApiKey("AIzaSyCXAsyMDl9PSPSD_VXRO0J - JUSiYoeD - io");
        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        console.log(rows[0]["Contact - Email ID"]);

        return rows;

    } catch (e) {
        console.error("Error : ", e);
    }
};