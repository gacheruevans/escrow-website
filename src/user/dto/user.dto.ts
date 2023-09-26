import { IsString, IsOptional } from 'class-validator';
class EditUserDto {
  @IsString()
  @IsOptional()
  first_name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  country?: string;
}

export { EditUserDto };
