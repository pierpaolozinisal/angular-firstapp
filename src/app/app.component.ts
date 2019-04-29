import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users: string[] = ['Ryan','Joe', 'Cameron'];

  addUser(newUser){
    //console.log(newUser.value);
    this.users.push(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;

  }
  
  sayHello(){
    alert("Hello!");
  };
  deleteUser(user){
    for(let i=0;i < this.users.length;i++){
      if(user=== this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
    
};
