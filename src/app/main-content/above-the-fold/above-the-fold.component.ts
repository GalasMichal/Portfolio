import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranlateModule } from '../../tranlate/tranlate.module';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [HttpClientModule, TranlateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {






}
