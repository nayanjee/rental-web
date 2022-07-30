import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

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

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'} },
      { path: 'owner', component: OwnerResidentialComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'owners', component: OwnerResidentialComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'owner/commercial', component: OwnerCommercialComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'owner/residential', component: OwnerResidentialComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'owner/create', component: OwnerCreateComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'owner/create/:type', component: OwnerCreateComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'owner/update', component: OwnerUpdateComponent, data: {extraParameter: 'ownerElementsMenu'} },

      { path: 'asset/create', component: AssetCreateComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'asset/create/:owner', component: AssetCreateComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'asset/update', component: AssetUpdateComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'asset/residential', component: AssetResidentialComponent, data: {extraParameter: 'ownerElementsMenu'} },
      { path: 'asset/commercial', component: AssetCommercialComponent, data: {extraParameter: 'ownerElementsMenu'} },
      
      { path: 'payments', component: PaymentComponent, data: {extraParameter: 'ownerElementsMenu'} },

      { path: 'elements/buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'} },
      { path: 'elements/dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'} },
      { path: 'elements/icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'} },
      { path: 'elements/cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'} },
      { path: 'elements/list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'} },
      { path: 'elements/timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'} } ,

      // Components
      { path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'} },
      { path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'} },
      { path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'} },
      { path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'} },
      { path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'} },
      { path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'} },
      { path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'} },

      // Tables
      { path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'} },

      // Forms Elements
      { path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'} },
      { path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'} },
    ]
  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      // User Pages
      { path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''} },
      { path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''} },
      { path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''} },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
    }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
