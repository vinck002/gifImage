import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
private _historial:string[]= [];
private apiKey ="Zg4QodAUnMXSVvRsziawGpfxJahxU8T8";
//TODO: Cambiar any por su tipo
public resultado: any[] =[];
get historial(){
  return [...this._historial];
}

buscarGifs(query:string){
  query = query.trim().toLocaleLowerCase();

  if (this._historial.includes(query)){

    return;
  }
this._historial.unshift(query);
this._historial = this._historial.splice(0,10);
  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=Zg4QodAUnMXSVvRsziawGpfxJahxU8T8&q=${query}&limit=10`)
  .subscribe((resp:any)=>{
this.resultado = resp.data;
  // console.log(resp.data)
  }
  )
}
constructor(private http: HttpClient){}
}
