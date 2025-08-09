const checkValidData=(email,password)=>{
    const isEmailvalid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid=password.length>=6;

    if(!isEmailvalid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;//no error there
}
export {checkValidData}