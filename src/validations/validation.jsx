// validations/formValidations.js

export const validateFullName = (fullName) => {
    if (!fullName.trim()) {
        return 'Please enter your full name';
    }
    return '';
};

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!email.trim()) {
        return 'Please enter your email';
    } else if (!re.test(email)) {
        return 'Please enter a valid email address';
    }
    return '';
};

export const validateUsername = (username) => {
    if (!username.trim()) {
        return 'Please enter a username';
    }
    return '';
};

export const validatePassword = (password) => {
    if (!password.trim()) {
        return 'Please enter a password';
    } else if (password.trim().length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return '';
};
