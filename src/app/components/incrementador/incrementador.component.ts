import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
})
export class IncrementadorComponent implements OnInit {

  // para hacer referencia sin importar en que componente este

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;

  // @Input() variables que pueden venir de afuera
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  // voy a emitir un evento que va a ser el cambio de el progreso
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
   // console.log('Progreso', this.progreso);
   }

  ngOnInit() {
  //  console.log('Leyenda', this.leyenda);
   // console.log('Progreso', this.progreso);
  }

   onChanges( newValue: number  ) {

    // console.log( newValue );
    // me devuelve un array con todos los elementos con el name progreso
    const elemHTML: any = document.getElementsByName('progreso')[0];

    // o es 100 o es 0 o un numero entre estos la barra de progreso
    if ( newValue >= 100 ) {
      this.progreso = 100 ;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
    this.progreso = newValue;
    }

    // elemHTML.value = Number( this.progreso );
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

   }

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    // voy a emitir el valor de progreso en ese momento
    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }

}
