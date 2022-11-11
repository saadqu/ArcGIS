import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.scss']
})
export class EsriMapComponent implements OnInit {

  @Input() featureLayerURL: string = '';
  private myMap: Map = new Map();
  constructor() {
    esriConfig.apiKey = environment.esriApiKey;
  }

  ngOnInit(): void {
    this.loadMap()
  }

  loadMap() {
    this.myMap = new Map({
      basemap: "arcgis-topographic"
    });
    
    const view = new MapView({
      map: this.myMap,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 3, // Zoom level
      container: "viewDiv" // Div element
    });
    
    const featureLayer = new FeatureLayer({
      url: this.featureLayerURL
    });
    this.myMap.add(featureLayer);
  }

}
