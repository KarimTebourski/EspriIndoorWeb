import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/User.models';
import {UserService} from '../../services/users.service';
import {any} from 'codelyzer/util/function';


@Component({
   selector: 'ms-login-session',
   templateUrl:'./login-component.html',
   styleUrls: ['./login-component.scss'],
   encapsulation: ViewEncapsulation.None,
})


export class LoginComponent implements OnInit {

    @Input() userName: string;
    @Input() password: string;

    const
    user1: User = {
        firstName: '',
        email: '' ,
        lastName: '',
        password: '',
        userName: ''

    };

  constructor(private userService: UserService ,
              private router: Router
  ) { }

    ngOnInit() {
    }

  login() {
    this.router.navigate(['/']);
  }
    loginUser () {
        // tslint:disable-next-line:label-position no-unused-expression
        this.userService.signInUser(this.user1).subscribe(
            (response) => {
                let res;
                res = response ;

                localStorage.setItem('user', JSON.stringify(res));
                this.router.navigate(['/home']);
                } ,
                err => {
                    console.log( "status code--->" + err.status);
                    alert('Wrong Username or Password please try again');
                });
            }
}



