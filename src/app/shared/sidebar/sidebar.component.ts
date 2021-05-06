import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  get historial() {
    return this.gifsServices.historial;
  }

  constructor( private gifsServices: GifsService) { }

  buscar( termino: string ) {
    this.gifsServices.buscarGifs(termino);
  }

  ngOnInit(): void {
  }

}
