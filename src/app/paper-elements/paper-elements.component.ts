import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'paper-elements',
  templateUrl: 'paper-elements.component.html',
  styleUrls: ['paper-elements.component.css'],
})
export class PaperElementsComponent implements OnInit {
  paperProgressTimoutId : number;

  ngOnInit() {
    this.paperProgressTimoutId = window.setInterval(() => {
      if(this.value.paperProgress >= 100) {
        window.clearTimeout(this.paperProgressTimoutId);
        return;
      }
      this.value.paperProgress += 1;
    }, 100);
  }

  label = {
      paperInput : 'Paper Input'
  };

  value = {
    paperInput : 'Default Value of Paper Input',
    paperTabsSelected : 0,
    paperDropdown : 0,
    paperProgress : 0
  }
}
