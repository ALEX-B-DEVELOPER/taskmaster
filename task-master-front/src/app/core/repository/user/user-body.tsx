export const userBody = {email: "", id: 0, name: "", lastName: ""}

export function validateRegisterBody(user: typeof userBody): String | typeof userBody{

    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(user.name == '') return 'Name is Empty'
    if(user.lastName == '') return 'Lastname is Empty'
    if(user.email == '') return 'Email is Empty'
    if(!expression.test(user.email)) return 'Email is incorrect'
    
    return user
}