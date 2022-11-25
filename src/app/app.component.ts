import { Component, OnInit } from '@angular/core';
import { Mixin } from 'ts-mixer';

class Foo {
  echoFoo(): void {
    console.log('foo');
  }
}

class Bar {
  echoBar(): void {
    console.log('bar');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Mixin(Foo, Bar) implements OnInit {
  title = 'check-ts-mixer-angular15';

  ngOnInit(): void {
    this.echoFoo();
    this.echoBar();
  }
}
