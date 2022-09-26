module.exports = {
    formate: 'A4',
    orientation: 'portrait',
    border: '15mm',
    footer: {
        height: '20mm',
        contents: {
            first: '',
            2: '',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', 
            last: ''
        }
    }
}