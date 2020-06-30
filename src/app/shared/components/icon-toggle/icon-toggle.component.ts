import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-toggle',
  template: `
    <button
      (click)="stateChange()"
      matTooltip="Change Notes Layout"
      mat-icon-button
      type="button"
    >
      <mat-icon>{{ currentState ? onStateIcon : offStateIcon }}</mat-icon>
    </button>
  `,
  styleUrls: [],
})
export class IconToggleComponent implements OnInit {
  @Input() onStateIcon: string;
  @Input() offStateIcon: string;
  @Output() stateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  public currentState = true;

  constructor() {}

  ngOnInit() {}

  stateChange() {
    this.currentState = !this.currentState;
    this.stateChanged.emit(this.currentState);
  }
}
