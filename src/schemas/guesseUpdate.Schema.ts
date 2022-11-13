import Joi from "joi";

export const guesseUpdateSchema = Joi.object({
    guesse: Joi.string().required().min(3).max(3),
});