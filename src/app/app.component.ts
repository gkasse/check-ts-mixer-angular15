import { Component, OnInit } from '@angular/core';
import { Mixin } from 'ts-mixer';

class Hoge {
  echoHoge(): void {
    console.log('hoge');
  }
}

class Fuga {
  echoFuga(): void {
    console.log('fuga');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Mixin(Hoge, Fuga) implements OnInit {
  title = 'check-ts-mixer-angular15';

  ngOnInit(): void {
    this.echoHoge();
    this.echoFuga();
  }
}
