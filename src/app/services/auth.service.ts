
export class AuthService {

  isAuth = false;

  signeIn(){
   this.isAuth = true;
  }
  signOut(){
    this.isAuth = false;
  }
}
