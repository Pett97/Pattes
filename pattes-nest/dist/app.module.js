"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const animals_module_1 = require("./animals/animals.module");
const animals_service_1 = require("./animals/animals.service");
const veterinarians_module_1 = require("./veterinarians/veterinarians.module");
const veterinarians_service_1 = require("./veterinarians/veterinarians.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [animals_module_1.AnimalsModule, veterinarians_module_1.VeterinariansModule],
        controllers: [app_controller_1.AppController,],
        providers: [app_service_1.AppService, animals_service_1.AnimalsService, veterinarians_service_1.VeterinariansService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map