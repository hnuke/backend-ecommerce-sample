import ValidateProduct from "../validations/product.validation.js";

export default function validateProductMiddleware(req, res, next){
    const validation = ValidateProduct(req.body);
    if (validation) next();
    else return res.status(400).json({
        message: "Invalid Product Fields"
    })
}