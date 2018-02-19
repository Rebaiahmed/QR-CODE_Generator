import React, { Component } from 'react';

import firebase from 'firebase';
import { browserHistory,hashHistory } from 'react-router'
import axios from 'axios' ;
import {provider, auth , storageKey } from './client';
import './index.css';
import openSocket from 'socket.io-client';
import NavBarComponent  from './Navbar';


class ChatBot extends Component {







    constructor() {
       super();
       this.state = {
         response: false,
         endpoint: "http://127.0.0.1:9000",
         messages :[] ,
         message :'',
         img :'',
         num :''
       };
  //this.socket = openSocket('http://localhost:9000');

  //this.handleMsg = this.handleMsg.bind(this);
      this.handleChange = this.handleChange.bind(this);
     this.handleNom = this.handleNom.bind(this);
     this.handleNum = this.handleNum.bind(this);
     this.handleCin = this.handleCin.bind(this);
     this.handleTypeSang = this.handleTypeSang.bind(this);
     this.handleBirthSate =  this.handleBirthSate.bind(this);
     this.onFormSubmit = this.onFormSubmit.bind(this);
  }






//***********************************************//


   componentDidMount() {



}


/****************send a Message***************/





    handleNom(event) {
        this.setState({nom: event.target.value});
      }

    //************************* */
    handleCin(event) {
        this.setState({cin: event.target.value});
      }
    //*********************** */


    handleTypeSang(event) {
        this.setState({type_sang: event.target.value});
      }


      //*********************** */

      handleNum(event) {
        this.setState({num: event.target.value});
      }

      handleChange(event) {
        this.setState({nom: event.target.value});
      }


      handleBirthSate(event) {
              this.setState({birthday: event.target.value});
            }


            handleTypeSang(event) {
                    this.setState({type_sang: event.target.value});
                  }


//*************************************************//
//*******************************************//

      onFormSubmit (e)  {
        e.preventDefault();
        console.log('onFormSubmit', e)

        axios.post('http://localhost:9000/QR', {
            nom : this.state.nom ,
            cin : this.state.cin ,
            num : this.state.num ,
            birthday : this.state.birthday,
            type_sang : this.state.type_sang
          })
          .then(function (response) {
            console.log(JSON.stringify(response));

       console.log(response.data.user.num);
        //********Get the image******************
      this.setState({ 'img' :response.data.user.num })
              //this.setState({events: response.data})
        /*axios.post('http://localhost:9000/users', {
          id : responChatBotse.data.user.id
          })
          .then(function (response) {
            console.log("hget image" + response);
          })
          .catch(function (error) {
            console.log(error);
          });*/











        }.bind(this))
          .catch(function (error) {
            console.log(error);
          });

//*****************get the images ********************//







};





  render() {

const { img} = this.state ;

console.log("img " + img);
  let source = '../images/'+ img +'.png';
  console.log(source);
let button = null;
  button = <img src={ source } className="img-fluid" alt="Responsive image" />
  if (img) {
    button = <img src={source} className="img-fluid" alt="Responsive image" />
  } else {
    button = <img src="./images/456.png" className="img-fluid" alt="Responsive image" />
  }

    return (
      <div className="container">

<NavBarComponent />
        <div className="row">
          <div className="col-lg-6">
            <br/><br/>

            <div className="row">
              <div className="col-lg-12">

              <h3> Ajouter Patient </h3>

              <form onSubmit={ this.onFormSubmit }>




        <div class="form-group">
                           <label for="confiance">Numéro de Confiance</label>
                           <input type="text" className="form-control" id="confiance" value={this.state.num}
                           onChange={this.handleNum}/>
           </div>


           <div class="form-group">
             <label for="name">Nom</label>
             <input type="text" className="form-control" id="name" value={this.state.nom}
             onChange={this.handleNom} />
           </div>

           <div class="form-group">
             <label for="cin">CIN</label>
             <input type="text" className="form-control" id="cin" value={this.state.cin}
             onChange={this.handleCin} />
           </div>

           <div class="form-group">
             <label for="birthday">Date naissance</label>
             <input type="date" className="form-control" id="birthday"
             value={this.state.birthday} />
           </div>




           <div className="form-group">
             <label for="bloodtype">Type de sang</label>
             <div className="radio">
             <label><input onChange={this.handleTypeSang} type="radio" name="optradio" value={this.state.type_sang} />A</label>
             </div>
              <div className="radio">
             <label><input onChange={this.handleTypeSang} type="radio" name="optradio" value={this.state.type_sang} />B</label>
              </div>

           </div>




           <button type="submit" className="btn btn-default" >Génere le QR code</button>
         </form>


              </div>
            </div>







             </div>



      <div className="col-lg-6">

      <br />
      <br />
      <br />
      <br />

<h3> Affichage De  image </h3>


{   button }

      </div>






      </div>















          </div>




    );
  }
}

export default ChatBot;
