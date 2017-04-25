import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  msg: string;
  option1: string;
  option2: string;

  constructor(public dialogRef: MdDialogRef<ModalComponent>, @Inject(MD_DIALOG_DATA) data: any ) {
      this.msg = data.message;
      this.option1 = data.option1;
      this.option2 = data.option2;
    }

  ngOnInit() {
  }

}
