// Function cộng 2 ô text
function cong() {
    // Lấy giá trị của 2 ô text
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
  
    // Tính toán tổng
    var sum = parseInt(a) + parseInt(b);
  
    // Hiện thông báo kết quả
    alert("Tổng là: " + sum);
  }
  
  // Function trừ 2 ô text
  function tru() {
    // Lấy giá trị của 2 ô text
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
  
    // Tính toán hiệu
    var sub = parseInt(a) - parseInt(b);
  
    // Hiện thông báo kết quả
    alert("Hiệu là: " + sub);
  }
  
  // Function nhân 2 ô text
  function nhan() {
    // Lấy giá trị của 2 ô text
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
  
    // Tính toán tích
    var mul = parseInt(a) * parseInt(b);
  
    // Hiện thông báo kết quả
    alert("Tích là: " + mul);
  }
  
  // Function chia 2 ô text
  function chia() {
    // Lấy giá trị của 2 ô text
    var a = document.getElementById("txt1").value;
    var b = document.getElementById("txt2").value;
  
    // Kiểm tra giá trị của b
    if (b == 0) {
      alert("Không thể chia cho 0");
      return;
    }
  
    // Tính toán thương
    var div = parseInt(a) / parseInt(b);
  
    // Hiện thông báo kết quả
    alert("Thương là: " + div);
  }
  
  // Gán sự kiện cho các nút
  document.getElementById("btnCong").addEventListener("click", cong);
  document.getElementById("btnTru").addEventListener("click", tru);
  document.getElementById("btnNhan").addEventListener("click", nhan);
  document.getElementById("btnChia").addEventListener("click", chia);