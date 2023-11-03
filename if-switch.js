// if else swith

let buttonStatus = 'dbled'

if (buttonStatus == 'enabled') {
    console.log('lala')
} else if (buttonStatus == 'disabled') {
    console.log('noo')
} else {
    console.log('button has another status')
}

// another way to do it

let button = 'enabled'
switch (button) {
    case 'enabled':  
        console.log('siiii')
    break;

    case 'disabled':
        console.log('nogggo')
    break
}
