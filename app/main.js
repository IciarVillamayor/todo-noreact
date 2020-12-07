window.onload = function() {
    let deleteButton;
    let editButton;
    console.log("hellowowowowo");

    let data = [
          {
            "id": 1,
            "title": "Start making a presentation"
          }, 
          {
            "id": 2,
            "title": "Finish logo commision"
          }, 
          {
            "id": 3,
            "title": "Courses web wireframe"
          }, 
          {
            "id": 4,
            "title": "Lunch meeting at 1 PM"
          }, 
          {
            "id": 5,
            "title": "Sdffag"
          }, 
          {
            "id": 6,
            "title": "Start making a presentation"
          }, 
          {
            "id": 7,
            "title": "Start making a presentation"
          }, 
          {
            "id": 8,
            "title": "Start making a presentation"
          }, 
          {
            "id": 9,
            "title": "Start making a presentation"
          }, 
          {
            "id": 10,
            "title": "Start making a presentation"
          }
    ]

    //console.log(data.sort()); //LOS ORDENA POR EL ID
    //console.log(data.sort((a, b) => (a.title > b.title) ? 1 : -1)); //LOS ORDENA POR EL TITLE.

    let input= document.createElement("input");
    input.classList.add("form-control", "w-100", "newTodo");
    let editInput = document.createElement("input");
    editInput.classList.add("form-control", "w-100", "editTodo");
    let spanTodo = document.createElement("span");
    let app= document.querySelector("#App");

    let addTodo= document.createElement("div");
    let addButton = document.createElement("button");

    addTodo.classList.add("fixed-top");
    addButton.classList.add("btn", "btn-outline-primary", "text-white", "bg-info", "addButton");
    addButton.innerHTML="ADD";
    addTodo.append(input);
    addTodo.append(addButton);
 

    const sortData=()=>{
      data.sort((a, b) => (a.title > b.title) ? 1 : -1)
 
      data.forEach((data , i)=>{
         data.id= i;
          //console.log(data);
      })  
    }
   //testing gitgraph
   
   const renderData = () => {
    app.innerHTML = data.reduce((HTMLString, dataItem) => HTMLString += `
        <div id="${dataItem.id}" class="element d-flex w-50 p-4 justify-content-between">
            <span id="todo_${dataItem.id}" class="todoTitle">${dataItem.title}</span>
            <button class="deleteButton btn btn-outline-danger btn-sm">del</button>
            <button class="editButton btn btn-outline-warning btn-sm">edit</button>
        </div>
    `, "");
    app.prepend(addTodo);
    initDataEvents();
  };

  const initDataEvents = () => {
    const todoTitle = document.querySelectorAll('.todoTitle');

    todoTitle.forEach(element => {
      element.style.display="flex";
      element.addEventListener('click', (e) => {
          let p = e.target.parentElement;
          let idx = p.id;
         
          p.prepend(editInput);
        
          for(i=0; i<todoTitle.length; i++){
            todoTitle[i].style.display= "flex";
          }

          element.style.display= "none";
          editInput.setAttribute("placeholder", element.innerHTML);
          editInput.value = "";
          console.log(data[idx].title);
      })
    })
    
  };

    /**
     *  //CLICKING BUTTONS
     */

    const buttonsClick = ()=>{
      //ADD THE LISTENER TO THE DELETE BUTTONS
      deleteButton = document.querySelectorAll(".deleteButton");
  
      deleteButton.forEach((elem,i)=> {
      
        elem.addEventListener("click", (e)=>{
          let p = e.target.parentElement;
          let idx = p.id;
          //console.log(idx);
          deleteElement(idx);
        });
      });

        //ADD THE LISTENER TO THE EDIT BUTTONS
        editButton = document.querySelectorAll(".editButton");
  
        editButton.forEach((elem,i)=> {
        
        elem.addEventListener("click", (e)=>{
          let p = e.target.parentElement;
          let idx = p.id;
          editElement(idx);
        });
      });
     }

    /**
     *  //ADD ELEMENTSSSS
     */
   
    const addElement = ()=>{  
      //let superData= [...data];
      console.log(input.value);

      data.push({
        id: null,
        title : input.value
      })

      //sort elements 
      sortData();
      //
      input.value = null;
      renderData();
      buttonsClick();
    }; //END ADDELEMENT

    /**
     *  //DELETE ELEMENTSSSS
     */
  
    const deleteElement = (idx)=>{
      
      console.log(idx);
      data.splice(idx, 1);
      sortData();
      renderData();
      buttonsClick();
    };//END DELETEELEMENT

    /**
     *  //EDIT ELEMENTSSSS
     */

    const editElement = (idx)=>{

      let idd= Number(idx);
      //console.log(editInput.value);
      console.log(idd);
      const curr = data.find(e => e.id === idd);
      console.log(curr);
      console.log(data[idd])
      data.splice(idd, 1, {
       
       title : editInput.value
      })
      console.log(data);
      console.log("editttt");
      sortData();
      renderData();
      buttonsClick();
    };//END EDITELEMENT

    sortData();
    renderData();
    buttonsClick();
    addButton.addEventListener("click", addElement);

};

  // const idx = arr.findIndex(e => e.id === payload.id);
  // const curr = arr.find(e => e.id === payload.id);
  // arr.splice(idx, 1, {
  //     ...curr, 
      
  // });