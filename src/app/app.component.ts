import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rooms = 1;
  adults = 1;
  childrens = 0;

  plus(elem) {
    if(elem === 'rooms') {
      this.rooms += 1;
      if(this.rooms > this.adults) {
        this.adults += 1;
      }
    } else if(elem === 'adults') {
      this.adults += 1;
      if(this.rooms < ((this.adults + this.childrens)/4)) {
        this.rooms += 1;
      }
    } else if(elem === 'childrens'){
      this.childrens += 1;
      if(this.rooms < ((this.adults + this.childrens)/4)) {
        this.rooms += 1;
      }
    }
    
  }

  minus(elem) {
    if(elem === 'rooms') {
      this.rooms -= 1;
      if((this.rooms * 4) < (this.adults + this.childrens)) {

        this.childrens -= ((this.adults + this.childrens) % (this.rooms * 4));
        if(this.childrens < 0){
          this.adults+=this.childrens;
           this.childrens=0;
        }
        
        else if(this.childrens == 0){
          this.adults-=4;
        }
    } else if(elem === 'adults') {
      this.adults -= 1;
      if(((this.adults + this.childrens) % 4) == 0) {
        this.rooms -= 1;
      }
     

    } else if(elem === "childrens"){
      this.childrens -= 1;

      if(((this.adults + this.childrens) % 4) == 0) {
        this.rooms -= 1;
      }

    }
  }
}
}

