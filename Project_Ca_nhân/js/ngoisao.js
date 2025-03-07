function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    // tạo ra ngẫu nhiên thuộc tính cho ngôi sao 
    const size = Math.random() * 6 + 6; 
    const startX = Math.random() * window.innerWidth; 
    const duration = Math.random() * 2 + 3; 

    //chèn thuộc tính vào ngôi sao
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.right = `${startX}px`;
    star.style.top = `-10px`;
    star.style.animation = `fall ${duration}s linear forwards`;


    //xoá ngôi sao
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

//gọi hàm, lặp lại nhièu ngôi sao
setInterval(createStar, 100);