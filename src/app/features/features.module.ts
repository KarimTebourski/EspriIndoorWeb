import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule} from 'ngx-color-picker';
import { DragulaModule } from 'ng2-dragula';
import { SortablejsModule, SortablejsOptions} from "ngx-sortablejs";
import { ResizableModule } from 'angular-resizable-element';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from '../shared/demo.module';

import { CropperComponent}  from './image-cropper/image-cropper.component';
import { ColorPickerComponent}  from './color-picker/color-picker.component';
import { DragulaDemoComponent}  from './dragula/dragula.component';
import { SortableDemoComponent}  from './sortablejs/sortable.component';

import { FeaturesRoutes } from './features.routing';

const sortablejsConfig: SortablejsOptions = {
  animation: 300
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    ResizableModule,
    DragulaModule.forRoot(),
    SortablejsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    RouterModule.forChild(FeaturesRoutes)
  ],
  declarations: [ 
    CropperComponent,
    ColorPickerComponent,
    DragulaDemoComponent,
    SortableDemoComponent
  ]
})

export class FeaturesModule {}
