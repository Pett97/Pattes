import { IsString } from 'class-validator';

export class CreateVeterianDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly phone: string;
  @IsString()
  readonly CFMV: string;
}
