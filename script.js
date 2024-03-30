let male = async (value, currency) => {
  url = "https://api.exchangerate-api.com/v4/latest/" + currency;
  let td = document.querySelector("#currencyTable");

  let response = await fetch(url);
  let data = await response.json();
  for (let key of Object.keys(data.rates)) {
    td.innerHTML += `<tr>
          <td>${key}</td>
          <td>${value}</td>         <td>${data.rates[key] * value}</td>
        </tr>`
  }

}
document.querySelector(".submit").addEventListener("click", function(e) {
  e.preventDefault();
  let currencyValue = parseInt(document.querySelector("#currencyValue").value);
  let currencyOptions = document.querySelector("#currencyOptions").value
  let td = document.querySelector("#currencyTable");
  td.innerHTML = `<thead>
        <tr>
          <th>Currency</th>
          <th>Value</th>
          <th>Converted Currency</th>
        </tr>
        
       </thead>`
  document.querySelector("#currencyValue").value = "";
  male(currencyValue, currencyOptions);

})

