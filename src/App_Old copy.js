// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// //import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// //import {} from "";

// function TrashDaySearch() {
//   const [data, setData] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   //const [ZipCode, setZipcode]=useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           "https://services6.arcgis.com/bdPqSfflsdgFRVVM/arcgis/rest/services/Trash_Day_Schedule/FeatureServer/2/query?where=1%3D1&outFields=StNum,StName,FullAddress,Zip,TrashDay&outSR=4326&f=json"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("There was an error fetching the data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   const filterData = data
//     ? data.features.filter((feature) => {
//         if (!feature.attributes?.StName) return false;
//         const address = feature.attributes.StName.toLowerCase();
//         const date = feature.attributes?.TrashDay
//           ? feature.attributes?.TrashDay.toLowerCase()
//           : "";

//         const zip = feature.attributes?.Zip
//           ? feature.attributes?.Zip.toString()
//           : "";

//         return (
//           address.includes(searchTerm.toLowerCase()) ||
//           date.includes(searchTerm.toLowerCase()) ||
//           zip.includes(searchTerm)
//         );
//       })
//     : [];

//   return (
//     <div className="container.max-width">
//       <nav className="navbar">
//         <img
//           className="syracuseLogowhite.png"
//           src="SyracuseLogowhite.png"
//           alt="Logo"
//           width="100"
//           padding-left="25"
//           padding-right="0px"
//         ></img>
//         <ul className=" nav justify-content-end">
//           <li className="nav-item"></li>
//           <li className="nav-item"></li>
//           <li className="nav-item"></li>
//           <li className="nav-item"></li>
//         </ul>
//       </nav>
//       <h1 className="title">Property Trash Day Schedule</h1>
//       <body className="Description">
//         Simply input your ZIP code or address into the search bar below to
//         receive customized details relevant to your location.
//         <p className="info">
//           *Potential disclaimer: If your specific address does not appear in
//           search results, kindly search for your street name to locate the
//           nearest address or refer to the provided map above.*
//         </p>
//       </body>
//       <div classname="container">
//         <input
//           className="searchInput"
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         {filterData.length > 0 && searchTerm ? (
//           <table
//             className="custom-table 
//            table table-bordered table-hover --bs-table-accent-bg"
//           >
//             <thead className="custom-table2 table-warning table-border-solid">
//               <tr>
//                 <th scope="col">House Number</th>
//                 <th scope="col">Street Name</th>
//                 <th scope="col">Trash Day</th>
//                 <th scope="col">Zip Code</th>
//                 {/* <th scope="col">Full Address</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {filterData.map((feature) => (
//                 <tr key={feature.attributes.OBJECTID}>
//                   <td>{feature.attributes.StNum}</td>
//                   <td>{feature.attributes.StName}</td>
//                   <td>{feature.attributes.TrashDay}</td>
//                   <td>{feature.attributes.Zip}</td>
//                   {/* <td>{feature.attributes.FullAddress}</td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="answer">No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TrashDaySearch;
// //className="table-bordered table-hover table table-bordered table-hover table-warning"
