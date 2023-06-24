import React, { useState } from 'react';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gửi yêu cầu đặt lại mật khẩu qua API của Laravel
        // Sử dụng thư viện axios hoặc fetch để gửi yêu cầu HTTP POST đến Laravel backend
        // Ví dụ: axios.post('/forgot-password', { email: email })
        // Xử lý phản hồi từ backend tại đây
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Quên mật khẩu</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Gửi yêu cầu</button>
        </form>
    );
};

export default ForgotPasswordForm;
