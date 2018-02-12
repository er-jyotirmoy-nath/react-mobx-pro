import React,{Component} from 'react';
import {observer,Provider,inject} from  'mobx-react';
import Listingstore from '../store/Listingstore';
import { Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Viewdetails from './viewDetails';

inject('Listingstore');
@observer
export default class Pdcert extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Listingstore.getPdcertFiles();
  }
  render() {
    let pdcertFiles = Listingstore.pdcert;
    function bdataFormater(cell,row){
      return <Viewdetails id={cell} type='pdcert' />;
    }
      return (
        <div className="container-fluid">
               <div className="row">
                 <div className="col-md-12">
                  <h3> <span className="glyphicon glyphicon-user"></span> BuildCert Listings – UKAS product certification 110 mark  </h3>
                       <hr/>
                       <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                           <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                               Check BuildCert Listings – UKAS product certification 110 mark Approvals
                           </div>
                           <div className="panel-body" style={{"minHeight":"170px"}}>

                             <BootstrapTable data={pdcertFiles} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                              <TableHeaderColumn dataField="MANUFACTURER"  isKey={true}  dataSort={true}>Company</TableHeaderColumn>
                                              <TableHeaderColumn dataField="DESCRIPTION_PRODCERT"  dataSort={true} >Description</TableHeaderColumn>
                                              <TableHeaderColumn dataField="PERFORMANCE_STANDARD"  dataSort={true} >Performance Standard</TableHeaderColumn>
                                              <TableHeaderColumn dataField="EXPIRY_DATE"  dataSort={true} >Expiry Date</TableHeaderColumn>
                                              <TableHeaderColumn dataField="CERT_ID"  dataSort={true} >Certificate ID</TableHeaderColumn>
                                              <TableHeaderColumn dataField="BUILD_APP_ID"   dataSort={true} dataFormat={bdataFormater} >View Listing</TableHeaderColumn>
                            </BootstrapTable>

                           </div>

                       </div>

                   </div>
                 </div>
           </div>
      );
  }
}
