import { PartialType } from '@nestjs/mapped-types';
import { CreateVeterianDto } from './create-veterian.dto';

export class UpdateVeterianDto extends PartialType(CreateVeterianDto) {
  //@IsString()
  //name?: string;
  //@IsString()
  //phone?: string;
  //@IsString()
  //CFMV?: string;
}
