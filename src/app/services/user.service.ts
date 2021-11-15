import {Injectable} from '@angular/core';
import {UserInterface} from '../interfaces/user';

@Injectable()

export class UserService {
  users: UserInterface[] = [
    {
      id: 1,
      name: 'Riccardo1',
      lastname: 'Licciardi',
      email: 'riccardo.licciardi@gmail.com',
      fiscalcode: 'LCCRCR93*******R',
      province: 'Venezia',
      phone: '347******7',
      age: 27

    },
    {
      id: 2,
      name: 'Riccardo2',
      lastname: 'Licciardi',
      email: 'riccardo.licciardi@gmail.com',
      fiscalcode: 'LCCRCR93*******R',
      province: 'Venezia',
      phone: '347******7',
      age: 27
    },
    {
      id: 3,
      name: 'Riccardo3',
      lastname: 'Licciardi',
      email: 'riccardo.licciardi@gmail.com',
      fiscalcode: 'LCCRCR93*******R',
      province: 'Venezia',
      phone: '347******7',
      age: 27
    },
    {
      id: 4,
      name: 'Riccardo4',
      lastname: 'Licciardi',
      email: 'riccardo.licciardi@gmail.com',
      fiscalcode: 'LCCRCR93*******R',
      province: 'Venezia',
      phone: '347******7',
      age: 27
    }
  ];

  constructor() {
  }

  getUsers() {
    return this.users;
  }

  deleteUser(user: UserInterface) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
    }

  }

  updateUser(user: UserInterface) {
    const idx = this.users.findIndex((v) => v.id === user.id);
    alert(idx);
    if (idx !== -1) {
      this.users[idx] = user;
    }
  }


  createUser(user: UserInterface) {

    this.users.splice(0, 0, user);

  }
}
 

