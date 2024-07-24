"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeterinariansService = void 0;
const common_1 = require("@nestjs/common");
let VeterinariansService = class VeterinariansService {
    constructor() {
        this.veterians = [
            {
                id: 1,
                name: "Barbara",
                phone: "42_988853488",
                CFMV: "12312412"
            }
        ];
    }
    findAll() {
        return this.veterians;
    }
    findOne(id) {
        let veterian = this.veterians.find((veterian) => veterian.id === Number(id));
        if (!veterian) {
            throw new common_1.HttpException(`Veterian with ID:${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return veterian;
        }
    }
    create(veterian) {
        this.veterians.push(veterian);
    }
    findIndexVeterian(id) {
        let index = this.veterians.findIndex((veterian) => veterian.id === Number(id));
        return index;
    }
    update(id, updateVeterianDto) {
        let index = this.findIndexVeterian(id);
        if (!index) {
            throw new common_1.HttpException(`Veterian with ID:${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            this.veterians[index] = updateVeterianDto;
        }
    }
    remove(id) {
        let index = this.findIndexVeterian(id);
        this.veterians.splice(index);
    }
};
exports.VeterinariansService = VeterinariansService;
exports.VeterinariansService = VeterinariansService = __decorate([
    (0, common_1.Injectable)()
], VeterinariansService);
//# sourceMappingURL=veterinarians.service.js.map