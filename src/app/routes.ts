import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { UnitListComponent } from './units/unit-list/unit-list.component';
// import { MessagesComponent } from './messages/messages.component';
// import { MemberListComponent } from './members/member-list/member-list.component';
// import { AuthGuard } from './_guards/auth.guard';
// import { MemberDetailComponent } from './members/member-detail/member-detail.component';
// import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
// import { UnitListResolver } from './_resolvers/unit-list.resolver';
// import { MemberListResolver } from './_resolvers/member-list.resolver';
// import { MemberEditComponent } from './members/member-edit/member-edit.component';
// import { MemberEditResolver } from './_resolvers/member-edit.resolver';
// import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
// import { RegisterNewUnitComponent } from './units/unit-register/unit-register.component';
import { UnitSearchComponent } from './units/unit-search/unit-search.component';
import { UnitEditComponent } from './units/unit-edit/unit-edit.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        // runGuardsAndResolvers: 'always',
        // canActivate: [AuthGuard],
        children: [
            // {path: 'units', component: UnitListComponent,
            // resolve: {units: UnitListResolver}},
            // {path: 'unit/new', component: RegisterNewUnitComponent},
            {path: 'search', component: UnitSearchComponent},
            {path: 'unit/edit', component: UnitEditComponent},
            {path: 'unit/edit/:id', component: UnitEditComponent},
            // resolve: {units: UnitListResolver}},
            // {path: 'members', component: MemberListComponent,
            //     resolve: {users: MemberListResolver}},
            // {path: 'members/:id', component: MemberDetailComponent,
            //     resolve: {user: MemberDetailResolver}},
            // {path: 'member/edit', component: MemberEditComponent,
            //     resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            // {path: 'messages', component: MessagesComponent},

        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
