export default function ValidateProduct(body){
    const { name, description, price} = body;
    if (typeof name != "string" || typeof description != "string" || typeof price != "number"){
        return false;
    }
    return true;
}