import "./style.css";

document.querySelector("#scraperBtn").addEventListener("click", async () => {
  const keyword = document.querySelector("#keyword").value.trim();
  const resultContainer = document.querySelector("#results");

  const warning = document.createElement("p");
  warning.innerHTML = `Loading...`; // warning to user see when the request was send
  resultContainer.appendChild(warning);

  if (!keyword) {
    alert("Please enter a keyword!");
    return;
  }

  const xhr = new XMLHttpRequest();
  const url = `http://localhost:3000/api/scrape?keyword=${encodeURIComponent(
    keyword
  )}`;

  // method get config and ajax url
  xhr.open("GET", url, true);

  // when the request complete
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
      const data = JSON.parse(xhr.responseText);

      resultContainer.innerHTML = ""; // clean previws results

      data.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
        <img src=${product.image} alt="${product.title}"/>
        <div class="productInfo">
          <h3>${product.title}</h3>
        </div>
        `;
        // clean warning
        warning.innerHTML = "";
        resultContainer.appendChild(productDiv);
      });
    } else {
      alert("Error fetching data!");
    }
  };

  // error
  xhr.onerror = () => {
    alert("Request failed");
  };

  // send request
  xhr.send();
});
