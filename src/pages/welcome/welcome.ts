export function initWelcome() {
    const div = document.createElement('div');
    div.innerHTML = `
        <welcome-text></welcome-text>
    `;
    return div;
}
