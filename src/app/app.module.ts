import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PranavComponent } from './pranav/pranav.component';
import { ProductComponent } from './product/product.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClassStyleAttdirComponent } from './class-style-attdir/class-style-attdir.component';
import { MycolorDirective } from './mycolor.directive';
import { MyColorDirective } from './directives/my-color.directive';
import { PredefPipesComponent } from './predef-pipes/predef-pipes.component';
import { BoldPipe } from './pipes/bold.pipe';
import { MyupperPipe } from './pipes/myupper.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PranavComponent,
    ProductComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    CalculatorComponent,
    TwoWayBindingComponent,
    ClassStyleBindingComponent,
    StructuralDirectivesComponent,
    EmployeeComponent,
    ClassStyleAttdirComponent,
    MycolorDirective,
    MyColorDirective,
    PredefPipesComponent,
    BoldPipe,
    MyupperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
