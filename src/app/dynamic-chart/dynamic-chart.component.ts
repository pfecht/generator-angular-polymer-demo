import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.css']
})
export class DynamicChartComponent implements OnInit {
  cols = [{"label" : "Zeitpunkt", type: "number"}, {"label" : "Messwert", type: "number"}];
  options = {"title": "Livemesswerte"};
  data = [];
  intervalId = -1;
  valueCounter = 0;

  constructor() {}
  
  ngOnInit() {
    while(this.valueCounter < 3) {
      this.data.unshift([this.valueCounter, this.getRandomArbitrary(50,100)]);
      this.valueCounter++;
    }
  }

  toggleInterval() {
    if(this.intervalId >= 0) {
      clearInterval(this.intervalId);
      this.intervalId = -1;
      return;
    }
    this.intervalId = window.setInterval(() => {
      this.data.unshift([this.valueCounter++, this.getRandomArbitrary(0,100)]);
      //this.data = Object.assign([], this.data);
    }, 2000);
  }

  private getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}
