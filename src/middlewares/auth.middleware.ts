import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
// database querylarni optimallashtirish
import { Request, Response, NextFunction } from 'express'
// API endpoints qo'shildi
import { JwtService } from '@nestjs/jwt'

@Injectable()
// API endpoint testlari qo'shildi
export class AuthMiddleware implements NestMiddleware {
// environment variables sozlandi
  constructor(private readonly jwtService: JwtService) {}

// code comments qo'shildi
  use(req: Request, res: Response, next: NextFunction) {
    const { token }: any = req.headers
  
    if (!token) {
      throw new UnauthorizedException("Token kiritilmagan")
    }

    try {
      const decoded = this.jwtService.verify(token)
      req.user = decoded
      next()
    } catch (error) {
      throw new UnauthorizedException("Token xato")
    }
  }
}
