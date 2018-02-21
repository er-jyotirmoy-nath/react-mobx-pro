import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchtmv2All,fetchtmv2Details} from '../actions/actioncreators';
import Viewdetails from './viewDetails';

class Tmv2 extends Component {
    componentDidMount() {
      this.props.fetchTMV2();
    }
    render() {
      console.log(this.props.tmv2);
      let tmv2listings = this.props.tmv2[0];
      function bdataFormater(cell, row){
        return <Viewdetails id={cell} type='tmv2' />
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-user"></span> NSF TMV2  </h3>
                         <hr/>

                             <div className="row">

                                 <div className="col-md-4">
                                     <h4>High Pressure 0.5 - 5 bar dynamic (HP) <small>BS EN 1111:1999</small></h4>
                                         <label><input name="HPB" type="checkbox" value="1" /> B</label>
                                         <label><input name="HPS" type="checkbox" value="1" /> S</label>
                                         <label><input name="HPW" type="checkbox" value="1"/> W</label>
                                         <label><input name="HPT" type="checkbox" value="1" /> T</label>
                                         <label><input name="Cold_isol_46_hp" type="checkbox" value="1" /> Cold Isol 46</label>
                                 </div><div className="col-md-4"><h4>Low Pressure 0.1 - 1.0 bar dynamic (LP) <small>BS EN 1287:1999</small></h4>
                                     <label><input name="LPB" type="checkbox" value="1"/> B</label>
                                           <label><input name="LPS" type="checkbox" value="1" /> S </label>
                                           <label><input name="LPW" type="checkbox" value="1" /> W </label>
                                           <label><input name="LPT" type="checkbox" value="1" /> T </label>
                                           <label><input name="LPTx" type="checkbox" value="1" /> T at 0.2b </label>
                                           <label><input name="Cold_isol_46_lp" type="checkbox" value="1" /> Cold Isol 46 </label>

                                 </div>
                                 <div className="col-md-4">
                                     <div className="row">
                                       <div className="col-md-6">
                                             <input type="hidden" name="filter" value="yes"/>
                                            <label><input name="discon" type="checkbox" value="1"/>
                                                     Discontinued Approvals</label>
                                            </div>




                                         <div className="col-md-6">
                                             <button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i> Show Approvals</button>
                                         </div></div>
                                 </div>



                     </div>
                 </div>
                 <div className="row"><div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                                 Check BUILDCERT Approval
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <BootstrapTable data={tmv2listings} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="MANUFACTURER"  isKey={true}  dataSort={true}>Approval Holder</TableHeaderColumn>
                                                <TableHeaderColumn dataField="NEW_COMM"  dataSort={true}>Mixing Valve</TableHeaderColumn>
                                                <TableHeaderColumn dataField="UNIQUE_ID"  dataSort={true} >Unique ID</TableHeaderColumn>
                                                <TableHeaderColumn dataField="CERT_ID"  dataSort={true} >Certificate</TableHeaderColumn>
                                                <TableHeaderColumn dataField="BUILD_APP_ID"   dataSort={true} dataFormat={bdataFormater} >View Listing</TableHeaderColumn>
                              </BootstrapTable>

                             </div>

                         </div>

                     </div></div>
             </div>
         </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    tmv2:state.tmv2all.tmv2
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchTMV2(){
      dispatch(
        fetchtmv2All()
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Tmv2);
