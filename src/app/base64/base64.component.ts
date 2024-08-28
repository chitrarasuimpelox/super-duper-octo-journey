import { Component } from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.css']
})
export class Base64Component {




  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      // The file's data URL which is base64 encoded
      console.log("base64..........",reader.result);
      // You can assign reader.result to a variable to use it in your application
    };

    reader.readAsDataURL(file);
  }

}
