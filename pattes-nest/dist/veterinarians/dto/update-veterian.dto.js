"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVeterianDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_veterian_dto_1 = require("./create-veterian.dto");
class UpdateVeterianDto extends (0, mapped_types_1.PartialType)(create_veterian_dto_1.CreateVeterianDto) {
}
exports.UpdateVeterianDto = UpdateVeterianDto;
//# sourceMappingURL=update-veterian.dto.js.map