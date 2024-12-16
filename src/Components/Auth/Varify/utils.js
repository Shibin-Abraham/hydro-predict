export const timer = ({ issuedAt, duration }) => {
    console.log(issuedAt.split(":"))
    const date = new Date()
    console.log(date.getHours(), date.getMinutes(), date.getSeconds(), date)
}

