import express, { RequestHandler, Request, Response } from 'express';
import { prisma } from '../../db/prisma';
import { GetProjectSchema } from './project.schema';

const router = express.Router();
router.get('/', async (req, res) => {
  const { nameLike } = GetProjectSchema.parse(req.query);

  const projects = await prisma.project.findMany({
    where: {
      name: {
        contains: nameLike,
      },
    },
  });
  res.json(projects);
});

export default router;
