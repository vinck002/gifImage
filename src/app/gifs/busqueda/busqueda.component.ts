import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtbuscar') txtBuscar!:ElementRef<HTMLInputElement>;
   constructor(private gifsService: GifsService) {  
   
     }
   

  ngOnInit(): void { }
  Buscar(){
    const valor =this.txtBuscar.nativeElement.value
    
    this.gifsService.buscarGifs(valor);
    console.log(this.gifsService.historial);
    this.txtBuscar.nativeElement.value = '';

    
  }
}
