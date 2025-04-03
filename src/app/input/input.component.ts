import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  template: `
    <div>
      <input type='text' [(ngModel)]='input' (keyup)="sendInput()" />
    </div>
  `,
  styles: ``,
})
export class InputComponent {
  input: string = '';
  
  //EventEmitter object for output binding
 // @Output() output: EventEmitter<string> = new EventEmitter();

  dataService = inject(DataServices);

  sendInput() {
    this.dataService.searchTerm.set(this.input);
    //this.output.emit(this.input);
  }
}
