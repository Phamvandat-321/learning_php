function replaceElement() {
    // Lấy phần tử ảnh cần thay thế
    let img = document.getElementById("image");

    // Tạo phần tử mới (đoạn văn)
    let newElement = document.createElement("p");
    newElement.textContent = "Hình ảnh đã được thay thế bằng đoạn văn!";
    newElement.style.fontSize = "18px";
    newElement.style.fontWeight = "bold";
    newElement.style.color = "red";

    // Lấy phần tử cha của ảnh
    let parent = img.parentNode;

    // Thay thế ảnh bằng đoạn văn
    parent.replaceChild(newElement, img);
}
