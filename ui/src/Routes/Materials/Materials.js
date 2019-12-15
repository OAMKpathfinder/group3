//import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactDataGrid from "react-data-grid";
import axios from 'axios';
import './Materials.css';
const baseclsUrl = 'https://pathfinderserverrestapi.azurewebsites.net/materials';

const columns = [
    {
        key: "materialsid",
        name: "ID",
        width: 150
    },
    {
        key: "abbreviation",
        name: "abbreviation",

        width: 250
    },
    {
        key: "materialname",
        name: "Material Name",
        width: 300

    },
    {
        key: "coefficient",
        name: "Coefficient",
        width: 150
    },

];


class materials extends Component {
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
                this.btnNew.style.visibility = "visible";
                this.btnDel.style.visibility = "hidden";
                this.btnSave.style.visibility = "visible";
                this.btnCancel.style.visibility = "visible";


                this.myDivid.value = 0;
                this.myDivAbbr.value = '';
                this.myDivName.value = '';
                this.myDivcoefficient.value = 0;
                break;


            default:
                break;
        }


    }
    handleNewClick() {
        this.frmStatus = 1;
        this.showButt();
    }
    handleDelClick(){
        axios
        .delete('https://pathfinderserverrestapi.azurewebsites.net/materials/'+ this.myDivid.value)
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

            materialname: this.myDivName.value,
            coefficient: this.myDivcoefficient.value
        }

        if (this.frmStatus === 1) {

            axios
                .post('https://pathfinderserverrestapi.azurewebsites.net/materials/', PostData)
                .then(res => {
                    this.getDataList();
                });


        }
        if (this.frmStatus === 0) {

            axios
                .put('https://pathfinderserverrestapi.azurewebsites.net/materials/' + this.myDivid.value, PostData)
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
                this.myDivid.value = cust["materialsid"];
                this.myDivAbbr.value = cust["abbreviation"];
                this.myDivName.value = cust["materialname"];
                this.myDivcoefficient.value = cust["coefficient"];


            }
        }


    }

    render() {
        return (

            <div className="mainDiv_">
                <div className="Top_">
                    <table className="tblsMain_">
                        <tbody>
                            <td className="tdElements_" >
                                <tr>
                                    <td className="td_">Materid Id</td>
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
                                    <td className="td_">Material name</td>
                                    <td>
                                        <input type="text" name="materialname" ref={c => this.myDivName = c} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}  />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td_">Coefficient</td>
                                    <td>
                                        <input type="number" placeholder="0.00" step="0.01" name="coefficient" ref={c => this.myDivcoefficient = c} style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}  />
                                    </td>
                                </tr>
                            </td>
                            <td className="tdBtns_" >
                                <td>
                                    <tr>
                                        <button className="btn btn-dark btn-lg btn-block" onClick={this.handleNewClick} ref={c => this.btnNew = c}>New</button>
                                    </tr>
                                    <tr><p></p></tr>
                                    <tr>
                                        <button className="btn btn-danger btn-lg btn-block" onClick={this.handleDelClick} ref={c => this.btnDel = c}>Delete</button>

                                    </tr>

                                </td>
                                <td>
                                    <tr>
                                        <button className="btn btn-success btn-lg btn-block" onClick={this.handleSaveClick} ref={c => this.btnSave = c} >Save</button>
                                    </tr>
                                    <tr><p></p></tr>
                                    <tr>
                                        <button className="btn btn-secondary btn-lg btn-block" onClick={this.handleCancelClick} ref={c => this.btnCancel = c}>Cancel</button>

                                    </tr>

                                </td>


                            </td>

                        </tbody>
                    </table>
                </div>
                <div className="Bot_">

                    <this.CreateGrid />
                </div>


            </div>
            // <div>

            //     <div className="Top_">
            //         <table >
            //             <col width="100" />
            //             <col width="280" />
            //             <col width="100" />
            //             <col width="130" />
            //             <col width="250" />

            //             <thead></thead>
            //             <tbody>
            //                 <tr height="30">
            //                     <td className="td_" >Material Id</td>

            //                     <td>
            //                         <input type="number" name="materialsid" ref={c => this.myDivmaterialsid = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} disabled />
            //                     </td>
            //                     <td></td>
            //                     <td>
            //                     <button onClick={()=> this.handleClick(1) }>Hello Application</button>
            //                     </td>
            //                     <td><button  id={2}  >Editadf</button></td>
            //                 </tr>
            //                 <tr height="30">
            //                     <td className="td_">Abbreviation</td>
            //                     <td>
            //                         <input type="Text" name="abbreviation" ref={c => this.myDivabbreviation = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} disabled />
            //                     </td>
            //                     <td></td>
            //                 </tr>
            //                 <tr height="30">
            //                     <td className="td_" >Material name</td>
            //                     <td >
            //                         <input type="Text" name="materialname" ref={c => this.myDivmaterialname = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} />
            //                     </td>
            //                     <td></td>
            //                 </tr>
            //                 <tr height="30">
            //                     <td className="td_" >Coefficient</td>
            //                     <td>
            //                         <input type="number" name="coefficient" ref={c => this.myDivcoefficient = c} style={{ width: 100, borderColor: 'gray', borderWidth: 1 }} />
            //                     </td>
            //                     <td></td>
            //                 </tr>


            //             </tbody>
            //         </table>
            //     </div>



            //     <div>

            //     </div>
            // </div>
        );
    }
}

export default materials;
