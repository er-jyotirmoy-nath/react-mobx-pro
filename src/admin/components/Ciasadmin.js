import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {saveCiasDetails} from '../../actions/ciasactions';

class Ciasadmin extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  handleCias(e){
    e.preventDefault();
    let send_data = {
        Manufacturer : this.refs.Manufacturer.value,
        description : this.refs.description.value,
        sizes : this.refs.sizes.value,
        Certificate_Letters : this.refs.Certificate_Letters.value,
        certnumber : this.refs.certnumber.value,
        certdate : this.refs.certdate.value
      };
    if (this.refs.Manufacturer.value.trim() != "" &&
        this.refs.Certificate_Letters.value.trim() != "" &&
        this.refs.certnumber.value.trim() != "" &&
        this.refs.certdate.value.trim() != "")
         {
      this.props.saveCiasDetails(send_data);
    }
  }
    render() {
        return (
          <div className="class-name">
          <SplitButton
           bsStyle='success'
           title='Cias Manage'
          >
           <MenuItem eventKey="1" onClick={this.open.bind(this)}>Add Approval</MenuItem>
          </SplitButton>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
            <Modal.Header closeButton>
              <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{'width':'900px'}}>
            <div>
            {this.props.savestatus}<br/>
            <form id="cform" >
                    <table className="table table-bordered">
                      <tbody>
                        <tr><td><b>Company</b></td>
                        <td><input name="Manufacturer" ref="Manufacturer"  type="text" className="textbox" maxLength="100" size="30" /></td></tr>
                        <tr><td><b>Description</b></td>
                        <td><input name="description" ref="description"  type="text" className="textbox" maxLength="100" size="30" /></td></tr>
                        <tr><td><b>Sizes</b></td>
                        <td><input name="sizes" ref="sizes"  type="text" className="textbox" maxLength="100" size="30" /></td></tr>
                        <tr><td><b>Certification ID </b>
                        </td><td>
                        <input name="Certificate_Letters" ref="Certificate_Letters"  type="text" className="textbox" value="BC" size="2" />
                        <input name="certnumber" ref="certnumber"  placeholder="certificate number" type="number" className="textbox" size="10" />
                        <input name="certdate" ref="certdate" placeholder="certificate date"  type="number" className="textbox" size="10" /></td></tr>
                        <tr><td colspan="2"></td></tr>
                      </tbody>
                    </table>
                    <input type="submit" className="btn btn-primary" value="Add Approval" onClick={this.handleCias.bind(this)} />
                </form>
            </div>
              </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
        );
    }
}

function mapStateToProps(state,props) {
  return{
    savestatus:state.savestatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveCiasDetails(send_data){
      dispatch(
        saveCiasDetails(send_data)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ciasadmin)
