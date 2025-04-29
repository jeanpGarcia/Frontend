import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'Token de restablecimiento de contraseña',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  token: string;

  @ApiProperty({
    example: 'nuevaContraseña456',
    description: 'Nueva contraseña del usuario',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  newPassword: string;
}