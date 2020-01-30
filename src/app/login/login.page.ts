import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private toast: ToastController, private route: Router, private screenOrientation: ScreenOrientation,
     private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  async login(username: string, password: string) {
    if(this.authService.authenticate(username, password)){
      console.log(username, password);
      this.route.navigate(['tabs', 'feed']);
    }else{
      const toastSnack = await this.toast.create({
        message: 'Wrong username or password',
        duration: 1000,
        color: 'danger',
      });
      toastSnack.present();
      this.loginForm.reset();
    }
  }

}
