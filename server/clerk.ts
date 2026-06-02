import type { Request, Response, NextFunction } from 'express';

export async function withClerkAuth(req: Request & { auth?: any }, _res: Response, next: NextFunction) {
  req.auth = null;
  next();
}

export function isAuthenticated(_req: Request & { auth?: any }, res: Response, _next: NextFunction) {
  return res.status(401).json({ error: 'Unauthorized' });
}

export const clerkClient = null;
