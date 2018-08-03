import { Component, OnInit } from '@angular/core';
import { OnDestroy }         from '@angular/core';
import { FormControl }       from '@angular/forms';
import { Router }            from '@angular/router';
import { ActivatedRoute }    from '@angular/router';
import { UserService }       from '../../service/user.service';
import { Subscription }      from 'rxjs';
import { User }              from '../../model/User';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
    rawRoles = new FormControl();

    user: User;

    sub: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const id = params['id'];
            if (id) {
                this.userService.get(id).subscribe((user: User) => {
                    if (user) {
                        this.user = user;
                        this.rawRoles.setValue(user.rawRoles);
                    } else {
                        console.log(`User with id '${id}' not found, returning to list`);
                        this.gotoList();
                    }
                });
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    updateRawRoles() {
        this.user.rawRoles = this.rawRoles.value;
        this.userService.save(this.user).subscribe(result => {
            this.gotoList();
        }, error => console.error(error));
    }

    gotoList() {
        this.router.navigate(['client/admin']);
    }

}