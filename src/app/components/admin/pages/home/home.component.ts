import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


//services
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = this.authService.login.username;
  message:any;
  msgError:any;
  create:boolean = false;

  public formRegister: FormGroup = this.formBuilder.group (
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      credential: ['user', Validators.required]
    }
  );

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public async submitForm() {
    if (this.formRegister.valid) {
      console.log(this.formRegister.value);
      this.authService.register({
        username: this.formRegister.value.username,
        password: this.formRegister.value.password,
        credential: this.formRegister.value.credential})
        .subscribe({
          next: (res) => {
            this.message = res.message
            console.log(this.message)
          },
          error: (err) => this.msgError = err.message
        }
        )
      }
  }

  enableCreateUser() {
    this.create = true;
  }

}
