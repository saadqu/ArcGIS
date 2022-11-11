import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'EsriMaps';
  public featureLayer: string = `${environment.serverUrl}SampleWorldCities/MapServer/0`
}
