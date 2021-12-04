import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-form-video',
  templateUrl: './form-video.component.html',
  styleUrls: ['./form-video.component.scss']
})
export class FormVideoComponent implements OnInit {

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  todoForm = this.fb.group({link: []});
  link: SafeHtml = '';

  onSubmit() {
    console.log(this.todoForm.value['link']);
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.todoForm.value['link']);
  }

  ngOnInit(): void {
  }

}
