import { Component } from '@angular/core';

@Component({
  selector: 'app-tablero-cursos',
  templateUrl: './tablero-cursos.component.html',
  styleUrls: ['./tablero-cursos.component.css']
})
export class TableroCursosComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
