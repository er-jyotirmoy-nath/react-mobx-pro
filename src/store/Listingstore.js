import {observable,computed,action,toJS} from 'mobx';
import querystring  from 'querystring';
import axios from 'axios';
 class Tmv2details {
 	@observable licensee
 	@observable manufacturer
 	@observable mixingValve
	@observable uniqueValveID
	@observable certificateNumbers
	@observable hp_1111
	@observable b
	@observable s
	@observable w
	@observable t
	@observable coldIsol46
	@observable lp_1287
	@observable lb
	@observable ls
	@observable lw
	@observable lt
	@observable t02
	@observable coldIsol46
	@observable comments

	constructor(value){
		this.licensee = (value.MANUFACTURER != null)?value.MANUFACTURER:value.LICENSEE;
		this.manufacturer = value.MANUFACTURER;
		this.mixingValve = value.APPROVED_MIXING_VALVE;
		this.uniqueValveID = value.UNIQUE_ID;
		this.certificateNumbers = value.CERTIFICATE_NUMBER;
		this.hp_1111 = value.HP_1111;
		this.b = value.HPB;
		this.s = value.HPS;
		this.w = value.HPW;
		this.t = value.HPT;
		this.coldIsol46Hp = value.COLD_ISOL_46_HP;
		this.lp_1287 = value.LP_1287;
		this.lb = value.LPB;
		this.ls = value.LPS;
		this.lw = value.LPW;
		this.lt = value.LPT;
		this.t02 = value.LPTX;
		this.coldIsol46Lp = value.COLD_ISOL_46_LP;
		this.comments = value.COMMENTS;
 		}
 }
 class DtcDetails{
	 @observable company
	 @observable description
	 @observable mixingvalve
	 @observable uniqueid
	 @observable certificatenumber
	 @observable certificateid
	 @observable expiry
	 constructor(value){
		 	this.company = value.MANUFACTURER
		  this.description = value.DESCRIPTION_PRODCERT
		  this.mixingvalve = value.APPROVED_MIXING_VALVE
		  this.uniqueid = value.UNIQUE_ID
		  this.certificatenumber = value.CERTIFICATE_NUMBER
		  this.certificateid = value.CERT_ID
		  this.expiry = value.EXPIRY_DATE
	 }
 }
 class CiasDetails{
	 @observable company;
	 @observable description;
	 @observable sizes;
	 @observable certificatenumber;
	 @observable certficateid;
	 constructor(value){
		 	this.company = value.MANUFACTURER
			this.description = value.DESCRIPTION_PRODCERT
			this.sizes = value.SIZES_CIAS
			this.certificatenumber = value.CERTIFICATE_NUMBER
			this.certficateid = value.CERT_ID
	 }
 }
 class PdcertDetails{
	 @observable productstandard
	 @observable description
	 @observable certificatenumber
	 @observable certificateid
	 @observable expiry

	 constructor(value){
		  this.productstandard  = value.PERFORMANCE_STANDARD
			this.description  = value.DESCRIPTION_PRODCERT
			this.certificatenumber  = value.CERTIFICATE_NUMBER
			this.certificateid  = value.CERT_ID
			this.expiry  = value.EXPIRY_DATE
	 }
 }
 class Tmv3Details{
	 @observable factor;
	 @observable mixingvalve;
	 @observable certificate;
	 @observable hpb;
	 @observable hps;
	 @observable hpw;
	 @observable hpt44;
	 @observable hpt46;
	 @observable hpd44;
	 @observable hpd46;
	 @observable lps;
	 @observable lpw;
	 @observable lpt44;
	 @observable lpt46;
	 @observable lpd44;
	 @observable lpd46;
	 @observable comments;
	 constructor(value){
		 	this.factor = value.FACTOR;
			this.mixingvalve = value.APPROVED_MIXING_VALVE;
			this.certificate = value.CERT_ID;
			this.hpb = value.HPB;
			this.hps = value.HPS;
			this.hpw = value.HPW;
			this.hpt44 = value.HPT44;
			this.hpt46 = value.HPT46;
			this.hpd44 = value.HPD44;
			this.hpd46 = value.HPD46;
			this.lps = value.LPS;
			this.lpw = value.LPW;
			this.lpt44 = value.LPT44;
			this.lpt46 = value.LPT46;
			this.lpd44 = value.LPD44;
			this.lpd46 = value.LPD46;
			this.comments = value.COMMENTS;
	 }
 }
class Listingstore {
	@observable tmv2 = [];
	@observable tmvDetails = [];
	@observable tmv3 = [];
	@observable tmv3Details = [];
	@observable dtcDetails = [];
	@observable dtc=[];
	@observable cias = [];
	@observable ciasDetails = [];
	@observable pdcert = [];
	@observable pdcertDetail = [];
	@observable Filter = [];
	@observable filterc=[];
  @observable username='';
  @observable password='';
  @observable checkcertificate='';
	@computed get filterTmv3 (){

		return this.tmv3.filter((item2) => {
			if (this.Filter.length==0) {
					return item2;
			}
			else{
				let item3 = this.Filter.map((item) => {
				let filtername = item.name;
				let filterval = item.value;
						if (item2[filtername] === (filterval)){
							return item2;
						}
			});
			console.log(toJS(item3));
			return item3;
			}
		});
	}
	@computed get filterTmv3_2(){
		let self = this;
		console.log(toJS(this.filterc));
		if (this.filterc.length==0) {
				return this.tmv3;
		}
		else{
			let newtmv3 = [];
			for(var i = 0; i < self.filterc.length; i++) {
				let filtername = self.filterc[i];
				  this.tmv3.filter((item) => {
					if(item[filtername] == '1'){
						newtmv3.push(item);
					}
				});
			}
			console.log(newtmv3.length);
			return newtmv3;
		}
	}
	deleteFilter(name){
		let index = this.filterc.indexOf(name);
		this.filterc.splice(index,1);
	}
	@computed get tmv3Count(){
		return this.tmv3.length;
	}
	createTmv2Detail(value){
		this.tmvDetails.push(new Tmv2details(value));
	}
	createTmv3Detail(value){
		this.tmv3Details.push(new Tmv3Details(value));
	}
	createDtcDetail(value){
		this.dtcDetails.push(new DtcDetails(value));
	}
	createCiasDetail(value){
		this.ciasDetails.push(new CiasDetails(value));
	}
	createPdcertDetail(value){
		this.pdcertDetail.push(new PdcertDetails(value));
	}
	@action getTmv2 = ()=>{
		let self = this;
		let params = new URLSearchParams();
    params.append('filter','yes');
		axios.post('https://wrcnsf.com/listings/php/tmv2_app.php',params)
		.then((value) => {
					self.tmv2 = value.data;
				}).catch((err) => {
					console.log(err);
				});
	}
  @action saveTmv2(send_data){
    axios.post('https://wrcnsf.com/lab_control_v2/alter.php', querystring.stringify(send_data))
    .then((value) => {

    })
    .catch((err) => {console.log(err);})
  }
	@action getTmv2Details = (id)=>{
		axios.get('https://wrcnsf.com/listings/php/tmv2Details.php?BUILD_APP_ID='+id)
				.then((value) => {
					this.createTmv2Detail(value.data[0]);
				}).catch((err) => {console.error(err);});
	}

	@action getDtcDetails(){
		axios.get('https://wrcnsf.com/listings/php/dtcDetails.php?getdtcfiles=get')
				.then((value) => {
					this.dtc = value.data;
				}).catch((err) => {console.error(err);});
	}

	@action getDtcDetail(id){
		axios.get('https://wrcnsf.com/listings/php/dtcDetails.php?BUILD_APP_ID='+id)
				.then((value) => {
					this.createDtcDetail(value.data[0]);
				}).catch((err) => {console.error(err);});
	}
	@action getCiasFiles(){
		axios.get('https://wrcnsf.com/listings/php/ciasDetails.php?getciasfiles=get')
				.then((value) => {
					this.cias = value.data;
				}).catch((err) => {console.error(err);});
	}
	@action getCiasDetail(id){
		axios.get('https://wrcnsf.com/listings/php/ciasDetails.php?BUILD_APP_ID='+id)
				.then((value) => {
					this.createCiasDetail(value.data[0]);
				}).catch((err) => {console.error(err);});
	}
	@action getPdcertFiles(){
		axios.get('https://wrcnsf.com/listings/php/pdCertDetails.php?getpdcertfiles=get')
				.then((value) => {
					this.pdcert = value.data;
				}).catch((err) => {console.error(err);});
	}
	@action getpdCertDetail(id){
		axios.get('https://wrcnsf.com/listings/php/pdCertDetails.php?BUILD_APP_ID='+id)
				.then((value) => {
					this.createPdcertDetail(value.data[0]);
				}).catch((err) => {console.error(err);});
	}
	@action getTmv3(){
		axios.get('https://wrcnsf.com/listings/php/tmv3Details.php?getTmv3Files=get')
		.then((value) => {
					this.tmv3 = value.data;
				}).catch((err) => {
					console.log(err);
				});
	}
	@action getTmv3Details(id){
		axios.get('https://wrcnsf.com/listings/php/tmv3Details.php?BUILD_APP_ID='+id)
		.then((value) => {
					this.createTmv3Detail(value.data[0]);
				}).catch((err) => {
					console.log(err);
				});
	}
  @action loginRequest(username,password){
    let params = new URLSearchParams();
    params.append('username',username);
    params.append('password',password);
    axios.post('https://wrcnsf.com/listings/php/login_app.php',params)
    .then((value) => {
          this.token = value.data;
        }).catch((err) => {
          console.log(err);
        });
  }
  @action checkCertificate(certificate){
    let params = new URLSearchParams();
    params.append('certificate_number',certificate);
    params.append('check_certificate','get');
    axios.post('https://wrcnsf.com/listings/php/listingsManage.php',params)
          .then((value) => {
            this.checkcertificate = value.data;
          })
          .catch((err) => {
            console.error(err);
          });

  }

  @action uploadImage(name){
    let data = new FormData();
    data.append('file', document);
    data.append('image', name);
    axios.post('https://wrcnsf.com/listings/php/listingsManage.php',data)
        .then((value) => {
          console.log(value.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }
}

export default new Listingstore;
