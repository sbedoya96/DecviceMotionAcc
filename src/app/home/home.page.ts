import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SendDataService } from '../send-data.service';
//import { start } from 'repl';
//import {DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Coordena } from '../coordenadas.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  x:string ;
  y:string;
  z:string;
  timeStamp:string;
  id:any;
  coor:Coordena;
  constructor(public navCtrl: NavController, private deviceMotion: DeviceMotion, private serv: SendDataService) {

   
    
  }

  ngOnInit() {
    try {
      var option: DeviceMotionAccelerometerOptions = {
        frequency: 200
      };
      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc:DeviceMotionAccelerationData)=>{
         this.x= ""+ acc.x;
         this.y= ""+ acc.y;
           this.z= ""+ acc.z;
         this.timeStamp= ""+ acc.timestamp; 
      // alert(acc.y);
        

      })

     
     

  }
  catch(err){
    alert('err' + err);
  }
  }

  start() {
    this.serv.send(this.x, this.y,this.z ).subscribe(
      res => {
        console.log("realizado");
      }
    );
  }
  stop(){
    this.id.unsubscribe();
  }
}

