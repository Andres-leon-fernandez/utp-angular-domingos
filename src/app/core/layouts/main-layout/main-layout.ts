import { Component } from '@angular/core';
import { Pipe } from "../../../pipe/pipe";
import { Formulario } from "../../../formulario/formulario";

@Component({
  selector: 'app-main-layout',
  imports: [Pipe, Formulario],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
