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

  const filterIDs = ["profession", "location", "language", "medium"];

  //Holds the value of filters user has selected
  const filters = useRef({
    profession: [],
    language: [],
    location: [],
    medium: [],
  });

  const [therapistData, setTherapistData] = useState([]); //Handling data that is filtered
  const [therapistDataDefault, setTherapistDataDefault] = useState([]); //Handling data that is being fetched

  const stringChecker = (word, array) => {
    for (let i = 0; i < array.length; i++) {
      if (word.includes(array[i])) return true;
    }
    return false;
  };

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
        let flag = true;

        if (filters.current.profession.length != 0) {
          flag = stringChecker(
            ele["Type of Professional"].toLowerCase(),
            filters.current.profession
          );

          if (!flag) return false;
        }

        if (filters.current.location.length != 0) {
          flag = stringChecker(
            ele["Location"].toLowerCase(),
            filters.current.location
          );

          if (!flag) return false;
        }

        if (filters.current.language.length != 0) {
          flag = stringChecker(
            ele["Languages"].toLowerCase(),
            filters.current.language
          );

          if (!flag) return false;
        }

        if (filters.current.medium.length != 0) {
          flag = stringChecker(
            ele["Medium"].toLowerCase(),
            filters.current.medium
          );

          if (!flag) return false;
        }

        return flag;
      })
    );
    // console.log(filters.current);
  };

  const handleFiltersReset = (e) => {
    window.location.reload();
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

  const handleDropdown = (e) => {
    const filterName = e.target.getAttribute("data-filter-name");
    const element = document.getElementById(filterName);
    console.log();
    if (element.style.display == "block") {
      element.style.display = "none";
      element.parentElement.classList.remove("directory-filter-open");
    } else {
      for (let i = 0; i < filterIDs.length; i++) {
        const ele = document.getElementById(filterIDs[i]);
        ele.style.display = "none";
        ele.parentElement.classList.remove("directory-filter-open");
      }

      element.style.display = "block";
      element.parentElement.classList.add("directory-filter-open");
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
        <div className="directory-search-heading">
          <img src={directory_Spiral} className="directory-right-spiral" />
          <p>Search</p>
        </div>

        <div className="directory-input-field">
          <input
            type="search"
            placeholder="Any Keyword..."
            onChange={(e) => (search.current = e.target.value)}
          />
          <img src={directory_SearchIcon} onClick={handleSearchSubmit} />
        </div>
        <ul>
          {/* <li className="directory-input-field">
            <input
              type="search"
              placeholder="Any Keyword..."
              onChange={(e) => (search.current = e.target.value)}
            />
            <img src={directory_SearchIcon} onClick={handleSearchSubmit} />
          </li> */}
          <li className="directory-filter">
            <div
              className="directory-filter-heading"
              data-filter-name="profession"
              onClick={handleDropdown}
            >
              <p data-filter-name="profession">Profession</p>
              <ion-icon
                name="caret-down-outline"
                data-filter-name="profession"
              ></ion-icon>
            </div>

            <div className="directory-dropdown-content" id="profession">
              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="therapist"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Therapist</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="Counselor"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Counselor</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="clinician"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Clinician</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="psychologist"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Psychologist</span>
              </label>
            </div>
          </li>

          <li className="directory-filter">
            <div
              className="directory-filter-heading"
              data-filter-name="location"
              onClick={handleDropdown}
            >
              <p data-filter-name="location">Location</p>
              <ion-icon
                name="caret-down-outline"
                data-filter-name="location"
              ></ion-icon>
            </div>

            <div className="directory-dropdown-content" id="location">
              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="new delhi"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">New Delhi</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="mumbai"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Mumbai</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="kota"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Kota</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="gurgaon"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Gurgaon</span>
              </label>
            </div>
          </li>

          <li className="directory-filter">
            <div
              className="directory-filter-heading"
              data-filter-name="language"
              onClick={handleDropdown}
            >
              <p data-filter-name="language">Language</p>
              <ion-icon
                name="caret-down-outline"
                data-filter-name="language"
              ></ion-icon>
            </div>

            <div className="directory-dropdown-content" id="language">
              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="english"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">English</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="hindi"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Hindi</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="marathi"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Marathi</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="gujarati"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Gujarati</span>
              </label>
            </div>
          </li>

          <li className="directory-filter">
            <div
              className="directory-filter-heading"
              data-filter-name="medium"
              onClick={handleDropdown}
            >
              <p data-filter-name="medium">Medium</p>
              <ion-icon
                name="caret-down-outline"
                data-filter-name="medium"
              ></ion-icon>
            </div>

            <div className="directory-dropdown-content" id="medium">
              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="audio"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Audio</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="video"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Video</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="in-person"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">In-Person</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="chat"
                    onChange={handleFilters}
                  ></input>
                  <span class="directory-checkbox-control"></span>
                </span>
                <span class="directory-checkbox-label">Chat</span>
              </label>
            </div>
          </li>

          <div className="directory-filter-button">
            <input
              className="directory-filter-submit"
              type="submit"
              value="Go"
              onClick={handleFiltersSubmit}
            ></input>
            <input
              className="directory-filter-reset"
              type="submit"
              value="Reset"
              onClick={handleFiltersReset}
            ></input>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Directory;
