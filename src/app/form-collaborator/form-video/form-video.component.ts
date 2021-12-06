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

  videoForm = this.fb.group({link: []});
  link: SafeHtml = '';

  onSubmit() {
    console.log(this.videoForm.value['link']);
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoForm.value['link']);
  }

  ngOnInit(): void {
  
  }

}
