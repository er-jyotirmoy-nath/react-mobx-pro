import React,{Component} from 'react';
import {toJS} from 'mobx';
import {observer,Provider,inject} from  'mobx-react';
import Listingstore from '../store/Listingstore';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Viewdetails from './viewDetails';

inject('Listingstore');
@observer
export default class Tmv3 extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    componentWillMount() {
      Listingstore.getTmv3();
    }
    setFilter(){
      if (this.refs.HPB.checked) {
          if(!Listingstore.filterc.includes('HPB')){Listingstore.filterc.push('HPB');}
      }else{
          if(Listingstore.filterc.includes('HPB')){  Listingstore.deleteFilter('HPB');}
      }
      if (this.refs.HPS.checked) {
          if(!Listingstore.filterc.includes('HPS')){Listingstore.filterc.push('HPS');}
      }else{
          if(Listingstore.filterc.includes('HPS')){  Listingstore.deleteFilter('HPS');}
      }
      if (this.refs.HPW.checked) {
          if(!Listingstore.filterc.includes('HPW')){Listingstore.filterc.push('HPW');}
      }else{
          if(Listingstore.filterc.includes('HPW')){  Listingstore.deleteFilter('HPW');}
      }
      if (this.refs.HPT44.checked) {
          if(!Listingstore.filterc.includes('HPT44')){Listingstore.filterc.push('HPT44');}
      }else{
          if(Listingstore.filterc.includes('HPT44')){  Listingstore.deleteFilter('HPT44');}
      }
      if (this.refs.HPT46.checked) {
          if(!Listingstore.filterc.includes('HPT46')){Listingstore.filterc.push('HPT46');}
      }else{
          if(Listingstore.filterc.includes('HPT46')){  Listingstore.deleteFilter('HPT46');}
      }
      if (this.refs.HPD44.checked) {
          if(!Listingstore.filterc.includes('HPD44')){Listingstore.filterc.push('HPD44');}
      }else{
          if(Listingstore.filterc.includes('HPD44')){  Listingstore.deleteFilter('HPD44');}
      }
      if (this.refs.HPD46.checked) {
          if(!Listingstore.filterc.includes('HPD46')){Listingstore.filterc.push('HPD46');}
      }else{
          if(Listingstore.filterc.includes('HPD46')){  Listingstore.deleteFilter('HPD46');}
      }
      if (this.refs.LPB.checked) {
          if(!Listingstore.filterc.includes('LPB')){Listingstore.filterc.push('LPB');}
      }else{
          if(Listingstore.filterc.includes('LPB')){  Listingstore.deleteFilter('LPB');}
      }
      if (this.refs.LPS.checked) {
          if(!Listingstore.filterc.includes('LPS')){Listingstore.filterc.push('LPS');}
      }else{
          if(Listingstore.filterc.includes('LPS')){  Listingstore.deleteFilter('LPS');}
      }
      if (this.refs.LPW.checked) {
        if(!Listingstore.filterc.includes('LPW')){Listingstore.filterc.push('LPW');}
      }else{
          if(Listingstore.filterc.includes('LPW')){  Listingstore.deleteFilter('LPW');}
      }
      if (this.refs.LPT44.checked) {
        if(!Listingstore.filterc.includes('LPT44')){Listingstore.filterc.push('LPT44');}
      }else{
          if(Listingstore.filterc.includes('LPT44')){  Listingstore.deleteFilter('LPT44');}
      }
      if (this.refs.LPT46.checked) {
        if(!Listingstore.filterc.includes('LPT46')){Listingstore.filterc.push('LPT46');}
      }else{
          if(Listingstore.filterc.includes('LPT46')){  Listingstore.deleteFilter('LPT46');}
      }
      if (this.refs.LPD44.checked) {
        if(!Listingstore.filterc.includes('LPD44')){Listingstore.filterc.push('LPD44');}
      }else{
          if(Listingstore.filterc.includes('LPD44')){  Listingstore.deleteFilter('LPD44');}
      }
      if (this.refs.LPD46.checked) {
        if(!Listingstore.filterc.includes('LPD46')){Listingstore.filterc.push('LPD46');}
      }else{
          if(Listingstore.filterc.includes('LPD46')){  Listingstore.deleteFilter('LPD46');}
      }
      if (this.refs.discon.checked) {
        if(!Listingstore.filterc.includes('discon')){Listingstore.filterc.push('discon');}
      }else{
        if(Listingstore.filterc.includes('discon')){    Listingstore.deleteFilter('discon');}
      }


    }
    render() {
      let tmv3listings = Listingstore.filterTmv3_2;
      //console.log(toJS(tmv3listings));
      function bdataFormater(cell, row){
        return <Viewdetails id={cell} type='tmv3' />
      }
        return (
          <div className="container-fluid">
                <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-list"></span> NSF TMV3  </h3>
                         <hr/>
                           <div className="row">

                               <div className="col-md-4">
                                   <h4>High Pressure 1.0 - 5.0 bar dynamic (HP)</h4>
                                       <label><input ref="HPB" type="checkbox" value="1" /> B</label>
                                       <label><input ref="HPS" type="checkbox" value="1" /> S</label>
                                       <label><input ref="HPW" type="checkbox" value="1"/> W</label>
                                       <label><input ref="HPT44" type="checkbox" value="1" /> T44</label>
                                       <label><input ref="HPT46" type="checkbox" value="1" /> T46</label>
                                       <label><input ref="HPD44" type="checkbox" value="1" /> D44</label>
                                       <label><input ref="HPD46" type="checkbox" value="1" /> D46</label>
                               </div><div className="col-md-4"><h4>Low Pressure 0.2 - 1.0 bar dynamic (LP) </h4>
                                   <label><input ref="LPB" type="checkbox" value="1"/> B</label>

                                     <label><input ref="LPS" type="checkbox" value="1" /> S</label>
                                     <label><input ref="LPW" type="checkbox" value="1"/> W</label>
                                     <label><input ref="LPT44" type="checkbox" value="1" /> T44</label>
                                     <label><input ref="LPT46" type="checkbox" value="1" /> T46</label>
                                     <label><input ref="LPD44" type="checkbox" value="1" /> D44</label>
                                     <label><input ref="LPD46" type="checkbox" value="1" /> D46</label>
                               </div>
                               <div className="col-md-4">
                                   <div className="row">
                                     <div className="col-md-6">
                                           <input type="hidden" name="filter" value="yes"/>
                                          <label><input ref="discon" type="checkbox" value="1"/>
                                                   Discontinued Approvals</label>
                                      </div>
                                     <div className="col-md-6">
                                           <button type="button" onClick={this.setFilter.bind(this)} className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i> Show Approvals</button>
                                       </div>
                                     </div>
                               </div>
                   </div>
                           <div className="row"><div className="col-md-12">
                                   <br/>
                                   <h5>Total Records:{Listingstore.tmv3Count}</h5>
                                   <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                                       <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                                           Check TMV3 Approval
                                       </div>
                                       <div className="panel-body" style={{"minHeight":"170px"}}>
                                         <BootstrapTable data={tmv3listings} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                          <TableHeaderColumn dataField="FACTOR"  isKey={true}  dataSort={true}>Factor</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="APPROVED_MIXING_VALVE"  dataSort={true}>Mixing Valve</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="UNIQUE_ID"  dataSort={true} >Unique ID</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="CERT_ID"  dataSort={true} >Certificate</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="COMMENTS"  dataSort={true} >Comments</TableHeaderColumn>
                                                          <TableHeaderColumn dataField="BUILD_APP_ID"   dataSort={true} dataFormat={bdataFormater} >View Listing</TableHeaderColumn>
                                        </BootstrapTable>
                                       </div>
                                   </div>
                               </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
