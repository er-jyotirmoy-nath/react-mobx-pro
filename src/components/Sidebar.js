import React,{Component} from 'react';

export default class Sidebar extends Component {

    render() {
        return (
          <div id="sidebar-wrapper" style={{"background": "#3f51b5"}}>
             <ul className="sidebar-nav">
                 <li className="sidebar-brand" style={{"color": "#fff"}} className="active">
                     <a href="#/" style={{"color": "#fff"}} >
                         <span className="glyphicon 	glyphicon glyphicon-dashboard"></span>   Treco Admin
                     </a>
                 </li>
                 <li>
                     <a href="#/news">News & Alerts</a>
                 </li>
                 <li>
                     <a href="#/banners">Banners</a>
                 </li>
                 <li>
                     <a href="#/pdcert">UKAS product certification</a>
                 </li>
                 <li>
                     <a href="#/cias">NSF CIAS</a>
                 </li>
                 <li>
                     <a href="#/dtc">BS EN 15092</a>
                 </li>
             </ul>
         </div>
        );
    }
}
