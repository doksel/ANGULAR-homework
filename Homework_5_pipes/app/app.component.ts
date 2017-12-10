import { Component } from '@angular/core';
import { IPersonBefore } from './pipes/IPersonBefore';

@Component({
  selector: 'app',
  template: `<header>
                <img src="img/angular.svg" />
                 <h1>{{title}}</h1>
            </header>
            <div>Куб числа {{x}} равен {{x | cube}}</div>
            <div>Слово " {{str}} " с заглавной буквы: " {{str | str}} "</div>
            <div>Пользователь {{(objBefore | object).sernameAfter}} {{(objBefore | object).ageAfter}} лет</div>`,
  styles: ['']
})

export class AppComponent {
  title: string = 'Angular';
  x: number = 5;
  str: string = 'рекурсия';

  objBefore = {
  name: 'Иван',
  secondname: 'Иванович',
  sername: 'Иванов',
  age: 30
  }
}