import { Request, Response } from 'express';
import { prisma } from '../../db/prisma';

export async function getProjects(req: Request, res: Response) {
  const { createdAfter, createBefore } = req.params;
  const projects = await prisma.project.findMany({
    where: {
      createdAt: {
        gte: createdAfter,
        lte: createBefore,
      },
    },
  });
  res.json(projects);
}
