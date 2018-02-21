import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import {fetchtmv3All,addtoFilterTmv3,removetoFilterTmv3,applyFilterTmv3,clearFilterTmv3} from '../actions/tmv3actions';
import Viewdetails from './viewDetails';

class Tmv3 extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    componentDidMount() {
      this.props.gettmv3All();
    }
    changeFilter(e){
      let filtername = e.target.name;
      if (e.target.checked) {
        this.props.addFilter(filtername);
      }
      else{
        this.props.removeFilter(filtername);
      }
    }
    useFilter(){

      if(this.props.tmv3Filter.length>0){
        this.props.applyFilter(this.props.tmv3Filter);
      }
      else{
        this.props.clearfilter();
      }

    }
    render() {
      let tmv3listings =[];
      if (this.props.tmv3.tmv3filtered) {
        tmv3listings = (this.props.tmv3.tmv3filtered)?this.props.tmv3.tmv3filtered:[];
      }
       else{
         tmv3listings = (this.props.tmv3.tmv3files)?this.props.tmv3.tmv3files:[];
       }
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
                                       <label><input name="HPB" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} /> B</label>
                                       <label><input name="HPS" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} /> S</label>
                                       <label><input name="HPW" type="checkbox" value="1" onChange={this.changeFilter.bind(this)}/> W</label>
                                       <label><input name="HPT44" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} /> T44</label>
                                       <label><input name="HPT46" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} /> T46</label>
                                       <label><input name="HPD44" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} /> D44</label>
                                       <label><input name="HPD46" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} /> D46</label>
                               </div><div className="col-md-4"><h4>Low Pressure 0.2 - 1.0 bar dynamic (LP) </h4>
                             <label><input name="LPB" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)}/> B</label>

                                     <label><input name="LPS" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)} /> S</label>
                                     <label><input name="LPW" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)}/> W</label>
                                     <label><input name="LPT44" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)} /> T44</label>
                                     <label><input name="LPT46" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)} /> T46</label>
                                     <label><input name="LPD44" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)} /> D44</label>
                                     <label><input name="LPD46" type="checkbox" value="1" onChange={this.changeFilter.bind(this)} onChange={this.changeFilter.bind(this)} /> D46</label>
                               </div>
                               <div className="col-md-4">
                                   <div className="row">
                                     <div className="col-md-6">
                                           <input type="hidden" name="filter" value="yes"/>
                                          <label><input name="discon" type="checkbox" value="1" onChange={this.changeFilter.bind(this)}/>
                                                   Discontinued Approvals</label>
                                      </div>
                                     <div className="col-md-6">
                                           <button type="button" onClick={this.useFilter.bind(this)} className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i> Show Approvals</button>
                                       </div>
                                     </div>
                               </div>
                   </div>
                           <div className="row"><div className="col-md-12">
                                   <br/>
                                   <h5>Total Records:{tmv3listings.length}</h5>
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
function mapStateToProps(state) {
  return{
    tmv3:state.tmv3all.tmv3,
    tmv3Filter:state.tmv3all.tmv3Filter
  }
}
function mapDispatchToProps(dispatch) {
  return {
          addFilter(f){
            dispatch(
            addtoFilterTmv3(f)
            )
          },
          removeFilter(f){
            dispatch(
            removetoFilterTmv3(f)
            )
          },
          applyFilter(f){
            dispatch(
              applyFilterTmv3(f)
            )
          },
          clearfilter(){
            dispatch(
              clearFilterTmv3()
            )
          },
          gettmv3All(){
            dispatch(
              fetchtmv3All()
            )
          }
  }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Tmv3)
