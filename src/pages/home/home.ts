import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeporteServicesProvider } from '../../providers/deporte-services/deporte-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  deporte: String[];
  token: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public deporteServices: DeporteServicesProvider) {
      this.token = navParams.get('token');

  }
  ngOnInit() {
    this.getDeportes();
  }
  getDeportes() {
    this.deporteServices.getDeporte(this.token).then((dpt) => {
      let respuesta = JSON.parse(dpt["_body"]);
      this.deporte = respuesta.deporte;
    }).catch((err) => {
      console.log(err);
    })
  }
}