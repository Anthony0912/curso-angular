import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container {
    height: 100%;
    width: 100%;
  }

  .row {
    background-color: white;
    border-radius: 5px;
    bottom: 50px;
    left: 50px;
    padding: 10px;
    position:fixed;
    z-index: 99999;
    width:400px;
  }
  `]
})

export class ZoomRangeComponent implements OnInit, AfterViewInit, OnDestroy {

  public zoomLevel: number = 18;
  public center: [number, number] = [-84.672772, 10.966491];
  public map!: mapboxgl.Map;

  constructor() { }
  
  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    this.map.on('move', (ev) => {
      const target = ev.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
  }


  public zoomOut(): void {
    this.map.zoomOut()
  }

  public zoomIn(): void {
    this.map.zoomIn()
  }

  public zoomChange(value: string): void {
    this.map.zoomTo(Number(value))
  }

}
