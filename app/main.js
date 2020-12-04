window.onload = function() {
    let deleteButton
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

    let spanTodo = document.createElement("span");
    let app= document.querySelector("#App");

    let addTodo= document.createElement("div");
    let addButton = document.createElement("button");

    addTodo.classList.add("fixed-top");
    addButton.classList.add("btn", "btn-outline-primary", "text-white", "bg-info", "addButton");
    addButton.innerHTML="ADD";
    addTodo.append(input);
    addTodo.append(addButton);
 
    app.prepend(addTodo);

    const sortData=()=>{
      data.sort((a, b) => (a.title > b.title) ? 1 : -1)
 
      data.forEach((data , i)=>{
         data.id= i+1;
          //console.log(data);
      })  
    }
   
   

    const renderData = ()=>{
        data.forEach((elem, i)=>{
            //console.log(elem);

            //Creo el div que contiene cada elemento
            let divElement = document.createElement("div"); 
            divElement.classList.add("w-50", "d-flex", "p-4", "d-flex", "justify-content-between", "todo");
            let spanTodo = document.createElement("span");

            //Crear los botones
            let buttonEdit = document.createElement("button");
            let buttonDelete = document.createElement("button");

            //Añado clases de bootstrap
            buttonEdit.classList.add("btn", "btn-outline-warning", "ml-4", "editButton");
            buttonEdit.innerHTML="edit";
            buttonDelete.classList.add("btn", "btn-outline-danger","btn-sm", "ml-4", "deleteButton");
            buttonDelete.innerHTML="del";

            //Añado atributos
            buttonEdit.setAttribute("type", "button");
            buttonDelete.setAttribute("type", "button");
           
            spanTodo.innerHTML=elem.title;
            divElement.append(spanTodo);

            divElement.appendChild(buttonDelete);
            divElement.appendChild(buttonEdit);

            app.append(divElement);
                 //sort data
        })
    }


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
      app.querySelectorAll(".todo").forEach(n =>n.remove());

      renderData();

      //ADD THE LISTENER TO THE DELETE BUTTONS
      deleteButton = document.querySelectorAll(".deleteButton");

       deleteButton.forEach((elem,i)=> {
        //console.log(elem);
        elem.addEventListener("click", deleteElement);
      });
      
      //ADD THE LISTENER TO THE EDIT BUTTONS

    }

  
    const editElement = ()=>{
      sortData();
      app.querySelectorAll(".todo").forEach(n =>n.remove());
      renderData();
      
    }

    const deleteElement = (index)=>{
      
      console.log("hola");
      sortData();
      app.querySelectorAll(".todo").forEach(n =>n.remove());
      renderData();
      
      //ADD THE LISTENER TO THE DELETE BUTTONS
      deleteButton = document.querySelectorAll(".deleteButton");

       deleteButton.forEach((elem,i)=> {
        //console.log(elem);
        elem.addEventListener("click", deleteElement);
      });
        //ADD THE LISTENER TO THE EDIT BUTTONS

    }

   
    sortData();
    renderData();
   
    deleteButton = document.querySelectorAll(".deleteButton");

       deleteButton.forEach((elem,i)=> {
        //console.log(elem);
        elem.addEventListener("click", deleteElement);
      });

    addButton.addEventListener("click", addElement);

   

    //document.querySelectorAll(".deleteButton").addEventListener("click", deleteElement);

    


    //deleteButton.addEventListener("click", deleteElement);
};

  // const idx = arr.findIndex(e => e.id === payload.id);
  // const curr = arr.find(e => e.id === payload.id);
  // arr.splice(idx, 1, {
  //     ...curr, 
      
  // });