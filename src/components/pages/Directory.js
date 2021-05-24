import { useState, useEffect } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import "./Directory.css";
import {
  directory_LHSPatch,
  directory_RHSPatch,
  directory_Spiral,
  directory_RedLine,
  directory_Dp01,
} from "../../assets";

const Directory = () => {
  const [therapistData, setTherapistData] = useState([]);
  const [therapistDataDefault, setTherapistDataDefault] = useState([]);

  const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";

  const fetchData = async (doc) => {
    try {
      await doc.useApiKey("AIzaSyCXAsyMDl9PSPSD_VXRO0J - JUSiYoeD - io");
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();

      const new_rows = rows.map((row) => {
        return (
          <li>
            <img src={directory_Dp01} className="directory-therapist-image" />
            <div className="directory-therapist-data">
              <p>{row["Full Name"]}</p>
              <p>{row["Experience"]} Years of Experience</p>
              <p>{row["Type of Professional"]}</p>
            </div>
            <div className="directory-therapist-location">
              <ion-icon name="location-sharp"></ion-icon>
              <span>{row.Location}</span>
            </div>
          </li>
        );
      });

      setTherapistData(new_rows);
      setTherapistDataDefault(new_rows);
    } catch (e) {
      console.error("Error : ", e);
    }
  };

  useEffect(() => {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    fetchData(doc);
  }, []);

  return (
    <div className="directory-container">
      <img className="lhsPatch" src={directory_LHSPatch} />

      <img className="rhsPatch" src={directory_RHSPatch} />

      <div className="directory-left">
        <img src={directory_RedLine} className="directory-redLine" />
        <div className="directory-heading">
          <img src={directory_Spiral} />
          <h1>THE DIRECTORY</h1>
        </div>
        <ul>{therapistData}</ul>
      </div>
      <div className="directory-right">
        <h2>Search</h2>
      </div>
    </div>
  );
};

export default Directory;
