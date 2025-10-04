import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./core/components/footer/footer";
import { Header } from "./core/components/header/header";
import { MainLayout } from "./core/layouts/main-layout/main-layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('utp-angular-domingos');
}
