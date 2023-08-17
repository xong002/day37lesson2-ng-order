import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent {
  // fb!: FormBuilder;
  itemArray! : FormArray
  orderForm!: FormGroup
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.itemArray = this.fb.array([]);
    this.orderForm = this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('',[Validators.required, Validators.email]),
      express: this.fb.control<boolean>(false),
      itemArray: this.itemArray
    })
    this.addItemRow();
  }

  addItemRow(){
    const itemGroup = this.fb.group({
      itemName: this.fb.control<string>('', [Validators.required]),
      quantity: this.fb.control<number>(0, [Validators.required]),
      unitPrice: this.fb.control<number>(0, [Validators.required])
    })
    this.itemArray.push(itemGroup);
  }

  removeRow(rowIndex : number){
    this.itemArray.removeAt(rowIndex);
  }

  processForm(){
    console.log(this.orderForm);
  }

}
