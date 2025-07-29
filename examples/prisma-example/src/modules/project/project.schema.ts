import z from 'zod/v4';

export const GetProjectSchema = z.object({
  nameLike: z.string().max(100, 'Search term too long').optional(),
});

export type GetProject = z.infer<typeof GetProjectSchema>;
