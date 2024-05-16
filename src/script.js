// UI elements
const btn = document.querySelector("button");
const img = document.querySelector("img");
const infoList = document.querySelectorAll(".text-xl");
const style = document.body.style;

// API request
const getRandomUser = async () => {
  const res = await fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return res.results[0];
};

// Methods
const changeImgSrc = (src) => {
  img.src = src;
};

const changeParagraphInfo = (newInfo, infoListIndex) => {
  infoList[infoListIndex].childNodes[1].textContent = newInfo;
};

const fetchUserInformation = (userInfo) => {
  changeImgSrc(userInfo.picture.large);
  userInfo.gender === "female"
    ? (style.backgroundColor = "rebeccapurple")
    : (style.backgroundColor = "steelblue");
  const userInfoList = [
    `${userInfo.name.first} ${userInfo.name.last}`,
    userInfo.email,
    userInfo.phone,
    `${userInfo.location.city} ${userInfo.location.state}`,
    userInfo.dob.age,
  ];
  userInfoList.forEach((newInfo, index) => changeParagraphInfo(newInfo, index));
};

const handleBtnClick = async () => {
  const response = await getRandomUser();
  fetchUserInformation(response);
};

// Event Listeners
btn.addEventListener("click", handleBtnClick);
