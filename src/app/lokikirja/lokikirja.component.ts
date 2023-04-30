import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-lokikirja',
  templateUrl: './lokikirja.component.html',
  styleUrls: ['./lokikirja.component.css']
})
export class LokikirjaComponent {
  items: any[] = [];
  textInput: string = "";
  timeStampBlank = '';
  timeStampText = 'Lokimerkintä tehty: ';
  timestamps: Array<string> = [];

  constructor(private storage: LocalStorageService) {}

  ngOnInit() {
    // get items from local storage on component initialization
    this.items = this.storage.retrieve('items') || [];
    this.timestamps = this.storage.retrieve('times') || [];

  }

  // ads item from text input to local array
  addItem(inputValue : string) {
    this.items.push(inputValue);
    this.storage.store('items', this.items);
    this.textInput = '';
  }

  // ads timestamp to array
  addTimestamp() {
    const currentTimestamp = new Date().toISOString();
    this.timestamps.push(currentTimestamp);
    this.storage.store('times', this.timestamps);
    this.timeStampBlank = this.timeStampText;
  }

  removeItem() {
    // remove last item from local storage and update component's item list
    this.items.pop();
    this.timestamps.pop();
    this.storage.store('items', this.items);
    this.storage.store('times', this.timestamps);
  }

  // check input and show alert, else run functions
  showAlert = false;
  checkInput() {
    if (this.textInput === '') {
      this.showAlert = true;
    } else {
      this.addTimestamp();
      this.addItem(this.textInput);
      this.showAlert = false;
    }
  }
}
