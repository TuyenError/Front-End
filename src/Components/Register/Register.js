import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState('personal');

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            // Make an API call to register the user
            await axios.post('/register', {
                fullName,
                phone,
                email,
                username,
                password,
                confirmPassword,
                role: selectedOption === 'personal' ? 'personal' : 'seller',
            });

            // Reset the form fields
            setFullName('');
            setPhone('');
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');

            // Navigate to the home page
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="formLogin__container">
                <div className="loginShoppe text-center">
                    <h2 className="formLogin__title">Đăng Ký</h2>
                    {/* Rest of the code... */}

                    <form onSubmit={handleRegister}>
                        <div className="userNamePassword">
                            <i className="far fa-user formLogin--icon" />
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                            <i className="fas fa-phone-alt formLogin--icon" />
                            <input
                                type="text"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <i className="far fa-envelope formLogin--icon" />
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <i className="far fa-user formLogin--icon" />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <i className="fas fa-lock formLogin--icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i className="fas fa-lock formLogin--icon" />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <hr />

                            <div className="wrapper">
                                <input
                                    type="radio"
                                    name="select"
                                    id="option-1"
                                    checked={selectedOption === 'personal'}
                                    onChange={() => setSelectedOption('personal')}
                                />
                                <input
                                    type="radio"
                                    name="select"
                                    id="option-2"
                                    checked={selectedOption === 'seller'}
                                    onChange={() => setSelectedOption('seller')}
                                />

                                <label htmlFor="option-1" className="option option-1">
                                    <div className="dot"></div>
                                    <span>Cá Nhân</span>
                                </label>

                                <label htmlFor="option-2" className="option option-2">
                                    <div className="dot"></div>
                                    <span>Bán Hàng</span>
                                </label>
                            </div>

                            <hr />
                        </div>

                        {/* Rest of the code... */}

                        <button type="submit" className="btnSubmit">
                            Đăng Nhập
                        </button>
                    </form>

                    <p className="rules">
                        Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
                        Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với{' '}
                        <a href> Chính sách quy định của Foody</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
