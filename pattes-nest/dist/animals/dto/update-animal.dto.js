"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnimalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_animal_dto_1 = require("./create-animal.dto");
class UpdateAnimalDto extends (0, mapped_types_1.PartialType)(create_animal_dto_1.CreateAnimalDto) {
}
exports.UpdateAnimalDto = UpdateAnimalDto;
//# sourceMappingURL=update-animal.dto.js.map