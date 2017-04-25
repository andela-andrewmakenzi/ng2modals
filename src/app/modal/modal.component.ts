import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  msg: string;
  option1: string;
  option2: string;

  constructor(public dialogRef: MdDialogRef<ModalComponent>) { }

  ngOnInit() {
  }

}
