// Enum sample
export class EnumExample {
    
    constructor() {}

    private runEnumCode(): void {
        enum CategoryA { Biography, Poetry, Fiction }; // 0, 1, 2 (default)
        enum CategoryB { Biography = 1, Poetry, Fiction }; // 1, 2, 3 (set start index val)
        enum CategoryC { Biography = 5, Poetry = 8, Fiction = 9 }; // 5, 8, 9 (manually set val)

        let fav: CategoryA = CategoryA.Biography; // 0
        let ctgStr = CategoryA[fav]; // Biography
    }  
}
