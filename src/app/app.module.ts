import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, ArchitectUIState } from './ThemeOptions/store';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// BOOTSTRAP COMPONENTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// LAYOUT
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';

// HEADER
import { HeaderComponent } from './Layout/Components/header/header.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER
import { FooterComponent } from './Layout/Components/footer/footer.component';

// Dashboards
import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

// Pages
import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements
import { StandardComponent } from './DemoPages/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './DemoPages/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './DemoPages/Elements/cards/cards.component';
import { ListGroupsComponent } from './DemoPages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './DemoPages/Elements/timeline/timeline.component';
import { IconsComponent } from './DemoPages/Elements/icons/icons.component';

// Components
import { AccordionsComponent } from './DemoPages/Components/accordions/accordions.component';
import { TabsComponent } from './DemoPages/Components/tabs/tabs.component';
import { CarouselComponent } from './DemoPages/Components/carousel/carousel.component';
import { ModalsComponent } from './DemoPages/Components/modals/modals.component';
import { ProgressBarComponent } from './DemoPages/Components/progress-bar/progress-bar.component';
import { PaginationComponent } from './DemoPages/Components/pagination/pagination.component';
import { TooltipsPopoversComponent } from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables
import { RegularComponent } from './DemoPages/Tables/regular/regular.component';
import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

// Forms Elements
import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

import { OwnerCreateComponent } from './Owners/owner-create/owner-create.component';
import { OwnerUpdateComponent } from './Owners/owner-update/owner-update.component';
import { OwnerCommercialComponent } from './Owners/owner-commercial/owner-commercial.component';
import { OwnerResidentialComponent } from './Owners/owner-residential/owner-residential.component';

import { AssetCreateComponent } from './Assets/asset-create/asset-create.component';
import { AssetUpdateComponent } from './Assets/asset-update/asset-update.component';
import { AssetCommercialComponent } from './Assets/asset-commercial/asset-commercial.component';
import { AssetResidentialComponent } from './Assets/asset-residential/asset-residential.component';

import { PaymentComponent } from './Payments/payment.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,
    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,
    SidebarComponent,
    LogoComponent,
    FooterComponent,
    AnalyticsComponent,
    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    RegisterBoxedComponent,
    StandardComponent,
    IconsComponent,
    DropdownsComponent,
    CardsComponent,
    ListGroupsComponent,
    TimelineComponent,
    AccordionsComponent,
    TabsComponent,
    CarouselComponent,
    ModalsComponent,
    ProgressBarComponent,
    PaginationComponent,
    TooltipsPopoversComponent,
    RegularComponent,
    TablesMainComponent,
    ControlsComponent,
    LayoutComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    OwnerCommercialComponent,
    OwnerResidentialComponent,
    AssetCreateComponent,
    AssetUpdateComponent,
    AssetCommercialComponent,
    AssetResidentialComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,
    PerfectScrollbarModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    NgxMaskModule.forRoot()
  ],
  exports:[
    NgxMaskModule
  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private ngRedux: NgRedux<ArchitectUIState>,
    private devTool: DevToolsExtension
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
