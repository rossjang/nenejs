import { IsEmail, IsString, IsOptional, MinLength } from 'class-validator';

// DTOs shared between frontend and backend
// These can be used for validation on both sides

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsString()
  @IsOptional()
  name?: string;
}

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}

export class RefreshTokenDto {
  @IsString()
  refreshToken!: string;
}

export class PaginationDto {
  page?: number = 1;
  limit?: number = 10;
}

// Blog DTOs
export class BlogQueryDto {
  @IsString()
  @IsOptional()
  category?: string;

  @IsOptional()
  page?: number = 1;

  @IsOptional()
  limit?: number = 10;
}

// Showcase DTOs
export class ShowcaseQueryDto {
  @IsString()
  @IsOptional()
  category?: string;

  @IsOptional()
  featured?: boolean;
}

export class CreateShowcaseProjectDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  category!: string;

  @IsString()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  github?: string;
}
