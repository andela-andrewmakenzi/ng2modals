import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';
import { MdDialog, MdDialogRef} from '@angular/material';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ModalService {
  dialogref: MdDialogRef<ModalComponent>;
  constructor(private dialog: MdDialog) { }

  open(msg: string, option1: string, option2: string): Observable<Boolean> {
    this.dialogref = this.dialog.open(ModalComponent);
    this.dialogref.componentInstance.msg = msg;
    this.dialogref.componentInstance.option1 = option1;
    this.dialogref.componentInstance.option2 = option2;

    return this.dialogref.afterClosed();
  }

}
