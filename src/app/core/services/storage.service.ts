import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setTheme(): void {
    localStorage.setItem('theme', 'light-theme');
  }

  removeTheme(): void {
    localStorage.removeItem('theme');
  }

  setToggleButtonState(value): void {
    localStorage.setItem('toggleButtonState', JSON.stringify(value));
  }
}
