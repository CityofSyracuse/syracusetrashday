import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://services6.arcgis.com/bdPqSfflsdgFRVVM/arcgis/rest/services/Trash_Day_Schedule/FeatureServer/2/query?where=1%3D1&outFields=StName&outSR=4326&f=json"
        );
        setData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>This is the final version</h1>
      {JSON.stringify(data.features.attributes.StName)}
      {/* {data ? JSON.stringify(data.features.attributes.StName) : "Loading..."} */}
    </div>
  );
}

export default MyComponent;
