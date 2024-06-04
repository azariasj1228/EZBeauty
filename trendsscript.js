document.addEventListener("DOMContentLoaded", () => {
  const bubbles = document.querySelectorAll(".bubble");
  const creatorsContainer = document.getElementById("creators-container");

  const creators = {
    "curly-hair": ["@iamthatnaturalgirl", "@_harrisjanae_", "@WestAfricanBaby"],
    "wavy-hair": ["@mollysringlets", "@lahariparicharla", "@wavyhair_skincare"],
    "straight-hair": ["@StraightSleek1", "@SilkyStraight2", "@ShineStraight3"],
    "oily-skin": [
      "Skincare by Hyram",
      "The Green Belle",
      "LABeautyologist",
      "Cassandra Bankson",
    ],
    "dry-skin": [
      "Skincare by Hyram",
      "The Green Belle",
      "LABeautyologist",
      "Cassandra Bankson",
    ],
    "combination-skin": [
      "Skincare by Hyram",
      "The Green Belle",
      "LABeautyologist",
      "Cassandra Bankson",
    ],
  };

  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", () => {
      const type = bubble.getAttribute("data-type");
      const handles = creators[type];

      creatorsContainer.innerHTML = `
                <h3>Creators Specializing in ${bubble.textContent}</h3>
                <ul class="creator-handles">
                    ${handles.map((handle) => `<li>${handle}</li>`).join("")}
                </ul>
            `;

      creatorsContainer.style.display = "block";
    });
  });
});
