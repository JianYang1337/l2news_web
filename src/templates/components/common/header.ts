const createHeader = (arg?: string) => {
    const header = {
        html: `
            <header>${arg}</header>
        `
    }
    return document.body.insertAdjacentHTML('afterbegin', header.html);
}

export default createHeader;