import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public customer: CustomerService,
              private dialogRef: MatDialogRef<FormComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
  }

  onSaveForm() {
    if (this.customer.selected.id == null) {
      const newCustomer = {
        name: this.customer.selected.name,
        city: this.customer.selected.city,
        order: this.customer.selected.order
      };
      this.customer.addCustomer(newCustomer);

    } else {
      this.customer.editCustomer(this.customer.selected);
    }
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
