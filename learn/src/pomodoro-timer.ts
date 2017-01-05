import { Component } from '@angular/core'

@Component({
  selector: 'promodoro-timer',
  template:	`
  <div	class="text-center">
		<img	src="assets/img/pomodoro.png"	alt="Pomodoro">
    <h1>	{{	minutes	}}:{{	seconds	| number: '2.0' }}</h1>
    <p>
      <button (click)="togglePause()">
        {{ buttonLabel }}
      </button>
    </p>
  </div>
  `
})
export default class PomodoroTimer {
  public minutes: number;
  public seconds: number;
  public isPause: boolean;
  public buttonLabel: string;

  constructor(){
    this.reset()
    setInterval(() => this.tick(), 1000);
  }
  tick(): void {
    if(!this.isPause){
      if(--this.seconds < 0){
        this.seconds = 59;
        if (--this.minutes < 0){
          this.reset()  
        }
      }
    }
  }
  reset(): void {
    this.seconds = 24;
    this.minutes = 59;
    this.togglePause();
    this.buttonLabel	=	'Resume';
  }
  togglePause(): void {
    this.isPause = !this.isPause;
    if	(this.minutes	<	24	||	this.seconds	<	59)	{	
				this.buttonLabel	=	this.isPause ?	'Resume'	:	'Pause';
		} 
  }
}