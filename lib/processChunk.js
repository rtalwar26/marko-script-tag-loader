

function processChunk(source, map) {
    this.cacheable && this.cacheable()


    let newSource = source

    newSource = newSource.replace(/\<script\>/g, '');
    newSource = newSource.replace(/\<\/script\>/g, '');

    var lines = newSource.split('\n');
    let trimmedSource = '';
    for (var i = 0; i < lines.length; i++) {

        let line = ltrim(lines[i]);

        let trimmedLine = line.length ? (line + '\n') : '';

        trimmedSource += trimmedLine;
        //code here using lines[i] which will give you each line
    }
    this.callback && this.callback(null, trimmedSource, map)
}


function ltrim(str) {
    if (!str) return str;
    return str.replace(/^\s+|\s+$/g, '');
}

module.exports = processChunk
