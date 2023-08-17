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
    .post(
      "https://crudcrud.com/api/6164051be0044a74937ddeb39c4fdf03/pratik",
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
  const text = `<li id = 'newli'>${JSON.stringify(
    param2
  )}<button id = 'delete-btn' >Delete</button></li>`;
  const div = document.getElementById("div-id");
  // div.innerHTML = div.innerHTML + JSON.stringify(text);
  div.appendChild(text);
  const deletebtn = document.getElementById("delete-btn");
  deletebtn.addEventListener("click", function deleteInfo(event) {
    event.preventDefault();
    li.removeChild(deletebtn.parentElement);
    document.getElementById("newli").removeChild(deletebtn.parentElement);
    axios
      .delete(
        `https://crudcrud.com/api/6164051be0044a74937ddeb39c4fdf03/pratik${param2._id}`
      )
      .then((response) => {
        // li.removeChild(deletebtn.parentElement);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/6164051be0044a74937ddeb39c4fdf03/pratik")
    .then((response) => {
      display(response.data);
    })
    .catch((err) => {
      display(err);
    });
});
