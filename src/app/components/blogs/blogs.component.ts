import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  scrollableToLeft = false;
  scrollableToRight = true;

  
  @ViewChild('sliderContent', { read: ElementRef }) public sliderContent!: ElementRef<any>;

  public scrollRight(): void {
     console.log(this.sliderContent.nativeElement.getBoundingClientRect(), this.sliderContent.nativeElement.offsetWidth);
    let noOfItems = 6;
    let widthOfOneCard = 330;
    if(this.sliderContent.nativeElement.scrollLeft+ this.sliderContent.nativeElement.offsetWidth + 400 >= noOfItems*widthOfOneCard)
    this.scrollableToRight=false;

    this.sliderContent.nativeElement.scrollTo({ left: (this.sliderContent.nativeElement.scrollLeft + 400), behavior: 'smooth' });   
    this.scrollableToLeft = true;
  }

  public scrollLeft(): void {

    
    
    if(this.sliderContent.nativeElement.scrollLeft - 400<=0)
      this.scrollableToLeft = false;
    this.sliderContent.nativeElement.scrollTo({ left: (this.sliderContent.nativeElement.scrollLeft - 400), behavior: 'smooth' });
    this.scrollableToRight=true;
  }
}