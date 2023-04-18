import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template-routing.module';

import { CustomMinDirective } from './directives/custom-min.directive';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { CustomTrimLengthDirective } from './directives/custom-trim-length.directive';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective,
    CustomTrimLengthDirective
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemplateModule { }
