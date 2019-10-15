
/*Here you would define your inventory object. I'm just using User here so I can utilize a public demo api
* at https://jsonplaceholder.typicode.com/users rather than having to set up my own express app. I'm choosing
* to define only 3 of the available fields: id, name, and email
*/
export class User {

    //fieldName: type;
    id: number;
    name: string;
    email: string;
}