const records = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    status: "Active",
    date: "2026-08-01",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    status: "Inactive",
    date: "2026-08-03",
  },
  {
    id: 3,
    name: "David Brown",
    email: "david.brown@example.com",
    status: "Active",
    date: "2026-08-05",
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    status: "Active",
    date: "2026-08-07",
  },
  {
    id: 5,
    name: "Michael Davis",
    email: "michael.davis@example.com",
    status: "Inactive",
    date: "2026-08-09",
  },
  {
    id: 6,
    name: "Jessica Wilson",
    email: "jessica.wilson@example.com",
    status: "Active",
    date: "2026-08-11",
  },
  {
    id: 7,
    name: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    status: "Inactive",
    date: "2026-08-13",
  },
  {
    id: 8,
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    status: "Active",
    date: "2026-08-15",
  },
  {
    id: 9,
    name: "James Taylor",
    email: "james.taylor@example.com",
    status: "Active",
    date: "2026-08-17",
  },
  {
    id: 10,
    name: "Olivia Thomas",
    email: "olivia.thomas@example.com",
    status: "Inactive",
    date: "2026-08-19",
  },
  {
    id: 11,
    name: "Robert Jackson",
    email: "robert.jackson@example.com",
    status: "Active",
    date: "2026-08-21",
  },
  {
    id: 12,
    name: "Ava White",
    email: "ava.white@example.com",
    status: "Inactive",
    date: "2026-08-23",
  },
  {
    id: 13,
    name: "William Harris",
    email: "william.harris@example.com",
    status: "Active",
    date: "2026-08-25",
  },
  {
    id: 14,
    name: "Isabella Martin",
    email: "isabella.martin@example.com",
    status: "Active",
    date: "2026-08-27",
  },
  {
    id: 15,
    name: "Thomas Thompson",
    email: "thomas.thompson@example.com",
    status: "Inactive",
    date: "2026-08-29",
  },
  {
    id: 16,
    name: "Mia Garcia",
    email: "mia.garcia@example.com",
    status: "Active",
    date: "2026-08-31",
  },
  {
    id: 17,
    name: "Charles Martinez",
    email: "charles.martinez@example.com",
    status: "Inactive",
    date: "2026-09-02",
  },
  {
    id: 18,
    name: "Amelia Robinson",
    email: "amelia.robinson@example.com",
    status: "Active",
    date: "2026-09-04",
  },
  {
    id: 19,
    name: "Christopher Clark",
    email: "christopher.clark@example.com",
    status: "Active",
    date: "2026-09-06",
  },
  {
    id: 20,
    name: "Harper Rodriguez",
    email: "harper.rodriguez@example.com",
    status: "Inactive",
    date: "2026-09-08",
  },
];
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./DisplayRecords.css";
import Records from "../Records/Records";

const DisplayRecords = () => {
  const [filteredList, setFilteredList] = useState(records);
  const [filterVal, setFilterVal] = useState("Sort by Status");
  const [filterInit, setFilterInit] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const onChangeFilterVal = (event) => {
    const filteredStatus = event.target.value;
    setFilterVal(event.target.value);
    setFilterInit(false);
    if (filteredStatus == "Both") {
      setFilteredList(records);
    } else {
      const updatedListA_IN = records.filter((e) => {
        return e.status.includes(filteredStatus);
      });
      setFilteredList(updatedListA_IN);
    }
  };

  const onInputSubmit = () => {
    const lowerInput = inputVal.toLowerCase();
    const updatedList = records.filter((eachRecord) => {
      const eName = eachRecord.name.toLowerCase();
      const email = eachRecord.email.toLowerCase();

      return eName.includes(lowerInput) || email.includes(lowerInput);
    });

    setFilteredList(updatedList);
  };
  const onNameSearch = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div className="main-context">
      <div className="filter-div">
        <div className="input-backdiv">
          <div className="input-main-div">
            <input type="text" id="inputFilter" onChange={onNameSearch} />
            <button className="search-button" onClick={onInputSubmit}>
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
        <div>
          <select value={filterVal} onChange={onChangeFilterVal}>
            {filterInit && (
              <option value="Sort by Status">Sort by Status</option>
            )}

            <option value="Active">Active</option>
            <option value="Inactive">InActive</option>
            <option value="Both">Both</option>
          </select>
        </div>
      </div>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((eachObj) => (
              <Records records={eachObj} key={eachObj.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayRecords;
