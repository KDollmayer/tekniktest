import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  enteredName = '';
  enteredPrice = '';
  enteredWeight = '';
  enteredDesc = '';
  constructor() {}

  ngOnInit(): void {}

  addProduct() {
    console.log(
      this.enteredName,
      this.enteredDesc,
      this.enteredPrice,
      this.enteredWeight
    );
  }
}
