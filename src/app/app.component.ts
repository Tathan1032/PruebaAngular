import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'holaMundo';

  texto : string = '"El diligenciamiento del Formulario SARLAFT está pendiente por gestionar, por favor ingrese al siguiente enlace[$LINK$]https:\/\/sarlaft.labsura.com\/redirect\/iniciar-proceso\/CA684055AA56454B4A6755A108FEDD261DE1F68A316B10D22A0A6401CC114B15","Se';

  textoLimpio : string = this.texto.replace('\/','/');

  expresion = /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#]?[\w-]+)*\/?/gm;

  direccion = this.textoLimpio.match(this.expresion);

}
