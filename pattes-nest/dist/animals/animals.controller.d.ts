export declare class AnimalsController {
    private readonly AnimalsService;
    constructor(AnimalsService: any);
    findAll(): string;
    findOne(id: string): string;
    create(body: any): any;
    update(id: string, body: any): string;
    remove(id: string): string;
}
