import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//services
import { AuthService } from '../../../../services/auth.service'

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  loginDate:any[] = [];
  public msgError!:string;


  public formAuth: FormGroup = this.formBuilder.group (
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]

    }
  );
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit(
  ): void {
  }

  public async submitForm() {
      if(this.formAuth.valid) {
        this.authService.sign({
          username: this.formAuth.value.username,
          password: this.formAuth.value.password
        })
        .subscribe ({
          next: ((response) => {
            console.log(response);
            if (this.authService.login.credential === "admin") {
              this.router.navigate(['/admin']);
            } else if (this.authService.login.credential === "user") {
              this.router.navigate(['/home']);
            }
          }),
          error: (err) => (this.msgError = err)
        })
      }
  }

}
