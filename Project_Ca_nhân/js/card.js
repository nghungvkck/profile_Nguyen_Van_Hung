var html = "";
var card = " Xin chào các bạn, mình tên là Hưng, 1 lập trình viên, dưới đây là profile của mình !!!";

// Chuyển 1 chuỗi thành 1 mảng
var cardContent = card.split("");

// Gọi ra phần tử muốn chèn kí tự
var modalBody = document.querySelector(".modal-body");

document.querySelector(".btn.btn-primary").onclick =()=> {
  html = ""; // Reset biến html
  for (let i = 0; i < cardContent.length; i++) {
    setTimeout(() => {
      html += cardContent[i];
      modalBody.innerHTML = html;
    }, 70 * i);
  }
};