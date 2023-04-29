#!/usr/bin/env node

const fs = require('fs/promises');

const path = './shadows'

async function compileShadows () {

    let shadows = await getShadows()
    let shadowsData = ""

    shadowsData += "var shadows = {}\n"
    shadowsData += addLoadShadows() + "\n"
    shadowsData += "\n" + await addShadowObject() + "\n"

    for (let cnt = 0; cnt < shadows.length; cnt = cnt + 1) {
        shadowsData += "\n" + await getShadowData(shadows[cnt]) + "\n"
    }

    await fs.writeFile('./scriptShadows.js', shadowsData)
}

async function getShadows() {

    let rst = []
    const files = await fs.readdir(path)
    const jsFiles = files.filter(file => file.endsWith('.js') && !file.includes('shadowObject.js'));

    for (let cnt = 0; cnt < jsFiles.length; cnt = cnt + 1) {
        let name = jsFiles[cnt].replace('.js', '')
        let tag = camelToSnake(name)
        rst.push({ tag: tag, name: name })
    }

    return rst
}

async function getShadowData (shadow) {

    let tag = shadow.tag
    let name = shadow.name

    let tmpCSS = await fs.readFile(`${path}/${name}.css`, { encoding: 'utf8' })
    let tmpHtml= await fs.readFile(`${path}/${name}.html`, { encoding: 'utf8' })
    let tmpJs = await fs.readFile(`${path}/${name}.js`, { encoding: 'utf8' });

    tmpCSS = await replaceImports(tmpCSS)

    return `shadows["${name}"] = {\n\ttag: "${tag}",\n\tcss: \`\n${tmpCSS}\`,\n\thtml: \`\n${tmpHtml}\` \n}\n\n${tmpJs}`
}

function camelToSnake(str) {
    return str.replace(/[A-Z]/g, (match, index) => {
      return (index > 0 ? '-' : '') + match.toLowerCase()
    })
}

async function replaceImports(css) {
    const importRegex = /@import url\("(.+?)"\);/g;
  
    let match;
    while ((match = importRegex.exec(css))) {
      const importStatement = match[0];
      const importPath = match[1];
      const importContent = await fs.readFile(importPath, { encoding: 'utf8' });
      css = css.replace(importStatement, importContent);
    }
  
    return css;
}

async function addShadowObject () {
    return await fs.readFile(`${path}/shadowObject.js`, { encoding: 'utf8' })
}

function addLoadShadows () {
    return `
window.addEventListener("load", loadShadows)

async function loadShadows () {

    let keys = Object.keys(shadows)
        for (let cnt = 0; cnt < keys.length; cnt = cnt + 1) {
        let name = keys[cnt]
        let tag = shadows[name].tag
        eval(\`customElements.define("\${tag}", \${name})\`)
        }
}`
}

compileShadows();