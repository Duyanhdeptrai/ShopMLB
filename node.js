
// Lưu các đường dẫn ảnh vào một mảng
let imges = ["E:\\F8 css\\Dự án AHC\\assets\\img\\slider_1.jpg","E:\\F8 css\\Dự án AHC\\assets\\img\\slider_2.webp","E:\\F8 css\\Dự án AHC\\assets\\img\\slider_3.webp","E:\\F8 css\\Dự án AHC\\assets\\img\\slider_4.webp","E:\\F8 css\\Dự án AHC\\assets\\img\\slider_5.webp"];


let currentIndex =0;
// Lấy phần tử banner-img
let bannerImg =document.getElementById("banner__img-shop")

// Hàm thay đổi ảnh trong banner
function changeImage(){
    // Tăng chỉ số hiện tại và kiểm tra nếu vượt quá số lượng ảnh
    currentIndex++;
    if(currentIndex >= imges.length ){
        currentIndex =0;
    }
     // Thay đổi đường dẫn ảnh trong thuộc tính src
    bannerImg.src =imges[currentIndex];
}

setInterval(changeImage,3000);