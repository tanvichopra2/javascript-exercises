console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(stringMessage, username, comment) {
    const escapedString = comment
        .replace(/&/g,'&amp;')
        .replace(/'/g,'&apos;')
        .replace(/"/g,'&quot;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')

    return stringMessage[0]+ username +stringMessage[1] +escapedString + stringMessage[2];   
}
 