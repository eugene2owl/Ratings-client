import { NgModule }            from '@angular/core';
import { UserEditComponent }   from './user-edit.component';
import { MatButtonModule }     from '@angular/material';
import { MatInputModule }      from '@angular/material';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule }        from '@angular/common';

@NgModule({
    declarations: [
        UserEditComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        MatButtonModule,
        MatInputModule
    ],
    exports: [UserEditComponent],
    providers: []
})
export class UserEditModule {
}
