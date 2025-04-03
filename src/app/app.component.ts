import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { DataServices } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent],
  template: `
      <h1>Angular Signal Demo</h1>
    <div>
    <app-input></app-input> 
    </div>
    @for(item of filteredItems(); track item){
      <div>{{item}}</div>
    }
   <!-- <button (click) = "onClick()">Increment</button>
   <p>The quantity is: {{quantity()}} -->
  `,
  styles: ``
})
export class AppComponent {
  
  //quantity = signal<number>(0)

  dataService: DataServices = inject(DataServices);

  items: string[] = [];

  //onClick() {
  //  this.quantity.update(item => item + 1)
  //}

  ngOnInit() {
    this.fetchItems();
  }

  filteredItems = computed(() => this.items.filter(
    item => item.toLowerCase().includes(this.dataService.searchTerm().toLowerCase())
  ))

  //event handler function called when EventEmitter object 'output'
  //emits a value through output binding
  //receiveInput(msg:string){
    //if(msg == "")
      //this.fetchItems();
    //this.items = this.items.filter(item => item.includes(msg))
  //}
  //helper method to fetch items from DataService
  fetchItems(){
    this.items = this.dataService.getData();
  }
}
