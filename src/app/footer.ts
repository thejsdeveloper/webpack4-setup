

export class Footer {

    footertext: string;

    constructor() {
        console.log(`This is Footer constructor`);
        this.footertext = `Demo for webpack 4 set up`;
    }

    getFooterText(): string {
        return this.footertext
    }
}

