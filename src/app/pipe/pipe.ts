import { Component } from '@angular/core';
import { UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe} from '@angular/common';;
@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {
  mensajito="sesion 2 de angular - utp";
  fecha = new Date();
}
