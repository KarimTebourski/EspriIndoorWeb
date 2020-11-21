import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { DemoMaterialModule } from '../shared/demo.module';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent, MatCheckboxDemoNestedChecklistComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListsComponent } from './lists/lists.component';
import { GridComponent } from './grid/grid.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { SelectComponent } from './select/select.component';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    InputComponent,
    CheckboxComponent,
    MatCheckboxDemoNestedChecklistComponent,
    RadioComponent,
    ToolbarComponent,
    ListsComponent,
    GridComponent,
    ProgressComponent,
    TabsComponent,
    ToggleComponent,
    TooltipComponent,
    MenuComponent,
    SliderComponent,
    SnackbarComponent,
    DialogComponent,
    SelectComponent,
    ChipsComponent
  ],
})

export class MaterialComponentsModule {}
