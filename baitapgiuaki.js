// Lấy các phần tử DOM cần thiết
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

// Hàm hiển thị message
function showMessage(message, isSuccess) {
    messageDiv.textContent = message;
    messageDiv.className = 'message'; 
    
    if (isSuccess) {
        messageDiv.classList.add('success');
    } else {
        messageDiv.classList.add('error');
    }
    
    messageDiv.style.display = 'block';
}

// Hàm xử lý submit form
function handleSubmit(event) {
    event.preventDefault(); // Ngăn form gửi đi mặc định
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!username && !password) {
        showMessage('Vui lòng nhập tên đăng nhập và mật khẩu!', false);
        setTimeout(() => {
            loginForm.reset();
            messageDiv.style.display = 'none';
        }, 2000);
    } else if (!username) {
        showMessage('Vui lòng nhập tên đăng nhập!', false);
        setTimeout(() => {
            loginForm.reset();
            messageDiv.style.display = 'none';
        }, 2000);
    } else if (!password) {
        showMessage('Vui lòng nhập mật khẩu!', false);
        setTimeout(() => {
            loginForm.reset();
            messageDiv.style.display = 'none';
        }, 2000);
    } else {
        showMessage('Đăng nhập thành công!', true);
        
        // Reset form sau 2 giây
        setTimeout(() => {
            loginForm.reset();
            messageDiv.style.display = 'none';
        }, 2000);
    }
}

// Gắn sự kiện submit cho form
loginForm.addEventListener('submit', handleSubmit);
