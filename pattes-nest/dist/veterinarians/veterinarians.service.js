"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeterinariansService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const veterian_entity_1 = require("./entities/veterian.entity");
const typeorm_2 = require("@nestjs/typeorm");
let VeterinariansService = class VeterinariansService {
    async findAll() {
        return this.veteriansRepository.find();
    }
    async findOne(idNumber) {
        const id = Number(idNumber);
        const veterian = await this.veteriansRepository.findOneBy({ id });
        if (!veterian) {
            throw new common_1.HttpException(`Veterian with ID:${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        else {
            return veterian;
        }
    }
    async create(veterian) {
        await this.veteriansRepository.save(veterian);
    }
    async update(id, update) {
        await this.veteriansRepository.update(Number(id), update);
    }
    async remove(id) {
        await this.veteriansRepository.delete(Number(id));
    }
};
exports.VeterinariansService = VeterinariansService;
__decorate([
    (0, typeorm_2.InjectRepository)(veterian_entity_1.Veterian),
    __metadata("design:type", typeorm_1.Repository)
], VeterinariansService.prototype, "veteriansRepository", void 0);
exports.VeterinariansService = VeterinariansService = __decorate([
    (0, common_1.Injectable)()
], VeterinariansService);
//# sourceMappingURL=veterinarians.service.js.map