import React,{Component} from 'react';
import {connect} from 'react-redux';
//Local Imports
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {fetchtmv2Details,fetchDtcDetails,fetchCiasDetails,fetchCertDetails} from '../actions/actioncreators';
import {fetchtmv3Details} from '../actions/tmv3actions';
class viewDetails extends Component {
 constructor(props){
           super(props);
           this.state = { showModal: false, listingDetail:'' };
           this.close = this.close.bind(this);
           this.open = this.open.bind(this);
       }

 close() {
   this.setState({ showModal: false });

 }

 open() {
   let self = this;
   this.setState({ showModal: true },()=>{
     switch (this.props.type) {
       case 'tmv2':
         self.props.getTmv2Details(this.props.id);
         break;
       case 'tmv3':
         self.props.getTmv3Details(this.props.id);
       case 'dtc':
        self.props.getDtcDetail(this.props.id);
        break;
       case 'cias':
        self.props.getCiasDetail(this.props.id);
        break;
       case 'pdcert':
        self.props.getpdCertDetail(this.props.id);
        break;
       default:

     }
   });

 }

 render() {
   let listingDetail = 'Loading...';
   switch (this.props.type) {
     case 'tmv2':

     let tmv2detail = this.props.tmv2file[0];
     listingDetail =
         (tmv2detail)?<table className="table table-bordered" >
         <tbody>
        <tr><td><label>Licensee</label></td><td>{tmv2detail.LICENSEE}</td></tr>
        <tr><td><label>Manufacturer</label></td><td>{tmv2detail.MANUFACTURER}</td></tr>
        <tr><td><label>Mixing Valve</label></td><td>{tmv2detail.APPROVED_MIXING_VALVE}</td></tr>
        <tr><td><label>Unique Valve ID</label></td><td>{tmv2detail.UNIQUE_ID}</td></tr>
        <tr><td><label>Certificate Numbers</label></td><td>{tmv2detail.CERTIFICATE_NUMBER}</td></tr>
        <tr><td><label>HP_1111</label></td><td>{tmv2detail.HP_1111}</td></tr>
        <tr><td><label>B</label></td><td>{tmv2detail.HPB}</td></tr>
        <tr><td><label>S</label></td><td>{tmv2detail.HPS}</td></tr>
        <tr><td><label>W</label></td><td>{tmv2detail.HPW}</td></tr>
        <tr><td><label>T</label></td><td>{tmv2detail.HPT}</td></tr>
        <tr><td><label>Cold Isol 46</label></td><td>{tmv2detail.COLD_ISOL_46_HP}</td></tr>
        <tr><td><label>LP_1287</label></td><td>{tmv2detail.LP_1287}</td></tr>
        <tr><td><label>B</label></td><td>{tmv2detail.LPB}</td></tr>
        <tr><td><label>S</label></td><td>{tmv2detail.LPS}</td></tr>
        <tr><td><label>W</label></td><td>{tmv2detail.LPW}</td></tr>
        <tr><td><label>T</label></td><td>{tmv2detail.LPT}</td></tr>
        <tr><td><label>T 0.2</label></td><td>{tmv2detail.LPTX}</td></tr>
        <tr><td><label>Cold Isol 46</label></td><td>{tmv2detail.COLD_ISOL_46_LP}</td></tr>
        <tr><td><label>Comments</label></td><td>{tmv2detail.COMMENTS}</td></tr>
        </tbody>
      </table>:"";


       break;
     case 'tmv3':
      let tmv3Details = this.props.tmv3file[0];
       listingDetail =
           (tmv3Details)?<table className="table table-bordered" >
           <tbody>
          <tr><td><label>Factor</label></td><td>{tmv3Details.FACTOR}</td></tr>
          <tr><td><label>Mixing Valve</label></td><td>{tmv3Details.APPROVED_MIXING_VALVE}</td></tr>
          <tr><td><label>Certificate </label></td><td>{tmv3Details.CERTIFICATE_NUMBER}</td></tr>
          <tr><td><label>HPB</label></td><td>{tmv3Details.HPB}</td></tr>
          <tr><td><label>HPS</label></td><td>{tmv3Details.HPS}</td></tr>
          <tr><td><label>HPW</label></td><td>{tmv3Details.HPW}</td></tr>
          <tr><td><label>HPT44</label></td><td>{tmv3Details.HPT44}</td></tr>
          <tr><td><label>HPT46</label></td><td>{tmv3Details.HPT46}</td></tr>
          <tr><td><label>HPD44</label></td><td>{tmv3Details.HPD44}</td></tr>
          <tr><td><label>HPD46</label></td><td>{tmv3Details.HPD46}</td></tr>
          <tr><td><label>LPS</label></td><td>{tmv3Details.LPS}</td></tr>
          <tr><td><label>LPW</label></td><td>{tmv3Details.LPW}</td></tr>
          <tr><td><label>LPT44</label></td><td>{tmv3Details.LPT44}</td></tr>
          <tr><td><label>LPT46</label></td><td>{tmv3Details.LPT46}</td></tr>
          <tr><td><label>LPD44</label></td><td>{tmv3Details.LPD44}</td></tr>
          <tr><td><label>LPD46</label></td><td>{tmv3Details.LPD46}</td></tr>
          <tr><td><label>Comments</label></td><td>{tmv3Details.COMMENTS}</td></tr>
          </tbody>
        </table>:"";

         break;
    case 'dtc':
    listingDetail = this.props.dtcfile.map((item,i) => {
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
    listingDetail = this.props.ciasfile.map((item,i) => {
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
      listingDetail = this.props.pdcertfile.map((item,i) => {
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

       <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
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

function mapStateToProps(state) {
  return{
    tmv2file:state.tmv2all.tmv2file,
    tmv3file:state.tmv3all.tmv3file,
    dtcfile:state.ciasall.ciasfile,
    ciasfile:state.dtcall.dtcfile,
    pdcertfile:state.pdcertall.pdcertfile
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getTmv2Details(id){
      dispatch(
        fetchtmv2Details(id)
      )
    },
    getTmv3Details(id){
      dispatch(
        fetchtmv3Details(id)
      )
    },
    getDtcDetail(id){
      dispatch(
        fetchDtcDetails(id)
      )
    },
    getCiasDetail(id){
      dispatch(
        fetchCiasDetails(id)
      )
    },
    getpdCertDetail(id){
      dispatch(
        fetchCertDetails(id)
      )
    },

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(viewDetails);
