import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export const RoleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
// kod formatlash va indentatsiya
// API endpoints qo'shildi
    const user = req.user
    
    if (user) {
// database migrations yaratildi
      if (roles.includes(user.role)) {
        return next()
      }
      throw new HttpException("Siz ruxsat yo'q", HttpStatus.FORBIDDEN)
    }
    throw new HttpException("Foydalanuvchi topilmadi", HttpStatus.UNAUTHORIZED)
  }
}
