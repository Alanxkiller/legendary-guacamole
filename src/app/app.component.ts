import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forma!: FormGroup;
  usuario: any = {
    nombre: "siusiu",
    apellido: "siusiu",
    correo: "siusiu@owo.com"
  }

  title = 'formsReactivos';

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', [Validators.required, this.noGutierritos] ),
      'correo': new FormControl('', [Validators.required, Validators.email]),
    });
    this.forma.setValue(this.usuario);
  }

  guardarCambios(): void {
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
    this.forma.reset(this.usuario);
  }

  noGutierritos(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "Gutierritos") {
      return {
        noSolano: true
      }
    }
    return null
  }

}
