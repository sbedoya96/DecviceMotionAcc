import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coordena } from './coordenadas.interface';
@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  
  coor:Coordena;
  url:string = 'https://industrial.api.ubidots.com/api/v1.6/devices/acc_test/?token=BBFF-i3PaAejEPdHrNkBDvkn0nCdCb4bkOd';
  constructor( private http: HttpClient) { 
      


  }

  send(x:string, y:string, z:string){
    
    alert("Sending: x: "+x+ "Sending: y: "+ y +"Sending: z: " + z);
  
    var res = JSON.stringify({ x: x, y: y, z:z });
    alert("json sent: " + res);
    let params = res;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url, params, {headers: headers});



  }
}
