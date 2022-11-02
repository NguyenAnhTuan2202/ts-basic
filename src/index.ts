// import * as Mailer from './mailer';
// const age: number = 22;
// let newVar: string;

import { send } from './mailer';

// function sum(a: number, b: number): number {
//   return a + b;
// }

// const tong = (a: number, b: number): number => {
//   return a + b;
// };

// const sendMail = async ({
//   email,
//   subject,
//   content,
// }: {
//   email: string;
//   subject: string;
//   content: string;
// }) => {
//   const res = await Mailer.send(email, subject, content);
//   return res;
// };

// function waitAndDo(callback: (param: string) => void) {
//   setTimeout(() => {
//     callback('Hello');
//   }, 1000);
// }

// waitAndDo((param) => {
//   console.log(param); // Output: "Hello"
// });

// class Dog {
//   sayHi(name: string): void {
//     console.log(name);
//   }
// }
// const husky = new Dog();
// husky.sayHi('Hello'); // Output: "Hello"

// const myName: string = 'Tuấn';
// const age: number = 22;
// const bigNum: bigint = BigInt(10);
// const isGraduated: boolean = false;
// const someVar: undefined = undefined;
// const anotherVar: null = null;

// console.log(typeof myName); // Output: string
// console.log(typeof age); // Output: number
// console.log(typeof bigNum); // Output: bigint
// console.log(typeof isGraduated); // Output: boolean
// console.log(typeof someVar); // Output: undefined
// console.log(typeof anotherVar); // Output: object

// interface Contact {
//   name: string;
//   phone: string;
//   email: string;
// }
// const contacts: Contact[] = [];
// const newContact: Contact = {
//   name: 'Tuấn',
//   phone: '0783889102',
//   email: 'abc@gmail.com',
// };
// contacts.push(newContact);
// console.log(contacts); //Output: [ { name: 'Tuấn', phone: '0783889102', email: 'abc@gmail.com' } ]

interface Contact {
  name: string;
  phone: string;
  email?: string;
}
const contacts: Contact[] = [];
const newContact: Contact = {
  name: 'Tuấn',
  phone: '0783889102',
  email: 'abc@gmail.com',
};
contacts.push(newContact);

if (newContact.email) {
  send(newContact.email, '1', '2');
}

// // optional chaining
// // implement interface
// import { send } from './mailer';

// interface Pet {
//   name: string;
// }

// interface Address {
//   city: string;
// }
// interface Contact {
//   name: string;
//   phone: string;
//   email?: string;
//   pet?: Pet;
//   addresses?: Address[];
// }

// const contacts: Contact[] = [];

// // object literal
// const newContact: Contact = {
//   name: 'Nguyen Van A',
//   phone: '0123123',
//   email: 'abc@gmail.com',
//   pet: {
//     name: 'A',
//   },
// };

// const otherContact: Contact = {
//   name: 'Nguyen Van B',
//   phone: '0123124',
// };

// contacts.push(newContact);

// function getPetName(contact: Contact): string {
//   return contact.pet?.name || '';
// }

// function getFirstAddress(contact: Contact) {
//   return contact.addresses?.[0];
// }

// // extend interface
// interface Button {
//   label: string;
//   onClick: () => void;
// }

// const button: Button = {
//   label: 'Submit',
//   onClick: () => {
//     console.log('click');
//   },
// };

// interface IconButton extends Button {
//   icon: string;
// }

// const addToCartBtn: IconButton = {
//   label: 'Add to cart',
//   onClick: () => {
//     console.log('click');
//   },
//   icon: 'cart-icon',
// };

// class MyContact implements Contact {
//   name: string;
//   phone: string;

//   constructor(name: string, phone: string) {
//     this.name = name;
//     this.phone = phone;
//   }
// }

// const a = new MyContact('A', '123');
// console.log(a.name);

// interface ContactAdapter {
//   getData: () => Promise<Contact[]>;
// }

// class ContactApp {
//   adapter: ContactAdapter;
//   constructor(adapter: ContactAdapter) {
//     this.adapter = adapter;
//   }

//   async render() {
//     const contacts: Contact[] =
//       await this.adapter.getData();
//     console.table(contacts);
//   }
// }

// class MyContactAdapter implements ContactAdapter {
//   async getData() {
//     // TODO: get data from API
//     const contacts: Contact[] = [
//       { name: 'A', phone: '123' },
//       { name: 'B', phone: '456' },
//     ];
//     return contacts;
//   }
// }

// const adapter = new MyContactAdapter();
// const app = new ContactApp(adapter);
// app.render();
