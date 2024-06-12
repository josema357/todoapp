import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Jose Manuel'
  tasks = signal([
    'instalar @angular/cli',
    'crear proyecto',
    'crear componente'
  ])
  name = signal('Josema')
  age = 26
  statusButton = true
  image = 'https://www.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?im=Resize=(1200)'
  person = {
    name: 'Jose',
    age: 22,
    avatar: 'https://josema-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.5e678fe0.webp&w=828&q=100'
  }
  clickHandler(){
    alert("Alerta uno")
  }
  onChangeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }
  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}