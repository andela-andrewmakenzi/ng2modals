import { Component, OnInit } from '@angular/core';
import { ModalService } from './../modal/modal.service';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {

  constructor(private ms: ModalService) { }

  ngOnInit() {
  }

  handleClick() {
    this.ms.open('Are you sure you want to perform this action', 'yes', 'no');
  }
}
