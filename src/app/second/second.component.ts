import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  ColorName = "red";
  mcol = 'color:blue;backgound-color:red';
  singleclass = "c1";
  multipleclass = {
    c1:true,
    c2:false,
    c3:true
  };

 color:any;

  alert(name:any)
  {
    alert("Name is "+ name);
    this.color = name;
  }

  ColorValue:any;
  

  MyData :any;
}
