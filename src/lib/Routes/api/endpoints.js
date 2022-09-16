const endpoints = {
    home: { url: '/', method: 'GET' },
    register: { url: '/register', method: 'POST' },
    verify: { url: '/users/verify', method: 'PUT' },
    login: { url: '/login', method: 'POST' },
    forgotPassword: { url: '/forgot-password-request', method: 'POST' },
    resetPassword: { url: '/users/forgot-password', method: 'PUT' },
    // publishJob: { url: '/post-job', method: 'POST' },
    jobList: { url: '/job-list', method: 'GET'}
}


export default endpoints;