import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Nationality } from 'src/data/nationality';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // nations
  nations: Array<string> = [];
  // errors
  errors: Array<string> = [];

  isRegistered: boolean = false;
  message: string;

  url: string = 'http://localhost:3000';

  // form elements
  registerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    fiscalCode: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    nationality: new FormControl(''),
    common: new FormControl(''),
    cap: new FormControl(''),
    address: new FormControl(''),
    civicNumber: new FormControl(''),
    role: new FormControl('user'),
  });

  constructor() {
    this.nations = Nationality;
  }

  ngOnInit(): void {}

  check(): void {
    // cleaning the array
    this.errors = [];

    //chech all the camps
    if (this.registerForm.value.name.trim() == '') {
      this.errors.push('Il nome inserito non è valido');
    }

    if (this.registerForm.value.surname.trim() == '') {
      this.errors.push('Il cognome inserito non è valido');
    }

    if (
      this.registerForm.value.fiscalCode.trim() == '' ||
      this.registerForm.value.fiscalCode.lenght > 16
    ) {
      this.errors.push('Il codice fiscale non è valido');
    }

    if (this.registerForm.value.email.trim() == '') {
      this.errors.push('Email non valida');
    }

    if (this.registerForm.value.password.trim() == '') {
      this.errors.push('Password non valida');
    }

    if (this.registerForm.value.nationality.trim() == '') {
      this.errors.push('Inserisci una nazionalità');
    }

    if (this.registerForm.value.common.trim() == '') {
      this.errors.push('Inserisci un comune valido');
    }

    if (this.registerForm.value.cap.trim() == '') {
      this.errors.push('cap non valido');
    }

    if (this.registerForm.value.address.trim() == '') {
      this.errors.push('Indirizzo non valido');
    }

    if (this.registerForm.value.civicNumber.trim() == '') {
      this.errors.push('Civic number non valido');
    }

    if (this.errors.length == 0) {
      this.sendData();
    }
  }

  sendData(): void {
    //send the data via url
    fetch(`${this.url}/new/user`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      // pass the form value
      body: JSON.stringify(this.registerForm.value),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.message == 'Utente inserito') {
          this.isRegistered = true;
          this.message = data.message;
        }
      });
  }
}
