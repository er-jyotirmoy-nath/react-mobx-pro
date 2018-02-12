import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import Listingstore from '../store/Listingstore';
import {observer,inject} from  'mobx-react';
inject('Listingstore')
@observer
export default class viewDetails extends Component {
 constructor(props){
           super(props);
           this.state = { showModal: false, listingDetail:'' };
           this.close = this.close.bind(this);
           this.open = this.open.bind(this);
       }

 close() {
   this.setState({ showModal: false });
   switch (this.props.type) {
     case 'tmv2':
       Listingstore.tmvDetails=[];
       break;
     case 'tmv3':
       Listingstore.tmv3Details = [];
     case 'dtc':
      Listingstore.dtcDetails=[];
      break;
     case 'cias':
      Listingstore.ciasDetails = [];
      break;
     case 'pdcert':
      Listingstore.pdcertDetail=[];
      break;
     default:

   }
 }

 open() {
   let self = this;
   this.setState({ showModal: true },()=>{
     switch (this.props.type) {
       case 'tmv2':
         Listingstore.getTmv2Details(this.props.id);
         break;
       case 'tmv3':
         Listingstore.getTmv3Details(this.props.id);
       case 'dtc':
        Listingstore.getDtcDetail(this.props.id);
        break;
       case 'cias':
        Listingstore.getCiasDetail(this.props.id);
        break;
       case 'pdcert':
        Listingstore.getpdCertDetail(this.props.id);
        break;
       default:

     }
   });

 }

 render() {
   let listingDetail = 'Loading...';
   switch (this.props.type) {
     case 'tmv2':
     listingDetail = Listingstore.tmvDetails.map((item,i) => {
       return (
         <table className="table table-bordered" key={i}>
         <tbody>
        <tr><td><label>Licensee</label></td><td>{item.licensee}</td></tr>
        <tr><td><label>Manufacturer</label></td><td>{item.manufacturer}</td></tr>
        <tr><td><label>Mixing Valve</label></td><td>{item.mixingValve}</td></tr>
        <tr><td><label>Unique Valve ID</label></td><td>{item.uniqueValveID}</td></tr>
        <tr><td><label>Certificate Numbers</label></td><td>{item.certificateNumbers}</td></tr>
        <tr><td><label>HP_1111</label></td><td>{item.hp_1111}</td></tr>
        <tr><td><label>B</label></td><td>{item.b}</td></tr>
        <tr><td><label>S</label></td><td>{item.s}</td></tr>
        <tr><td><label>W</label></td><td>{item.w}</td></tr>
        <tr><td><label>T</label></td><td>{item.t}</td></tr>
        <tr><td><label>Cold Isol 46</label></td><td>{item.coldIsol46}</td></tr>
        <tr><td><label>LP_1287</label></td><td>{item.lp_1287}</td></tr>
        <tr><td><label>B</label></td><td>{item.lb}</td></tr>
        <tr><td><label>S</label></td><td>{item.ls}</td></tr>
        <tr><td><label>W</label></td><td>{item.lw}</td></tr>
        <tr><td><label>T</label></td><td>{item.lt}</td></tr>
        <tr><td><label>T 0.2</label></td><td>{item.t02}</td></tr>
        <tr><td><label>Cold Isol 46</label></td><td>{item.coldIsol46}</td></tr>
        <tr><td><label>Comments</label></td><td>{item.comments}</td></tr>
        </tbody>
         </table>
       );
     });
       break;
     case 'tmv3':
       listingDetail = Listingstore.tmv3Details.map((item,i) => {
         return (
           <table className="table table-bordered" key={i}>
           <tbody>
          <tr><td><label>Factor</label></td><td>{item.factor}</td></tr>
          <tr><td><label>Mixing Valve</label></td><td>{item.mixingvalve}</td></tr>
          <tr><td><label>Certificate </label></td><td>{item.certificate}</td></tr>
          <tr><td><label>HPB</label></td><td>{item.hpb}</td></tr>
          <tr><td><label>HPS</label></td><td>{item.hps}</td></tr>
          <tr><td><label>HPW</label></td><td>{item.hpw}</td></tr>
          <tr><td><label>HPT44</label></td><td>{item.hpt44}</td></tr>
          <tr><td><label>HPT46</label></td><td>{item.hpt46}</td></tr>
          <tr><td><label>HPD44</label></td><td>{item.hpd44}</td></tr>
          <tr><td><label>HPD46</label></td><td>{item.hpd46}</td></tr>
          <tr><td><label>LPS</label></td><td>{item.lps}</td></tr>
          <tr><td><label>LPW</label></td><td>{item.lpw}</td></tr>
          <tr><td><label>LPT44</label></td><td>{item.lpt44}</td></tr>
          <tr><td><label>LPT46</label></td><td>{item.lpt46}</td></tr>
          <tr><td><label>LPD44</label></td><td>{item.lpd44}</td></tr>
          <tr><td><label>LPD46</label></td><td>{item.lpd46}</td></tr>
          <tr><td><label>Comments</label></td><td>{item.comments}</td></tr>
          </tbody>
           </table>
         );
       });
         break;
    case 'dtc':
    listingDetail = Listingstore.dtcDetails.map((item,i) => {
      return (
        <table className="table table-bordered" key={i}>
        <tbody>
       <tr><td><label>Company</label></td><td>{item.company}</td></tr>
       <tr><td><label>Description</label></td><td>{item.description}</td></tr>
       <tr><td><label>Approved Mixing Valve</label></td><td>{item.mixingvalve}</td></tr>
       <tr><td><label>Unique Id</label></td><td>{item.uniqueid}</td></tr>
       <tr><td><label>Certificate Number</label></td><td>{item.certificatenumber}</td></tr>
       <tr><td><label>Certification ID</label></td><td>{item.certificateid}</td></tr>
       <tr><td><label>Expiry</label></td><td>{item.expiry}</td></tr>
       </tbody>
        </table>
      );
    });
      break;
    case 'cias':
    listingDetail = Listingstore.ciasDetails.map((item,i) => {
      return (
        <table className="table table-bordered" key={i}>
        <tbody>
       <tr><td><label>Company</label></td><td>{item.company}</td></tr>
       <tr><td><label>Description</label></td><td>{item.description}</td></tr>
       <tr><td><label>Sizes</label></td><td>{item.sizes}</td></tr>
       <tr><td><label>Certification Number</label></td><td>{item.certificatenumber}</td></tr>
       <tr><td><label>Certification ID</label></td><td>{item.certficateid}</td></tr>
       </tbody>
        </table>
      );
    });
      break;
    case 'pdcert':
      listingDetail = Listingstore.pdcertDetail.map((item,i) => {
        return (
          <table className="table table-bordered" key={i}>
          <tbody>
         <tr><td><label>Product Standard</label></td><td>{item.productstandard}</td></tr>
         <tr><td><label>Description</label></td><td>{item.description}</td></tr>
         <tr><td><label>Certificate Number</label></td><td>{item.certificatenumber}</td></tr>
         <tr><td><label>Certificate ID</label></td><td>{item.certificateid}</td></tr>
         <tr><td><label>Expiry</label></td><td>{item.expiry}</td></tr>
         </tbody>
          </table>
        );
      });
      break;
     default:

   }
   return (
     <div>
        <Button
         bsStyle="primary"
         bsSize="small"
         onClick={this.open.bind(this)}
       >
         <span className="glyphicon glyphicon-edit"></span>
       </Button>

       <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
         <Modal.Header closeButton>
           <Modal.Title>Details</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {listingDetail}
           </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close.bind(this)}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }
};
