export class ProgrammingLanguage {

    id: number;
    language: string;
    stars: string;
    description: string;

    constructor(id: number, language: string, stars: string, description: string) {
        this.id = id;
        this.language = language;
        this.stars = stars;
        this.description = description;
    }
}
