import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class': 'col-md-4 col-sm-12'}
})
export class NewCardInputComponent implements OnInit {

  @Output() onCardAdd = new EventEmitter<string>();

  @ViewChild('inputText') public inputText: NgModel;

  public newCard: any = {text: ''};

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const isEnterKey = (event.code === "Enter" || event.code === 'NumpadEnter');

    if (isEnterKey && !this.inputText.errors) {
      this.addCard(this.newCard.text);
    }

  }

  addCard(text: string) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }

}
