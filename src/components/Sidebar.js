import React,{Component} from 'react';

export default class Sidebar extends Component {

    render() {
        return (
          <div id="sidebar-wrapper" style={{"background": "#2196f3"}}>
             <ul className="sidebar-nav">
                 <li className="sidebar-brand" style={{"color": "#fff"}} className="active">
                     <a href="#/" style={{"color": "#fff"}} >
                         <span className="glyphicon 	glyphicon glyphicon-th-list"></span>   Listings
                     </a>
                 </li>
                 <li>
                     <a href="#/tmv2">NSF TMV2</a>
                 </li>
                 <li>
                     <a href="#/tmv3">NSF TMV3</a>
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

                 <li>
                     <a href="#/admin">Admin</a>
                 </li>
             </ul>
         </div>
        );
    }
}
