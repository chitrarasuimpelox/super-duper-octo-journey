import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import  ClassicEditor  from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  public Editor = ClassicEditor
    
 createhtml:FormGroup 

  constructor(private formBuilder: FormBuilder) {
    this.createhtml = this.formBuilder.group({
      editorData: ['<p>Hello, world!</p>', Validators.required] // Initialize with default value and validators
    });
  }

  submit(){
    if(this.createhtml.valid){
      console.log(this.createhtml.value.editorData,"final"); 
    }
   
  }


  



}
