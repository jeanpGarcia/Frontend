// dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'usuario1',
    description: 'Nombre de usuario',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'contraseña123',
    description: 'Contraseña del usuario',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}