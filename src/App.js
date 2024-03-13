import React, { useState, useEffect } from "react";
import axios from "axios";

function TrashDaySearch() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://services6.arcgis.com/bdPqSfflsdgFRVVM/arcgis/rest/services/Trash_Day_Schedule/FeatureServer/2/query?where=1%3D1&outFields=StNum,StName,FullAddress,Zip,TrashDay&outSR=4326&f=json"
        );
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }

    fetchData();
  }, []);

  const filterData = data
    ? data.features.filter((feature) => {
        if (!feature.attributes?.StName) return false;
        const address = feature.attributes.StName.toLowerCase();
        const date = feature.attributes?.TrashDay
          ? feature.attributes?.TrashDay.toLowerCase()
          : "";

        return (
          address.includes(searchTerm.toLowerCase()) ||
          date.includes(searchTerm.toLowerCase())
        );
      })
    : [];

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filterData.length > 0 && searchTerm ? (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">House Number</th>
              <th scope="col">Street Name</th>
              <th scope="col">TrashDay</th>
              <th scope="col">ZipCode</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((feature) => (
              <tr key={feature.attributes.OBJECTID}>
                <td>{feature.attributes.StNum}</td>
                <td>{feature.attributes.StName}</td>
                <td>{feature.attributes.TrashDay}</td>
                <td>{feature.attributes.Zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>no results found.</p>
      )}
    </div>
  );
}

export default TrashDaySearch;
