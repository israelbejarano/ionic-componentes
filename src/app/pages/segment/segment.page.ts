import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataServie: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataServie.getHeroes();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;
    if (valorSegmento === 'todos') {
      this.publisher = '';
      return;
    }
    this.publisher = valorSegmento;
    console.log(valorSegmento);

  }

}
