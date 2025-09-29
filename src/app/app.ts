import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteFooter } from "./componente-footer/componente-footer";
import { ComponenteInicio } from "./componente-inicio/componente-inicio";
import { ComponenteHeader } from "./componente-header/componente-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteFooter, ComponenteInicio, ComponenteHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('utp-angular-domingos');
}
