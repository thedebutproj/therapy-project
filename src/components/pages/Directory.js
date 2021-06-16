import { useRef, useState, useEffect } from "react";
import "./Directory.css";
import {
  directory_LHSPatch,
  directory_RHSPatch,
  directory_Spiral,
  directory_RedLine,
  therapistImages,
  directory_SearchIcon,
} from "../../assets";
import { Link } from "react-router-dom";
import { fetchSheet } from "../../api";

const Directory = () => {
  //useRef is used because we want to preserve the data between re-renders
  const search = useRef("");

  const filterIDs = ["profession", "location", "language", "medium"];

  //Columns that are considered for Search Input
  const searchIDs = [
    "Full Name",
    "Location",
    "Languages",
    "Qualifications",
    "Type of Professional",
    "Medium",
    "Notes on Financial Assistance",
    "Affiliations",
    "Target Demographic",
    "Evaluations Administered",
    "Areas of Expertise",
  ];

  //Holds the value of filters user has selected
  const filters = useRef({
    profession: [],
    language: [],
    location: [],
    medium: [],
  });

  const [therapistData, setTherapistData] = useState([]); //Handling data that is filtered
  const [therapistDataDefault, setTherapistDataDefault] = useState([]); //Handling data that is being fetched

  const stringToArray = (str) => {
    let array = str.split(",");
    let n = array.length;
    console.log(n);
    if (n <= 3) return array.map((value) => value.trim());
    else {
      let new_arr = [];
      for (let i = 0; i < 3; i++) array[i] = array[i].trim();
      array.splice(3, n - 3);
      array = [...array, ` + ${n - 3}`];
      return array;
    }
  };

  const stringChecker = (word, array) => {
    for (let i = 0; i < array.length; i++) {
      if (word.includes(array[i])) return true;
    }
    return false;
  };

  //Check if both filters and search are empty or not
  const isFilterEmpty = () => {
    for (let key in filters.current) {
      if (!filters.current.key) return false;
    }

    if (search.current || search.current.trim()) return false;

    return true;
  };

  const handleFilters = (e) => {
    if (e.target.checked) {
      filters.current = {
        ...filters.current,
        [e.target.name]: filters.current[e.target.name].concat(e.target.value),
      };
    } else {
      filters.current = {
        ...filters.current,
        [e.target.name]: filters.current[e.target.name].filter((ele) => {
          return ele !== e.target.value;
        }),
      };
    }
  };

  const handleFiltersSubmit = (e) => {
    e.preventDefault();

    //Deleting all white-space at start and end of string
    const searchData = search.current.trim().toLowerCase();

    if (isFilterEmpty()) {
      setTherapistData(therapistDataDefault);
      return;
    }

    setTherapistData(
      therapistDataDefault.filter((ele) => {
        let flag = true;

        if (filters.current.profession.length !== 0) {
          flag = stringChecker(
            ele["Type of Professional"].toLowerCase(),
            filters.current.profession
          );

          if (!flag) return false;
        }

        if (filters.current.location.length !== 0) {
          flag = stringChecker(
            ele["Location"].toLowerCase(),
            filters.current.location
          );

          if (!flag) return false;
        }

        if (filters.current.language.length !== 0) {
          flag = stringChecker(
            ele["Languages"].toLowerCase(),
            filters.current.language
          );

          if (!flag) return false;
        }

        if (filters.current.medium.length !== 0) {
          flag = stringChecker(
            ele["Medium"].toLowerCase(),
            filters.current.medium
          );

          if (!flag) return false;
        }

        if (searchData) {
          if (
            searchIDs.some((id) => {
              //String can be undefined, we don't need to evaluate those
              if (!ele[id]) return;

              if (ele[id].toLowerCase().includes(searchData)) return true;
            })
          )
            flag = true;
          else flag = false;
        }

        return flag;
      })
    );
  };

  const handleFiltersReset = (e) => {
    window.location.reload();
  };

  const handleDropdown = (e) => {
    const filterName = e.target.getAttribute("data-filter-name");
    const element = document.getElementById(filterName);

    if (element.style.display === "block") {
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
    // const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    // fetchData(doc);

    fetchSheet().then((rows) => {
      setTherapistData(rows);
      setTherapistDataDefault(rows);
    });
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
              <Link
                to={`/directory/${row._rowNumber}`}
                key={row._rowNumber}
                className="directory-therapist-list"
              >
                <li>
                  <img
                    src={therapistImages[index % 10].default}
                    className="directory-therapist-image"
                  />
                  <div className="directory-therapist-data">
                    <p>{row["Full Name"]}</p>
                    <p>
                      {row["Experience"] <= 1
                        ? row["Experience"] + " Year"
                        : row["Experience"] + " Years"}{" "}
                      of Experience
                    </p>
                    <p className="directory-therapist-professional">
                      {stringToArray(row["Type of Professional"]).map(
                        (item, index) => {
                          if (index == 0 || index >= 3)
                            return <span>{item}</span>;
                          else if (index > 0 && index < 3) {
                            return (
                              <>
                                <span key={index}>
                                  {index ? ` \u2022 ` : ""}
                                </span>
                                <span>{item}</span>
                              </>
                            );
                          }
                        }
                      )}
                    </p>
                  </div>
                  <div className="directory-therapist-location">
                    <ion-icon name="location-sharp"></ion-icon>
                    <span>{row.Location}</span>
                  </div>
                </li>
              </Link>
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
          <img src={directory_SearchIcon} onClick={handleFiltersSubmit} />
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
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Therapist</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="Counselor"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Counselor</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="clinician"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Clinician</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="profession"
                    value="psychologist"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Psychologist</span>
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
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">New Delhi</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="mumbai"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Mumbai</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="kota"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Kota</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="location"
                    value="gurgaon"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Gurgaon</span>
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
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">English</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="hindi"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Hindi</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="marathi"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Marathi</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="language"
                    value="gujarati"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Gujarati</span>
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
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Audio</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="video"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Video</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="in-person"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">In-Person</span>
              </label>

              <label className="directory-checkbox-container">
                <span className="directory-checkbox-input">
                  <input
                    type="checkbox"
                    name="medium"
                    value="chat"
                    onChange={handleFilters}
                  ></input>
                  <span className="directory-checkbox-control"></span>
                </span>
                <span className="directory-checkbox-label">Chat</span>
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
