import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { IconToggleComponent } from './icon-toggle.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [IconToggleComponent],
  exports: [IconToggleComponent],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
})
export class IconToggleModule {}
