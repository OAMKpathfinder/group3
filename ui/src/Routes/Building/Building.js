//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import ReactDataGrid from "react-data-grid";
import axios from 'axios';
import './Building.css';
const baseclsUrl = 'https://pathfinderserverrestapi.azurewebsites.net/buildingtypes';

const columns = [
    {
        key: "buildingtypeid",
        name: "ID",
        width: 150
    },
    {
        key: "abbreviation",
        name: "abbreviation",

        width: 250
    },
    {
        key: "typename",
        name: "Type name",
        width: 300

    },
    {
        key: "formula",
        name: "formula",
        width: 150
    },

];


class building extends Component {
    constructor() {
        super();
        this.getDataList = this.getDataList.bind(this);

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
        this.getDataList();
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


                this.myDivid.value = 0;
                this.myDivAbbr.value = '';
                this.myDivName.value = '';
                this.myDivformula.value = "";
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
            .delete('https://pathfinderserverrestapi.azurewebsites.net/buildingtypes/' + this.myDivid.value)
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

            typename: this.myDivName.value,
            formula: this.myDivformula.value
        }

        if (this.frmStatus === 1) {

            axios
                .post('https://pathfinderserverrestapi.azurewebsites.net/buildingtypes/', PostData)
                .then(res => {
                    this.getDataList();
                });


        }
        if (this.frmStatus === 0) {

            axios
                .put('https://pathfinderserverrestapi.azurewebsites.net/buildingtypes/' + this.myDivid.value, PostData)
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


    CreateGrid() {

        return (
            <div>
                <ReactDataGrid
                    columns={columns}
                    rowGetter={i => this.state.lstDataList[i]}
                    rowsCount={this.state.lstDataList.length}
                    onRowClick={this.rowselect}
                    enableCellSelect={false}
                />
            </div>
        );
    }

    rowselect(iRowIdx) {
        if (iRowIdx === -99) {

        } else {

            if ((this.state.lstDataList.length > 0) && (this.frmStatus === 0)) {
                this.selected_row = iRowIdx;
                let cust = this.state.lstDataList[iRowIdx];
                this.myDivid.value = cust["buildingtypeid"];
                this.myDivAbbr.value = cust["abbreviation"];
                this.myDivName.value = cust["typename"];
                this.myDivformula.value = cust["formula"];


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
                                        <td className="td_">Type Id</td>
                                        <td>
                                            <input type="number" name="idField" ref={c => this.myDivid = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} disabled />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">Abbreviation</td>
                                        <td>
                                            <input type="text" name="abbreviation" ref={c => this.myDivAbbr = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} disabled />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">Type name</td>
                                        <td>
                                            <input type="text" name="typename" ref={c => this.myDivName = c} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="td_">formula</td>
                                        <td>
                                            <textarea name="formula" ref={c => this.myDivformula = c} style={{ height: 150, width: 400, borderColor: 'gray', borderWidth: 1 }} />
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

export default building;
