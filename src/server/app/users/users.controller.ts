import { Controller, Get, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor() {
    //   @Inject(REQUEST) private readonly request: Request
    console.log('CoffeesController created');
  }

  @Get()
  findAll() {
    console.log('Get request to users was successful!');
    return 'YESSSSSSSS!';
  }
}
