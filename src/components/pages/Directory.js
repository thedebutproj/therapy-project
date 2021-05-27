import { useRef, useState, useEffect } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import "./Directory.css";
import {
  directory_LHSPatch,
  directory_RHSPatch,
  directory_Spiral,
  directory_RedLine,
  therapistImages,
  directory_SearchIcon,
} from "../../assets";

const Directory = () => {
  const SPREADSHEET_ID = "1hMoXkynBu22BWqfFGcfCRQfUkd65HB45lBflNIsfzto";

  //useRef is used because we want to preserve the data between re-renders
  const search = useRef("");

  const filters = useRef({
    profession: [],
    language: [],
    location: [],
    medium: [],
  });

  const [therapistData, setTherapistData] = useState([]); //Handling data that is filtered
  const [therapistDataDefault, setTherapistDataDefault] = useState([]); //Handling data that is being fetched

  const fetchData = async (doc) => {
    try {
      await doc.useApiKey("AIzaSyCXAsyMDl9PSPSD_VXRO0J - JUSiYoeD - io");
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();
      //   console.log(rows);

      setTherapistData(rows);
      setTherapistDataDefault(rows);
    } catch (e) {
      console.error("Error : ", e);
    }
  };

  const handleFilters = (e) => {
    if (e.target.checked) {
      //   console.log(filters.current);
      filters.current = {
        ...filters.current,
        [e.target.name]: filters.current[e.target.name].concat(e.target.value),
      };
    } else {
      filters.current = {
        ...filters.current,
        [e.target.name]: filters.current[e.target.name].filter((ele) => {
          //console.log(e.target.value);
          return ele != e.target.value;
        }),
      };
      //console.log(filters.current[e.target.name]);
    }
  };

  const handleFiltersSubmit = (e) => {
    e.preventDefault();

    setTherapistData(
      therapistDataDefault.filter((ele) => {
        if (filters.current.location.length == 0) return true;

        return filters.current.location.includes(ele["Location"].toLowerCase());
      })
    );
    // console.log(filters.current);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setTherapistData(
      therapistDataDefault.filter((ele) => {
        return ele["Full Name"]
          .toLowerCase()
          .includes(search.current.toLowerCase());
      })
    );
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

        <ul>
          {therapistData.map((row, index) => {
            return (
              <li>
                <img
                  src={therapistImages[index % 10].default}
                  className="directory-therapist-image"
                />
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
          })}
        </ul>
      </div>
      <div className="directory-right">
        <div className="directory-right-heading">
          <img src={directory_Spiral} />
          <h2>Search</h2>
        </div>
        <ul>
          <li className="directory-input-field">
            <input
              type="search"
              placeholder="Any Keyword..."
              onChange={(e) => (search.current = e.target.value)}
            />
            <img src={directory_SearchIcon} onClick={handleSearchSubmit} />
          </li>

          <li className="directory-fliters">
            <h2>Location</h2>
            <input
              type="checkbox"
              name="location"
              value="new delhi"
              onChange={handleFilters}
            ></input>
            <label>New Delhi</label>
            <br />
            <input
              type="checkbox"
              name="location"
              value="mumbai"
              onChange={handleFilters}
            ></input>
            <label>Mumbai</label>
            <br />
            <input
              type="checkbox"
              name="location"
              value="kota"
              onChange={handleFilters}
            ></input>
            <label>Kota</label>
            <br />
            <input
              type="checkbox"
              name="location"
              value="gurgaon"
              onChange={handleFilters}
            ></input>
            <label>Gurgaon</label>
            <br />
            <input
              type="checkbox"
              name="location"
              value="faridabad"
              onChange={handleFilters}
            ></input>
            <label>Faridabad</label>
            <br />

            <label className="container">
              Exp
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </li>
          <div>
            <input
              className="directory-filter-submit"
              type="submit"
              value="Go"
              onClick={handleFiltersSubmit}
            ></input>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Directory;
