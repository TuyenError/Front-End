import axios from 'axios';

// Gọi POST tới /api/register
const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/register', userData);
        console.log(response.data); // Phản hồi từ server
    } catch (error) {
        console.error(error);
    }
};

// Gọi GET tới /api/users
const getUsers = async () => {
    try {
        const response = await axios.get('/api/users');
        console.log(response.data); // Danh sách người dùng từ server
    } catch (error) {
        console.error(error);
    }
};


