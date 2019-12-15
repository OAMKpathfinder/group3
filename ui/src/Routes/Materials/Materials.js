
import useAxios from '@use-hooks/axios';

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import createRowData from "./getMaterials";

var rows = [];

const defaultColumnProperties = {
  width: 160
};

const columns = [
  {
    field: "materialsid",
    headerName: "ID",

  },
  {
    field: "abbreviation",
    headerName: "abbreviation",

  },
  {
    field: "materialname",
    headerName: "material name",

  },
  {
    field: "coefficient",
    headerName: "coefficient",

  },
  // {
  //   field: "",
  //   headerName: "Edit",

  // },
  // {
  //   field: "",
  //   headerName: "Delete",

  // },
].map(c => ({ ...c, ...defaultColumnProperties }));
let myRow = [];
const firstNameActions = [
  {
    icon: <span className="glyphicon glyphicon-remove" />,
    callback: () => {
      alert("Deleting");
    }
  },
  {
    icon: "glyphicon glyphicon-link",
    actions: [
      {
        text: "Option 1",
        callback: () => {
          alert("Option 1 clicked");
        }
      },
      {
        text: "Option 2",
        callback: () => {
          alert("Option 2 clicked");
        }
      }
    ]
  }
];
function getCellActions(column, row) {
  const cellActions = {
    firstName: firstNameActions
  };
  return row.id % 2 === 0 ? cellActions[column.key] : null;
}

const ROW_COUNT = 3;


function Materials() {
  // const [data, setData] = useState({ rows: [] });
  // const [query, setQuery] = useState('react');




  // alert(JSON.stringify(rows));
  // useEffect(() => {
  //   let ignore = false;

  //   async function fetchData() {
  //     alert("2222");
  //     const result = await axios('http://localhost:1337/materials');
  //     //const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query);
  //     if (!ignore) {
  //       //myRow=result.data.rows.map(x=> x);
  //       setData(result.data);
  //       //rows=result.data;
  //      alert(JSON.stringify(this.setData));

  //       //alert(myRow[0]["materialname"]);
  //     }

  //   }

  //   fetchData();

  //   return () => { ignore = true; }
  // }, [query]);


  const [gender, setGender] = useState('');
  const { response, loading, error, reFetch } = useAxios(
    {
      //url: "https://randomuser.me/api/${gender === 'unknown' ? 'unknown' : ''}",
      url: `http://localhost:1337/materials`,
      method: 'GET',
      options: {
        //params: { gender },
      },
      trigger: gender,
      // or
      // trigger: { gender }
      //forceDispatchEffect: () => !!gender, // AUTO RUN only if gender is set
    });

  const { data } = response || {};
alert(JSON.stringify(data));
  const options = [
    { gender: 'female', title: 'Female' },
    { gender: 'male', title: 'Male' },
    { gender: 'unknown', title: 'Unknown' },
  ];

  if (loading) return 'loading...';
  return 
  (
    <>
    <div>
      
    </div>
    </>
    //   <div>
    //   <ReactDataGrid
    //     columns={columns}
    //     rowGetter={data}
    //     rowsCount={5}
    //     minHeight={500}
    //     getCellActions={getCellActions}
    //   />
    // </div> 

  //   <div>
  //     <h2>
  //       DEMO of
  //       <span style={{ color: '#F44336' }}>@use-hooks/axios</span>
  //     </h2>
  //     {options.map(item => (
  //       <div key={item.gender}>
  //         <input
  //           type="radio"
  //           id={item.gender}
  //           value={item.gender}
  //           checked={gender === item.gender}
  //           onChange={e => setGender(e.target.value)}
  //         />
  //         {item.title}
  //       </div>
  //     ))}
  //     <button type="button" onClick={reFetch}>
  //       Refresh
  //     </button>
  //     <div>
  //       {error ? (
  //         error.message || 'error'
  //       ) : (
  //           <textarea
  //             cols="100"
  //             rows="30"
  //             defaultValue={JSON.stringify(data || {}, '', 2)}
  //           />
  //         )}
  //     </div>
  //   </div>
   );
}

// return (
//   <>

    {/* <div>
      <ReactDataGrid
        columns={columns}
        rowGetter={myRow}
        rowsCount={5}
        minHeight={500}
        getCellActions={getCellActions}
      />
    </div> */}

//     {/* <div>
//       <ReactDataGrid
//         columns={columns}
//         rowGetter={myRow}
//         rowsCount={2}
//         minHeight={500}

//       />
//     </div> */}

//     <div
//       className="ag-theme-balham"
//       style={{

//         height: '500px', width: '1500px'
//       }}
//     >
//       <AgGridReact
//         columnDefs={columns}
//         rowData={data.rows}>
//       </AgGridReact>
//     </div>




//   </>
// );
//}

export default Materials;
