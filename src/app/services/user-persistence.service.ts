import {Injectable} from '@angular/core';
import {UserData} from '../../model/user-data';

const INITIAL_DATA: readonly UserData[] = [
  {
    id: 0,
    name: 'Alice',
    bio: `
**Welcome to my profile!**

[Here](https://www.github.com/) is my website.
    `,
    profilePicture: '/assets/img/chicken.jpg'
  },
  {
    id: 1,
    name: 'Bob',
    bio: `
# About me

I am a horse.
    `,
    profilePicture: '/assets/img/horse.jpg'
  },
  {
    id: 2,
    name: 'Barbara',
    bio: `
# About me
* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua *
## Lorem ipsum dolor sit amet ##
I am a capybara.
    `,
    profilePicture: '/assets/img/capybara.jpg'
  },
  {
    id: 3,
    name: 'Doggo',
    bio: `
# Hola todos amigos
* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua *
~~ Lorem ipsum dolor sit amet ~~
I am a doggo.

[Here](https://www.github.com/) is my website.
    `,
    profilePicture: '/assets/img/dog.jpg'
  }
];

const STORAGE_KEY = 'users'

@Injectable({
  providedIn: 'root'
})
export class UserPersistenceService {

  public put(data: UserData[]): void {
    sessionStorage[STORAGE_KEY] = JSON.stringify(data);
  }

  public get(): UserData[] {
    const jsonString = sessionStorage[STORAGE_KEY];
    if (jsonString) {
      try {
        const json: unknown = JSON.parse(jsonString);
        if (Array.isArray(json)) {
          return json as UserData[];
        }
      } catch (e) {
        console.error(e);
      }
    }
    return [...INITIAL_DATA];
  }

}
