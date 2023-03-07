// طريقة الباشمهندس علي
// const test = document.getElementById("test");
// const retti = () => {
//   const now = new Date();
//   const hou = now.getHours();
//   const min = now.getMinutes();
//   const soc = now.getSeconds();
//   test.innerHTML = `
//      <span>${hou} </span>:
//     <span>${min} </span>:
//     <span>${soc} </span> `;
// };

// setInterval(retti, 1000);








// const zoom = document.getElementById("test")

// const now = () => {
//     const time = new Date()
//     let timwor = time.getUTCHours()
//     let min = time.getMinutes()
//     let soc = time.getSeconds()
    
    
//     if (timwor < 10) {
//         timwor = `0${timwor}`
//     } if (min < 10) {
//         min = `0${min}`
//     } if (soc < 10) {
//         soc = `0${soc}`
//     }
//        zoom.innerHTML = `<span>${timwor}: ${min}: ${soc} </span> `
// }

// setInterval(now , 1000)







const test = document.getElementById("test");

  let time = new Date();

  let mon = time.getMonth();

  let month;

  switch (time.getMonth()) {
    case 0:
    month =  "يناير";
      break;

    case 1:
      month ="فبراير";
      break;

  }
  test.innerText = month;
