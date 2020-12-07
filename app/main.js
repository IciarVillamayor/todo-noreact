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
           
            <span class="todoTitle">${dataItem.title}</span>
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
      element.addEventListener('click', (e) => {
          let p = e.target.parentElement;
          let idx = p.id;
          console.log(idx);
          p.append(editInput);
          e.target.style.display= "none";
        
          //allTodos[idx].append(editInput);
          editInput.setAttribute("placeholder", data[idx].title);
      })
    })
  };

    // const renderData = ()=>{
    //     data.forEach((elem, i)=>{
    //         //console.log(elem);

    //         //Creo el div que contiene cada elemento
    //         let divElement = document.createElement("div"); 
    //         divElement.classList.add("w-50", "d-flex", "p-4", "d-flex", "justify-content-between", "todo");
    //         divElement.id = i;
    //         let spanTodo = document.createElement("span");

    //         //Crear los botones
    //         let buttonEdit = document.createElement("button");
    //         let buttonDelete = document.createElement("button");

    //         //Añado clases de bootstrap
    //         buttonEdit.classList.add("btn", "btn-outline-warning", "ml-4", "editButton");
    //         buttonEdit.innerHTML="edit";
    //         buttonDelete.classList.add("btn", "btn-outline-danger","btn-sm", "ml-4", "deleteButton");
    //         buttonDelete.innerHTML="del";

    //         //Añado atributos
    //         buttonEdit.setAttribute("type", "button");
    //         buttonDelete.setAttribute("type", "button");
           
    //         spanTodo.innerHTML=elem.title;
    //         divElement.append(spanTodo);

    //         divElement.appendChild(buttonDelete);
    //         divElement.appendChild(buttonEdit);

    //         app.append(divElement);
    //              //sort data
    //     })
    // }

    // const inputForEditing = ()=>{
    //   let spans = document.querySelectorAll("span");
    //   let allTodos= document.querySelectorAll("todo");
    //   spans.forEach((span,i)=>{
    //     console.log("wowow");
    //     span.addEventListener("click", (e)=>{
          
    //       let p = e.target.parentElement;
    //       let idx = p.id;
    //       p.prepend(editInput);
    //       e.target.style.display= "none";

    //       //allTodos[idx].append(editInput);
    //       editInput.setAttribute("placeholder", data[idx].title);
    //       //span.style.display= "flex";
    //     });
    //   });
    // }

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

      console.log("editttt");
      sortData();
      renderData();
      buttonsClick();
    };//END EDITELEMENT



  
    sortData();
    renderData();
    buttonsClick();
    //inputForEditing();
    addButton.addEventListener("click", addElement);



    //document.querySelectorAll(".deleteButton").addEventListener("click", deleteElement);

    


    //deleteButton.addEventListener("click", deleteElement);
};

  // const idx = arr.findIndex(e => e.id === payload.id);
  // const curr = arr.find(e => e.id === payload.id);
  // arr.splice(idx, 1, {
  //     ...curr, 
      
  // });