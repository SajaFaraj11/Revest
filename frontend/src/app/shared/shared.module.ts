import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    DropdownModule,
    RadioButtonModule
  ],
  exports:
    [ToastModule,
      DropdownModule,
      ReactiveFormsModule,
      RadioButtonModule
    ],
  providers: [MessageService],

})
export class SharedModule { }
