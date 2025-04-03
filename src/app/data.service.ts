import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServices {
  private data: string[] = ['Angular', 'React', 'Vue', 'Svelte', 'Solid', 'Bootstrap', 'Tailwind CSS', 'Material', 'Chakra', 'Ant'];

  searchTerm = signal<string>('');

  getData(): string[] {
    return this.data;
  }
}
