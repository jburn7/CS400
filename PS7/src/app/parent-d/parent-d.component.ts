// Method 4, emit an event on button click from child, listen for it in parent

import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../services/quote.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-parent-d',
  template: '<form [formGroup]="quote" (ngSubmit)="getQuotes()">\n' +
    '  <input type="text" formControlName="author" required><br/>\n' +
    '  <button type="submit">Get Quotes</button>\n' +
    '</form>' +
    '<app-child-d *ngFor="let q of quoteList" [quote]="q.quote"></app-child-d>',
  styleUrls: ['./parent-d.component.css']
})
export class ParentDComponent implements OnInit {

  constructor(public qx: QuoteService) {
  }

  quoteList: [{}];

  quote: FormGroup = new FormGroup(
    {
      author: new FormControl('Rumi', [Validators.required, Validators.minLength(1)]),
    }
  );
  quoteOptions: {};

  ngOnInit(): void {
  }

  getQuotes() {
    console.log('getting quotes');
    this.quoteOptions = {
      author: this.quote.get('author').value,
    };

    this.qx.getQuote(this.quoteOptions).subscribe(
      response => {
        console.table(response);
        // @ts-ignore
        this.quoteList = response;
      }

    );
  }

}

