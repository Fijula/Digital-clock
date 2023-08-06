const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");

const clock = () => {
  let h = new Date().getHours();
  console.log(h);
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "AM";
 ap= h > 12 ? "PM" : "AM";
 h =h<10?("0"+h):h;
 m =m<10?("0"+m):m;
 s =s<10?("0"+s):s;

  hours.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  ampm.innerText = ap;
};
const updateClock = () => {
  setInterval(() => {
    clock();
  }, 1000);
};

updateClock();
