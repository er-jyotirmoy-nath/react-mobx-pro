import React,{Component} from 'react';
//import blogo from './img/Buildcert.jpg';
export default class Home extends Component {

    render() {
        return (
          <div className="container-fluid">
                <hr/>
                <div className="row slideanim slide">
                    <div className="row">
                        <div className="col-md-4"></div><div className="col-md-4">
                            <div className="panel panel-default" style={{"borderColor": "#9e9e9e"}}>
                                <div className="panel-heading2"
                                style={{"backgroundColor": "#9e9e9e !important","borderColor":"#9e9e9e","textAlign": "center",
                                "padding":"5px","fontWeight": "bold","color": "white","fontSize":"20px"}}>
                                    Check Listings for the Former BuildCert Program
                                </div>
                                <div className="panel-body" style={{"minHeight":"170px","textAlign":"center"}}>
                                    <p>
                                        <a href="#/pdcert" ><img className=" img-responsive img-center" src="img/Buildcert.jpg" style={{"height": "130px"}} /></a>
                                    </p>
                                </div>

                            </div>

                        </div><div className="col-md-4"></div>
                    </div>

                    <div className="col-lg-3 col-sm-6 text-center">
                        <div className="panel panel-default" style={{"borderColor":"#9e9e9e"}}>
                            <div className="panel-heading2" style={{"backgroundColor": "#9e9e9e !important","borderColor":"#9e9e9e","textAlign": "center",
                            "padding":"5px","fontWeight": "bold","color": "white","fontSize":"20px"}}>

                            </div>
                            <div className="panel-body" style={{"minHeight":"170px"}}>
                                <p>
                                    <a href="#/tmv2" ><img className="img-circle img-responsive img-center" src="/img/tmv2.jpg" style={{"height": "130px"}} /></a>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-3 col-sm-6 text-center">

                        <div className="panel panel-default" style={{"borderColor": "#9e9e9e"}}>
                            <div className="panel-heading2" style={{"backgroundColor": "#9e9e9e !important","borderColor":"#9e9e9e","textAlign": "center",
                            "padding":"5px","fontWeight": "bold","color": "white","fontSize":"20px"}}>

                            </div>
                            <div className="panel-body" style={{"minHeight":"170px"}}>
                                <p>
                                    <a href="#/tmv3" ><img className="img-circle img-responsive img-center" src="/img/tmv3.jpg" style={{"height": "130px"}} /></a>
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 text-center">


                        <div className="panel panel-default" style={{"borderColor": "#9e9e9e"}}>
                            <div className="panel-heading2" style={{"backgroundColor": "#9e9e9e !important","borderColor":"#9e9e9e","textAlign": "center",
                            "padding":"5px","fontWeight": "bold","color": "white","fontSize":"20px"}}>

                            </div>
                            <div className="panel-body" style={{"minHeight":"170px"}}>
                                <p>
                                    <a href="#/cias" > <img className="img-circle img-responsive img-center" src="/img/CI_Logo.jpg" style={{"height": "130px"}} /></a>
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6 text-center">

                        <div className="panel panel-default" style={{"borderColor": "#9e9e9e"}}>
                            <div className="panel-heading2" style={{"backgroundColor": "#9e9e9e !important","borderColor":"#9e9e9e","textAlign": "center",
                            "padding":"5px","fontWeight": "bold","color": "white","fontSize":"20px"}}>

                            </div>
                            <div className="panel-body" style={{"minHeight":"170px"}}>
                                <p>
                                    <a href="#/dtc" >  <img className="img-circle img-responsive img-center" src="/img/dtc.jpg" style={{"height": "130px"}} /></a>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
