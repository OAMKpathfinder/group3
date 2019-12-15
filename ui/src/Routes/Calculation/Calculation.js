//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

import ReactDataGrid from "react-data-grid";






import axios from 'axios';
import './Calculation.css';
const baseclsUrl = 'https://pathfinderserverrestapi.azurewebsites.net//buildingstouserdetail/gtdet/19';


const columns = [
    {
        key: "buildingstouserdetailid",
        name: "ID",
        width: 50
    },
    {
        key: "objectname",
        name: "Object name",

        width: 150
    },
    {
        key: "curmatname",
        name: "Present Material",
        width: 150

    },
    {
        key: "newmatname",
        name: "New Material",
        width: 150
    },
    {
        key: "numberofobjects",
        name: "Objects No",
        width: 100
    },
    {
        key: "objectarea",
        name: "Object area",
        width: 100
    },
    {
        key: "presentvalue",
        name: "Current Value",
        width: 100
    },
    {
        key: "newvalue",
        name: "New Value",
        width: 100
    },

];


class calculate extends Component {
    constructor() {
        super();

        this.getDataList = this.getDataList.bind(this);
        this.getObjectsList = this.getObjectsList.bind(this);
        this.getMaterialList = this.getMaterialList.bind(this);

        this.frmStatus = 0;

        this.rowselect = this.rowselect.bind(this);

        //btn handler
        this.handleNewClick = this.handleNewClick.bind(this);
        this.handleDelClick = this.handleDelClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);

        this.showButt = this.showButt.bind(this);

        this.CreateGrid = this.CreateGrid.bind(this);

        this.selected_row = 0;
        this.state = {
            lstDataList: []
        };
        this.lstObjectDataList = [];
        this.lstMaterialsDataList = [];

    }
    componentDidMount() {
        this.getDataList();
        this.getObjectsList();
        this.getMaterialList();
    }

    CreateGrid() {
        return (
            <div>
                <ReactDataGrid
                    columns={columns}
                    rowGetter={i => this.state.lstDataList[i]}
                    rowsCount={this.state.lstDataList.length}
                    onRowClick={this.rowselect}
                />
            </div>
        );

    }
    showButt() {
        switch (this.frmStatus) {
            case 0:
                this.btnNew.style.visibility = "visible";
                this.btnDel.style.visibility = "visible";
                this.btnSave.style.visibility = "visible";
                this.btnCancel.style.visibility = "visible";
                break;
            case 1:
                this.btnNew.style.visibility = "hidden";
                this.btnDel.style.visibility = "hidden";
                this.btnSave.style.visibility = "visible";
                this.btnCancel.style.visibility = "visible";
                // this.myDivObj.value = 0;
                //this.myDivMat.value = 0;
                this.myDivNumber.value = 0;
                this.myDivArea.value = 0;
                //this.myDivNewMat.value = 0;
                break;


            default:
                break;
        }


    }
    handleNewClick() {
        this.frmStatus = 1;
        this.showButt();
    }
    handleDelClick() {
        axios
            .delete('https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/' + this.myDivid.value)
            .then(res => {
                this.getDataList();
            });
    }
    handleCancelClick() {
        this.frmStatus = 0;
        this.showButt();
        this.rowselect(this.selected_row);
    }
    handleSaveClick() {
        const PostData = {

            objectsid: this.myDivObj.value,
            materialsid: this.myDivMat.value,
            numberofobjects: this.myDivNumber.value,
            objectarea: this.myDivArea.value,
            //newmaterialsid: this.myDivNewMat.value


        }

        if (this.frmStatus === 1) {

            axios
                .post('https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/', PostData)
                .then(res => {
                    this.getDataList();
                });


        }
        if (this.frmStatus === 0) {

            axios
                .put('https://pathfinderserverrestapi.azurewebsites.net/buildingstouserdetail/' + this.myDivid.value, PostData)
                .then(res => {
                    this.getDataList();
                });


        }

        this.frmStatus = 0;
        this.showButt();


    }


    getDataList() {
        axios.get(baseclsUrl).then(res => {
            const _lstDataList = res.data;
            if (_lstDataList.length > 0) {

                this.setState({ lstDataList: _lstDataList });
                this.rowselect(0);
                this.CreateGrid();
            }


        });
    }

    getObjectsList() {
        axios.get('https://pathfinderserverrestapi.azurewebsites.net/objects').then(res => {
            const _lstDataList = res.data;
            if (_lstDataList.length > 0) {
                this.lstObjectDataList = _lstDataList;
            }


        });
    }
    getMaterialList() {
        axios.get('https://pathfinderserverrestapi.azurewebsites.net/materials').then(res => {
            const _lstDataList = res.data;
            if (_lstDataList.length > 0) {
                this.lstMaterialsDataList = _lstDataList;
            }


        });
    }



    rowselect(iRowIdx) {

        if (iRowIdx === -99) {

        } else {

            if ((this.state.lstDataList.length > 0) && (this.frmStatus === 0)) {

                this.selected_row = iRowIdx;
                let cust = this.state.lstDataList[iRowIdx];

                this.myDivid.value = cust["buildingstouserdetailid"];
                this.myDivObj.value = cust["objectsid"];
                this.myDivMat.value = cust["materialsid"];
                this.myDivNewMat.value = cust["newmaterialsid"];
                this.myDivArea.value = cust["objectarea"];
                this.myDivNumber.value = cust["numberofobjects"];


            }
        }


    }

    render() {

        return (

            <div className="mainDiv_">
                <div className="Top_">
                    <table className="tblsMain_">
                        <tbody>
                            <tr className="trbtn_">
                                <td className="trbtn_"></td>
                                <td className="trbtn_">
                                    <button onClick={this.handleNewClick} ref={c => this.btnNew = c}>New</button>
                                </td>

                                <td className="trbtn_">
                                    <button className="btn btn-danger btn-lg btn-block" onClick={this.handleDelClick} ref={c => this.btnDel = c}>Delete</button>
                                </td>
                                <td className="trbtn_">
                                    <button className="btn btn-success btn-lg btn-block" onClick={this.handleSaveClick} ref={c => this.btnSave = c} >Save</button>
                                </td>
                                <td className="trbtn_">
                                    <button className="btn btn-secondary btn-lg btn-block" onClick={this.handleCancelClick} ref={c => this.btnCancel = c}>Cancel</button>
                                </td>

                            </tr>
                            <tr className="trElm_">
                                <td className="tdElements_" >
                                    <tr>
                                        <td className="td_">Id</td>
                                        <td>
                                            <input type="number" name="idField" ref={c => this.myDivid = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} disabled />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">Object </td>
                                        <td>
                                            <select ref={c => this.myDivObj = c}>
                                                {this.lstObjectDataList.map((team) => <option key={team.objectname} value={team.objectsid}>{team.objectname}</option>)}
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">Current material</td>
                                        <td>
                                            <select ref={c => this.myDivMat = c}>
                                                {this.lstMaterialsDataList.map((team) => <option key={team.materialname} value={team.materialsid}>{team.materialname}</option>)}
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">New material</td>
                                        <td>
                                            <select ref={c => this.myDivNewMat = c}>
                                                {this.lstMaterialsDataList.map((team) => <option key={team.materialname} value={team.materialsid}>{team.materialname}</option>)}
                                            </select>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">Area </td>
                                        <td>
                                            <input type="number" placeholder="0.00" step="0.01" name="objectarea" ref={c => this.myDivArea = c} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">Number Of objects </td>
                                        <td>
                                            <input type="number" placeholder="0" step="1" name="numberofobjects" ref={c => this.myDivNumber = c} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} />
                                        </td>
                                    </tr>

                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="Bot_">

                    <this.CreateGrid />
                </div>


            </div>
        );
    }
}

export default calculate;
