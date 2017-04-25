import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';
import { MdDialog, MdDialogRef} from '@angular/material';

@Injectable()
export class ModalService {
  dialogref: MdDialogRef<ModalComponent>;
  constructor(private ds: MdDialog) { }

  open(msg: string, option1: string, option2: string) {
    console.log(`${msg} ${option1} ${option2}`);
  }

}
