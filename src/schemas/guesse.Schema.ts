import Joi from "joi";

export const guesseSchema = Joi.object({
    userId: Joi.number().required(),
    gameId: Joi.number().required(),
    guesse: Joi.string().required().min(3).max(3),
});