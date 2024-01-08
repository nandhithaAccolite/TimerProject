import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Timer Project';
  currentPlay: boolean = false;
  startPlay: boolean = false;
  timeLeft: number = 300;
  interval: any;

  startTimer() {
    this.currentPlay=true;
    this.startPlay = true;
    this.timeLeft = 300;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);
      } else {
        this.currentPlay = false;
        clearInterval(this.interval);
        
      }
    }, 1000);
  }

  pauseTimer() {
    this.currentPlay = false;
    console.log("Timer paused");
    clearInterval(this.interval);
  }

  resumeTimer() {
    this.currentPlay = true;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);
      } else {
        this.currentPlay = false;
        clearInterval(this.interval);
      }
    }, 1000);
  }

  resetTimer() {
    this.currentPlay = false;
    this.startPlay = false;
    console.log("reset timer")
    clearInterval(this.interval);
    this.timeLeft = 300; 
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${this.padZero(seconds)}`;
  }
  padZero(value: number): string {
    return value < 10 ? '0' + value : '' + value;
  }

  
}







