const writeSheetRow = async (sheet_id, row) => {
  const data = {
    sheet_id: sheet_id,
    row: row,
  };

  return fetch("https://tdp-backend.herokuapp.com/writeSheetRow", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) return true;
      else return false;
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
};

export default writeSheetRow;
