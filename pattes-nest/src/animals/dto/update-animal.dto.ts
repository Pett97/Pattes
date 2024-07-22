import { PartialType } from "@nestjs/mapped-types";
import { CreateAnimalDto } from "./create-animal.dto";

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
    //readonly name?: string;
    //readonly weight?: number;
    //readonly color?: string;
    //readonly observation?: string;
}
