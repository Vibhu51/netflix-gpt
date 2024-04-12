export function validator(email, password) {
    // eslint-disable-next-line
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailValid) return "Email is Invalid"
    if(!passwordValid) return "Password is Invalid";
    return null;
}