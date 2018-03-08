import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {fetchAllNews,deleteNews} from '../actions/newsactions';
import Newsadmin from '../admin/components/Newsadmin';
import Viewdetails from './viewDetails';
class News extends Component {
    componentDidMount() {
      this.props.fetchAllNews();
    }
    render() {

      let newsdetails = this.props.news[0];let self = this;
      function imageView(cell, row){
        return <Viewdetails imgsrc={cell} content={row.content} type='news' />
        //return <span><img src={cell} style={{'width':'30%'}} /></span>;
      }
      function deleteButton(cell, row){
        return <button className="btn btn-primary" onClick={(e)=>{
            self.props.deleteNews(cell)
          }}><span className="glyphicon glyphicon-trash"></span></button>
      }
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-user"></span> Treco News  {this.props.saveStatus}</h3>
                         <hr/>
                     </div>
                 </div>
                 <div className="row">
                   <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#3f51b5"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#3f51b5 !important","borderColor": "#3f51b5"}}>
                                 Manage News Panel
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>

                               <Newsadmin />
                               <BootstrapTable data={newsdetails} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="id"  isKey={true}  dataSort={true}>Id</TableHeaderColumn>
                                                <TableHeaderColumn dataField="title"  dataSort={true}>Title</TableHeaderColumn>
                                                <TableHeaderColumn dataField="date_news"  dataSort={true} >Date</TableHeaderColumn>

                                                <TableHeaderColumn dataField="image_url"   dataSort={true} dataFormat={imageView} >View Image</TableHeaderColumn>
                                                <TableHeaderColumn dataField="id"   dataSort={true} dataFormat={deleteButton} >Delete</TableHeaderColumn>
                              </BootstrapTable>

                             </div>

                         </div>

                     </div></div>

         </div>
        );
    }
}

function mapStateToProps(state) {
  return{
    news:state.newsall.news,
    saveStatus:state.saveStatus
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAllNews(){
      dispatch(
        fetchAllNews()
      )
    }
    ,
    deleteNews(id){
      dispatch(
        deleteNews(id)
      )
    }
  }
}
 export default connect(mapStateToProps,mapDispatchToProps)(News);
