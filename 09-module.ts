interface Periodical {
    issueNumber: number;
}

class Magazine implements Periodical {
    issueNumber: number;
}

function GetMagazineByTitle(title: string): Magazine {
    // do something
    return null;
}

export { Periodical, Magazine, GetMagazineByTitle as GetMag }

// news.ts -- import examples
// import { Magazine, GetMag as GetMagazine } from './09-module';
// import * as mag from './09-module';

// let newsMag: Magazine = GetMagazine('');  
