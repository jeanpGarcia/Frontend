import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from '../dto/login.dto';  // Corregido
import { RegisterDto } from '../dto/register.dto';  // Corregido

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 201,
    description: 'User logged in successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData.username, loginData.password);
  }

  @Post('register')
  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({
    status: 201,
    description: 'User registered successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async register(@Body() registerData: RegisterDto) {
    return this.authService.register(registerData);
  }
}