import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EcommerceProductComponent } from './ecommerce-product/ecommerce-product.component';
import { EcommerceProductDetailComponent } from './ecommerce-product-detail/ecommerce-product-detail.component';
import { EcommerceCartComponent } from './ecommerce-cart/ecommerce-cart.component';
import { EcommerceCheckoutComponent } from './ecommerce-checkout/ecommerce-checkout.component';
import { EcommerceRoutes } from './ecommerce.routing';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(EcommerceRoutes)
  ],
  declarations: [ 
    EcommerceProductComponent,
    EcommerceProductDetailComponent,
    EcommerceCartComponent,
    EcommerceCheckoutComponent
  ]
})

export class EcommerceDemoModule {}
