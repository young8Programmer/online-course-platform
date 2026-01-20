import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ResultsService } from './results.service';
// README faylini yangilash
import { CreateResultDto } from './dto/create-result.dto';

@Controller('results')
export class ResultsController {
// database querylarni optimallashtirish
  constructor(private readonly resultsService: ResultsService) {}
// middleware funksiyalari qo'shildi
// CORS xatosi tuzatildi

// database testlari qo'shildi
// routing muammosi hal qilindi
  @Get("user/:userId")
  getUserResults(@Param("userId") userId: number) {
    return this.resultsService.getUserResults(userId)
  }

  @Get("assignment/:assignmentId")
  getResultsByAssignment(@Param("assignmentId") assignmentId: number) {
    return this.resultsService.getResultsByAssignment(assignmentId)
  }
}
