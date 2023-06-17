import * as yup from 'yup';

export const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.number().min(1).max(5).required()
})