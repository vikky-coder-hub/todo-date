const todoList=[{
   name: 'make dinner',
   dueDate:'10/13/2023'
},{
  name: 'wash dishes',
dueDate:'10/13/2023'
}];

function renderTodoList(){


   let todoListHTML='';
    todoList.forEach(function(todoObject,index){
     
      const {name,dueDate} = todoObject;
    
    const html=`
    
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
            todoList.splice(${index},1);
            renderTodoList();
         " class="delet1">delete</button>
      `;
      todoListHTML+=html;
    });
   /*for(let i=0;i<todoList.length;i++){
      const todoObject = todoList[i];
      //const name = todoObject.name;
      const {name,dueDate} = todoObject;
     // const dueDate= todoObject.dueDate;
      //const {dueDate} = todoObject;
    const html=`
    
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
         " class="delet1">delete</button>
      `;
      todoListHTML+=html;
   }*/
   
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
   const inputElement= document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement=document.querySelector('.js-due-date-input ');
    const dueDate=dateInputElement.value;

      todoList.push({
        // name:name,
         //dueDate:dueDate,
         name,dueDate
      });

   

   inputElement.value='';

   renderTodoList();
}