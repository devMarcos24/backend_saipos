import Joi from "joi";

export const createTodoValidation = async (todo) => {
  const schema = Joi.object({
    name: Joi.string().required("title is required"),
    email: Joi.string().required("Email is required"),
    description: Joi.string().required("description is required"),
    status: Joi.string().required("status is required"),
    back: Joi.number(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  });

  const verifySchema = await Joi.validate(todo, schema);

  return verifySchema;
};
