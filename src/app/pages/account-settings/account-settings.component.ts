import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor( public ajustes: SettingsService ) { }

  // cdo la pagina recarge se dispara esta fc que va a revisar cual elemento tiene clase working con el check
  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
    // console.log( link );
    // console.log( tema );

     // estoy pasando el link por referencia a la fc de abajo
     this.aplicarCheck( link );

     this.ajustes.aplicarTema( tema );
  }

  aplicarCheck(link: any ) {

    // arreglo selectores
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck() {
    // arreglo selectores, asi obtengo los #link1, etc
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.ajustes.ajustes.tema;

    for ( const ref of selectores) {
     if ( ref.getAttribute('data-theme') === tema ) {
      ref.classList.add('working');
      break;
     }
    }
  }
}
