import z from "zod";

const registerUserRequest = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
})

export {
    registerUserRequest
}