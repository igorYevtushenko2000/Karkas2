import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponentAbComponent } from './login/login-form-component-ab/login-form-component-ab.component';
import { NavComponentBaComponent } from './general/nav-component-ba/nav-component-ba.component';
import { MainLayoutComponentBaComponent } from './general/main-layout-component-ba/main-layout-component-ba.component';
import { ProductBarComponentCaComponent } from './products/product-bar-component-ca/product-bar-component-ca.component';
import { ProductsListComponentCbComponent } from './products/products-list-component-cb/products-list-component-cb.component';
import { FilterComponentCcComponent } from './products/filter-component-cc/filter-component-cc.component';
import { ProductInfoBarComponentCdComponent } from './products/product-info-bar-component-cd/product-info-bar-component-cd.component';
import { ProductPriceBarComponentCeComponent } from './products/product-price-bar-component-ce/product-price-bar-component-ce.component';
import { ProductNumBarComponentCfComponent } from './products/product-num-bar-component-cf/product-num-bar-component-cf.component';
import { ProductAddPageComponentCgComponent } from './products/product-add-page-component-cg/product-add-page-component-cg.component';
import { ProductAddFormComponentChComponent } from './products/product-add-form-component-ch/product-add-form-component-ch.component';
import { GroupBarComponentDaComponent } from './groups/group-bar-component-da/group-bar-component-da.component';
import { GroupPageComponentDbComponent } from './groups/group-page-component-db/group-page-component-db.component';
import { GroupInfoBarComponentDdComponent } from './groups/group-info-bar-component-dd/group-info-bar-component-dd.component';
import { GroupAddPageComponentDeComponent } from './groups/group-add-page-component-de/group-add-page-component-de.component';
import { GroupAddFormComponentDfComponent } from './groups/group-add-form-component-df/group-add-form-component-df.component';
import { ManufacturerBarComponentEaComponent } from './manufacturers/manufacturer-bar-component-ea/manufacturer-bar-component-ea.component';
import { ManufacturerAddBarComponentEbComponent } from './manufacturers/manufacturer-add-bar-component-eb/manufacturer-add-bar-component-eb.component';
import { ManufacturersListComponentEcComponent } from './manufacturers/manufacturers-list-component-ec/manufacturers-list-component-ec.component';
import { PermissionBarComponentFaComponent } from './permission/permission-bar-component-fa/permission-bar-component-fa.component';
import { PermissionListComponentFcComponent } from './permission/permission-list-component-fc/permission-list-component-fc.component';
import { UserBarComponentGaComponent } from './users/user-bar-component-ga/user-bar-component-ga.component';
import { UserAddBarComponentGbComponent } from './users/user-add-bar-component-gb/user-add-bar-component-gb.component';
import { UserListComponentGcComponent } from './users/user-list-component-gc/user-list-component-gc.component';
import { StatisticsPageComponentHaComponent } from './statistics/statistics-page-component-ha/statistics-page-component-ha.component';
import { RoleBarComponentJaComponent } from './roles/role-bar-component-ja/role-bar-component-ja.component';
import { RoleAddBarComponentJbComponent } from './roles/role-add-bar-component-jb/role-add-bar-component-jb.component';
import { RolesListComponentJcComponent } from './roles/roles-list-component-jc/roles-list-component-jc.component';
import { PermissionAssignBarComponentJdComponent } from './roles/permission-assign-bar-component-jd/permission-assign-bar-component-jd.component';
import { PermissionsListComponentJeComponent } from './roles/permissions-list-component-je/permissions-list-component-je.component';
import { RolePageComponentJfComponent } from './roles/role-page-component-jf/role-page-component-jf.component';
import { RoleInfoBarComponentJgComponent } from './roles/role-info-bar-component-jg/role-info-bar-component-jg.component';
import { FilterComponentDcComponent } from './groups/filter-component-dc/filter-component-dc.component';
import { LoginPageAaComponent } from './login/login-page-aa/login-page-aa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponentAbComponent,
    NavComponentBaComponent,
    MainLayoutComponentBaComponent,
    ProductBarComponentCaComponent,
    ProductsListComponentCbComponent,
    FilterComponentCcComponent,
    ProductInfoBarComponentCdComponent,
    ProductPriceBarComponentCeComponent,
    ProductNumBarComponentCfComponent,
    ProductAddPageComponentCgComponent,
    ProductAddFormComponentChComponent,
    GroupBarComponentDaComponent,
    GroupPageComponentDbComponent,
    GroupInfoBarComponentDdComponent,
    GroupAddPageComponentDeComponent,
    GroupAddFormComponentDfComponent,
    ManufacturerBarComponentEaComponent,
    ManufacturerAddBarComponentEbComponent,
    ManufacturersListComponentEcComponent,
    PermissionBarComponentFaComponent,
    PermissionListComponentFcComponent,
    UserBarComponentGaComponent,
    UserAddBarComponentGbComponent,
    UserListComponentGcComponent,
    StatisticsPageComponentHaComponent,
    RoleBarComponentJaComponent,
    RoleAddBarComponentJbComponent,
    RolesListComponentJcComponent,
    PermissionAssignBarComponentJdComponent,
    PermissionsListComponentJeComponent,
    RolePageComponentJfComponent,
    RoleInfoBarComponentJgComponent,
    FilterComponentDcComponent,
    LoginPageAaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
