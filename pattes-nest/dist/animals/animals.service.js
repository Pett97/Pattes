"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsService = void 0;
const common_1 = require("@nestjs/common");
let AnimalsService = class AnimalsService {
    constructor() {
        this.animals = [
            {
                id: 1,
                name: "Belchior",
                weight: 2.45,
                color: "Laranja Com Branco",
                observation: "Aparentemente Saudavel"
            },
            {
                id: 2,
                name: "Tommy",
                weight: 2.67,
                color: "Cinza Com Branco",
                observation: "Aparentemente Saudavel e gordo"
            }
        ];
    }
    findAll() {
        return this.animals;
    }
    findOne(id) {
        return this.animals.find((animal) => animal.id === Number(id));
    }
    create(createAnimalDto) {
        this.animals.push(createAnimalDto);
    }
    update(id, updateAnimalDto) {
        let animal = this.animals.findIndex((animal) => animal.id === Number(id));
        this.animals[animal] = updateAnimalDto;
    }
    remove(id) {
        let animal = this.animals.findIndex((animal) => animal.id === Number(id));
        this.animals.splice(animal);
    }
};
exports.AnimalsService = AnimalsService;
exports.AnimalsService = AnimalsService = __decorate([
    (0, common_1.Injectable)()
], AnimalsService);
//# sourceMappingURL=animals.service.js.map