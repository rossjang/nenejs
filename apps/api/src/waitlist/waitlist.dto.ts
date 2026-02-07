import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateWaitlistDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
}

export class WaitlistResponseDto {
  id: string;
  email: string;
  createdAt: Date;
}
