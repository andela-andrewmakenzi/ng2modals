import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  handleClick() {
    this.dialog.open(ModalComponent, {
       height: 'auto',
       width: '25%',
       disableClose: false,
       data: {
          message: 'Are you sure you want to proceed with this action',
          option1: 'Cancel',
          option2: 'Yes'
       }
    }).afterClosed().subscribe((result) => {
      if (result) {
        console.log('you said yes');
      }
    });
  }
}
