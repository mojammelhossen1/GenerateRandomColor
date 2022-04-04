window.onload = () => {
    main()

}
const main = () => {
    const $ = (p) => document.getElementById(p)
    const container = $('container')
    const btn = $('change-btn')
    const output = $('output')
    const output2 = $('output2')
    const copyBtn = $('copy-btn')
    const copyBtn2 = $('copy-btn2')
    const pop = $('pop')
    const pop2 = $('pop2')
    setTimeout(() => {
        container.style.opacity = '1'
        container.style.transform = 'scale(1,1)'
        container.style.borderRadius = '0px'
    }, 300);
    output.value = ''
    output2.value = 'rgb(0,0,0)'





    btn.addEventListener('click', function () {
        const color = generateDecimalColor()
        const hex = generatedHEXColor(color)
        const rgb = generatedRGBColor(color)





        output.value = hex.substring(1)
        output2.value = rgb
        container.style.background = `#${output.value}`
        output.title = `#${output.value}`
    })

    copyBtn.addEventListener('click', function () {
        pop.style.color = '#000'
        navigator.clipboard.writeText(`#${output.value}`)
        pop.innerText = `#${output.value}` + ' Copied'
        setTimeout(() => {
            pop.style.display = 'block'
        }, 1);
        setTimeout(() => {
            pop.style.opacity = '.8'
        }, 50);

        if (output.value === '') {
            pop.innerText = 'You do not have any color for copy'
            pop.style.color = '#f00'

        }


        pop.addEventListener('click', function () {

            setTimeout(() => {
                pop.style.opacity = '0'
            }, 1);
            setTimeout(() => {
                pop.style.display = 'none'
            }, 500);
        })
    })
    copyBtn2.addEventListener('click', function () {
        pop2.style.color = '#000'
        navigator.clipboard.writeText(output2.value)
        pop2.innerText = output2.value + ' Copied'
        setTimeout(() => {
            pop2.style.display = 'block'
        }, 1);
        setTimeout(() => {
            pop2.style.opacity = '.8'
        }, 50);

        if (output2.value === '') {
            pop2.innerText = 'You do not have any color for copy'
            pop2.style.color = '#f00'

        }


        pop2.addEventListener('click', function () {

            setTimeout(() => {
                pop2.style.opacity = '0'
            }, 1);
            setTimeout(() => {
                pop2.style.display = 'none'
            }, 500);
        })
    })


    copyBtn.addEventListener('blur', function () {

        setTimeout(() => {
            pop.style.opacity = '0'
        }, 1);
        setTimeout(() => {
            pop.style.display = 'none'
        }, 500);
    })

    copyBtn2.addEventListener('blur', function () {

        setTimeout(() => {
            pop2.style.opacity = '0'
        }, 1);
        setTimeout(() => {
            pop2.style.display = 'none'
        }, 500);
    })

    output.addEventListener('keyup', function (e) {
        const color = e.target.value

        if (color && isValidColor(color)) {
            container.style.background = `#${color}`
            output2.value = hexToRGB(color)
            copyBtn.addEventListener('click', function () {
                navigator.clipboard.writeText(`#${output.value}`)
                pop.innerText = `#${output.value}` + ' Copied'
                pop.style.color = '#000'
            })
            copyBtn2.addEventListener('click', function () {
                navigator.clipboard.writeText(output2.value)
                pop2.innerText = `#${output2.value}` + ' Copied'
                pop2.style.color = '#000'
            })

        } else {
            if (color && isValidColor(color)) {
                copyBtn.addEventListener('click', function () {
                    navigator.clipboard.writeText(`#${output.value}`)
                    pop.innerText = `#${output.value}` + ' Copied'
                    pop.style.color = '#000'
                })
                copyBtn2.addEventListener('click', function () {
                    navigator.clipboard.writeText(output2.value)
                    pop2.innerText = output2.value + ' Copied'
                    pop2.style.color = '#000'
                })

            }
            container.style.background = '#000'
            output2.value = 'rgb(0,0,0)'
            copyBtn.addEventListener('click', function () {
                navigator.clipboard.writeText('')
                pop.innerText = 'Invalid color code'
                pop.style.color = '#f00'
            })
            copyBtn2.addEventListener('click', function () {
                navigator.clipboard.writeText('')
                pop2.innerText = 'Invalid color code'
                pop2.style.color = '#f00'
            })

        }

        output.title = `#${color}`
    })
}







function generateDecimalColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return {
        red,
        green,
        blue
    }
}

function generatedHEXColor({
    red,
    green,
    blue
}) {


    const getTwoCode = (value) => {
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }


    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`

}


function generatedRGBColor({
    red,
    green,
    blue
}) {


    return `rgb(${red},${green},${blue})`
}

/**
@param {string} hex: ;
*/
function hexToRGB(hex) {
    const red = parseInt(hex.slice(0, 2), 16)
    const green = parseInt(hex.slice(2, 4), 16)
    const blue = parseInt(hex.slice(4), 16)
    return `rgb(${red},${green},${blue})`
}

console.log(hexToRGB('FFFFFF'))

/**
@param {string} color: ;
*/

function isValidColor(color) {
    if (color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}/i
}