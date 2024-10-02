const container = document.querySelector("#add");
const name = document.querySelector("#name");
const follower = document.querySelector("#follower");
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const imgBox = document.querySelector("#img-box");
const cityLocation = document.querySelector("#location");


const githubData = () => {
  btn.addEventListener("click", () => {
    const inputValue = input.value;
    console.log(inputValue);
    let count = 0;
    const githubInfo = () => {
      fetch(`https://api.github.com/users/${inputValue}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          name.innerHTML = data.name;
          follower.innerHTML = `Follower: ${data.followers}`;
          para.innerHTML = `<b>Bio</b>: ${data.bio}`;
          cityLocation.innerHTML = `<b>Location</b>: ${data.location}`;
          if (count === 0) {
            let img = document.createElement("img");
            img.classList.add("img-fluid");
            img.src = data.avatar_url;
            imgBox.appendChild(img);
            count = 1;
          }
        });
    };
    githubInfo();
  });
};
githubData();
