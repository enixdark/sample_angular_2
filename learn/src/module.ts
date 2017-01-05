import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import HelloAngularComponent from './hello-angular';
import PomodoroTimerComponent from './pomodoro-timer'

@NgModule({
  imports: [BrowserModule],
  declarations: [HelloAngularComponent, PomodoroTimerComponent],
  bootstrap: [HelloAngularComponent, PomodoroTimerComponent]
})
export class AppModule {}