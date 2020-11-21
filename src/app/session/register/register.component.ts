import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/users.service';
import {User} from '../../models/User.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
@Component({
   selector: 'ms-register-session',
   templateUrl: './register-component.html',
   styleUrls: ['./register-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

    @Input() userName: string;
    @Input() firstName: string;
    @Input() lastName: string;
    @Input() email: string;
    @Input() password: string;

    const
     user: User = {
        firstName: '',
        email: '' ,
        lastName: '',
        password: '',
        userName: ''

    };
  constructor(private userService: UserService ,
              private router: Router) { }


    // registerForm: FormGroup;
    ngOnInit() {
    }

  register() {
    this.router.navigate(['/']);
      this.router.navigate(['/login']);
  }
/*
addUser() {

      this.userService.registerUser(this.x).subscribe();
    this.router.navigate(['/authentication/login']);
}*/
    addUser () {
        this.userService.registerUser(this.user).subscribe()
    }
}
