"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veterianProviders = void 0;
const veterian_entity_1 = require("./entities/veterian.entity");
exports.veterianProviders = [
    {
        provide: 'VETERIAN_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(veterian_entity_1.Veterian),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=veterian.providers.js.map