const submitbtn = document.getElementById("submit-btn"); // grab the submit button

submitbtn.addEventListener("click", process); // added eventlisterner to submit button

function process(event) {
  event.preventDefault();

  const amount = document.getElementById("amount").value; // fetching the values which we typed
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  let obj = {
    amount: amount,
    category: category,
    description: description,
  };

  postdata(obj); // giving this values to the backend
}

function postdata(param) {
  axios
    .post("https://crudcrud.com/api/7869b9d4771c499dad009215aceb6b71/pratik",
      param
    )
    .then((response) => {
      display(response.data); // calling getdata for getting the data which we posted
    })
    .catch((err) => {
      display(err);
    });
}

function display(param2) {
 
    const mainlist = document.getElementById("list");
    const newli = document.createElement("li");
    // newli.id = "new-li";
    newli.textContent = JSON.stringify(param2);

    const deletebtn = document.createElement("button");
    // deletebtn.id = "delete-btn";
    deletebtn.textContent = "DELETE";
    deletebtn.className = "btn btn-danger";

    newli.appendChild(deletebtn);
    mainlist.appendChild(newli);
    deletebtn.addEventListener('click', function deletedata(event) {
      event.preventDefault();
      // mainlist.removeChild(deletebtn.parentElement);
      const id = param2._id;
     axios.delete(`https://crudcrud.com/api/7869b9d4771c499dad009215aceb6b71/pratik/${id}`).then((response)=>{
      mainlist.removeChild(deletebtn.parentElement);
    }).catch((err)=>{
      console.log(err);
    })

    })
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/7869b9d4771c499dad009215aceb6b71/pratik")
    .then((response) => {
      response.data.forEach(element => {
        display(element);
        
      });
      
    })
    .catch((err) => {
      display(err);
    });
});
