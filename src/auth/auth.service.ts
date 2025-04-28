import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
  
    const payload = { username: user.username, sub: user['_id'] };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
  async register(userData: any) {
    const user = await this.usersService.create(userData);
    const payload = { username: user.username, sub: user['_id'] };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}