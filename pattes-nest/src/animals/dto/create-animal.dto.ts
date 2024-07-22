import { IsNumber, IsString } from "class-validator";

export class CreateAnimalDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly weight: number;
    @IsString()
    readonly color: string;
    @IsString()
    readonly observation: string;
}

