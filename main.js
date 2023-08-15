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
      "https://crudcrud.com/api/8b9e717c996b41d3a24a02407761481d/Info",param)
    .then((response) => {
      display(response.data); // calling getdata for getting the data which we posted
    })
    .catch((err) => {
      display(err);
    });
}

window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/8b9e717c996b41d3a24a02407761481d/Info").then((response)=>{
    display(response.data)
  }).catch((err)=>{
    display(err);
  })
})

function display(param2) {
  document.getElementById("div-id").innerHTML =
    document.getElementById("div-id").innerHTML + JSON.stringify(param2); // displaying the data
}
