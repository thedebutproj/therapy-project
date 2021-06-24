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

  // All filter options that would be available to user in a single filter field
  const filtersOptions = useRef({
    profession: [],
    location: [],
    language: [],
    medium: [],
  });

  const [therapistData, setTherapistData] = useState([]); //Handling data that is filtered
  const [therapistDataDefault, setTherapistDataDefault] = useState([]); //Handling data that is being fetched

  // Specially made for directory-therapist-professional
  // If flag = false then it is used by some other function for just converting string to array
  const stringToArray = (str, flag) => {
    let array = str.split(",");
    let n = array.length;

    if (!flag) return array.map((value) => value.trim());

    if (n <= 3) return array.map((value) => value.trim());
    else {
      for (let i = 0; i < 3; i++) array[i] = array[i].trim();
      array.splice(3, n - 3);
      array = [...array, ` + ${n - 3}`];
      return array;
    }
  };

  // For checking if a substring of the word contains any of the values in the array
  const stringChecker = (word, array) => {
    for (let i = 0; i < array.length; i++) {
      if (word.includes(array[i].toLowerCase())) return true;
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
    console.log(e.target);
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
    // Data of therapist is on first sheet therefore 0 is passed as an argument
    fetchSheet(0).then((rows) => {
      let professionSet = new Set();
      let locationSet = new Set();
      let languageSet = new Set();
      let mediumSet = new Set();

      rows.forEach((row) => {
        let arr = stringToArray(row["Type of Professional"], false);
        arr.forEach((value) => professionSet.add(value));

        arr = stringToArray(row["Location"], false);
        arr.forEach((value) => locationSet.add(value));

        arr = stringToArray(row["Languages"], false);
        arr.forEach((value) => languageSet.add(value));

        arr = stringToArray(row["Medium"], false);
        arr.forEach((value) => mediumSet.add(value));
      });

      filtersOptions.current = {
        profession: Array.from(professionSet),
        location: Array.from(locationSet),
        language: Array.from(languageSet),
        medium: Array.from(mediumSet),
      };

      // We are using setTherapist after setting filtersOption so in the re-rendering all the new data in filtersOption is reflected in our component

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
                      {stringToArray(row["Type of Professional"], true).map(
                        (item, index) => {
                          if (index == 0 || index >= 3)
                            return <span key={index}>{item}</span>;
                          else if (index > 0 && index < 3) {
                            return (
                              <span key={index}>
                                <span>{index ? ` \u2022 ` : ""}</span>
                                <span>{item}</span>
                              </span>
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
              {filtersOptions.current.profession ? (
                filtersOptions.current.profession.map((value, index) => {
                  return (
                    <label className="directory-checkbox-container" key={index}>
                      <span className="directory-checkbox-input">
                        <input
                          type="checkbox"
                          name="profession"
                          value={value}
                          onChange={handleFilters}
                        ></input>
                        <span className="directory-checkbox-control"></span>
                      </span>
                      <span className="directory-checkbox-label">{value}</span>
                    </label>
                  );
                })
              ) : (
                <p>Loading</p>
              )}
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
              {filtersOptions.current.location ? (
                filtersOptions.current.location.map((value, index) => {
                  return (
                    <label className="directory-checkbox-container" key={index}>
                      <span className="directory-checkbox-input">
                        <input
                          type="checkbox"
                          name="location"
                          value={value}
                          onChange={handleFilters}
                        ></input>
                        <span className="directory-checkbox-control"></span>
                      </span>
                      <span className="directory-checkbox-label">{value}</span>
                    </label>
                  );
                })
              ) : (
                <p>Loading</p>
              )}
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
              {filtersOptions.current.language ? (
                filtersOptions.current.language.map((value, index) => {
                  return (
                    <label className="directory-checkbox-container" key={index}>
                      <span className="directory-checkbox-input">
                        <input
                          type="checkbox"
                          name="language"
                          value={value}
                          onChange={handleFilters}
                        ></input>
                        <span className="directory-checkbox-control"></span>
                      </span>
                      <span className="directory-checkbox-label">{value}</span>
                    </label>
                  );
                })
              ) : (
                <p>Loading</p>
              )}
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
              {filtersOptions.current.medium ? (
                filtersOptions.current.medium.map((value, index) => {
                  return (
                    <label className="directory-checkbox-container" key={index}>
                      <span className="directory-checkbox-input">
                        <input
                          type="checkbox"
                          name="medium"
                          value={value}
                          onChange={handleFilters}
                        ></input>
                        <span className="directory-checkbox-control"></span>
                      </span>
                      <span className="directory-checkbox-label">{value}</span>
                    </label>
                  );
                })
              ) : (
                <p>Loading</p>
              )}
            </div>
          </li>

          <div className="directory-filter-button">
            <input
              className="directory-filter-submit"
              type="submit"
              value="GO"
              onClick={handleFiltersSubmit}
            ></input>
            <input
              className="directory-filter-reset"
              type="submit"
              value="RESET"
              onClick={handleFiltersReset}
            ></input>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Directory;
