import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserRow } from "../components/eventRow.jsx";
import { ResiRow } from "../components/residenceRow.jsx";

function CRUD({ users, userList, setUserList, residence, setResidence }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsRes, residencesRes] = await Promise.all([
          fetch("http://localhost:5001/events"),
          fetch("http://localhost:5001/residences")
        ]);
        
        const eventsData = await eventsRes.json();
        const residencesData = await residencesRes.json();
        
        setUserList(eventsData);
        setResidence(residencesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crud-container">
      {/* Events Section */}
      <section className="crud-section">
        <div className="section-header">
          <h2>CRUD Event</h2>
          <button
            className="add-button"
            onClick={() => navigate("/addEvent")}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Event</span>
          </button>
        </div>
        
        <div className="card table-card">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>TITLE 1</th>
                  <th>TITLE 2</th>
                  <th>DATE 1</th>
                  <th>DATE 2</th>
                  <th>DESCRIPTION</th>
                  <th>IMAGE 1</th>
                  <th>IMAGE 2</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserRow
                    key={user.id}
                    userdata={user}
                    userList={userList}
                    setUserList={setUserList}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Residence Section */}
      <section className="crud-section">
        <div className="section-header">
          <h2>CRUD Residence</h2>
          <button
            className="add-button"
            onClick={() => navigate("/addresidence")}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Residence</span>
          </button>
        </div>
        
        <div className="card table-card">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>TITLE 1</th>
                  <th>TITLE 2</th>
                  <th>DATE 1</th>
                  <th>DESCRIPTION</th>
                  <th>AUTHOR</th>
                  <th>IMAGE 1</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {residence.map((resItem) => (
                  <ResiRow
                    key={resItem._id}
                    userdata={resItem}
                    residence={residence}
                    setResidence={setResidence}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CRUD;