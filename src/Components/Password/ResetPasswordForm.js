import React, { useState } from 'react';

const ResetPasswordForm = ({ token, email }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gửi mật khẩu mới và thông tin xác thực qua API của Laravel
        // Sử dụng thư viện axios hoặc fetch để gửi yêu cầu HTTP POST đến Laravel backend
        // Ví dụ: axios.post('/reset-password', { token: token, email: email, password: password, password_confirmation: confirmPassword })
        // Xử lý phản hồi từ backend tại đây
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Đặt lại mật khẩu</h2>
            <input type="hidden" name="token" value={token} />
            <input type="hidden" name="email" value={email} />
            <div>
                <label htmlFor="password">Mật khẩu mới:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit">Đặt lại mật khẩu</button>
        </form>
    );
};

export default ResetPasswordForm;
