const hr =  document.getElementById("hr");
const mn =  document.getElementById("mn");
const sc =  document.getElementById("sc");

setInterval(() =>{
  let day = new Date();
  hr.style.transform = `rotate(${day.getHours() * 30}deg)`;
  mn.style.transform = `rotate(${day.getMinutes() * 6}deg)`;
  sc.style.transform = `rotate(${day.getSeconds() * 6}deg)`;
  });
