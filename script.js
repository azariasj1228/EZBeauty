// Fetch data for makeup trends
function fetchMakeupTrends() {
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=makeup"
  )
    .then((response) => response.json())
    .then((data) => {
      const makeupTrends = document.getElementById("makeupTrends");
      makeupTrends.innerHTML = ""; // Clear previous content

      // Iterate over fetched data and create HTML elements
      data.slice(0, 5).forEach((product) => {
        const trendDiv = document.createElement("div");
        trendDiv.classList.add("trend");
        trendDiv.textContent = product.name;
        makeupTrends.appendChild(trendDiv);
      });
    })
    .catch((error) => console.error("Error fetching makeup trends:", error));
}

// Fetch data for skincare routine
function fetchSkincareRoutine() {
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_category=skincare"
  )
    .then((response) => response.json())
    .then((data) => {
      const skincareRoutine = document.getElementById("skincareRoutine");
      skincareRoutine.innerHTML = ""; // Clear previous content

      // Iterate over fetched data and create HTML elements
      data.slice(0, 5).forEach((product) => {
        const skincareTipDiv = document.createElement("div");
        skincareTipDiv.classList.add("skincare-tip");
        skincareTipDiv.textContent = product.name;
        skincareRoutine.appendChild(skincareTipDiv);
      });
    })
    .catch((error) => console.error("Error fetching skincare routine:", error));
}

// Call functions to fetch data
fetchMakeupTrends();
fetchSkincareRoutine();
