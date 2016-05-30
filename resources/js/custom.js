// if (Cookies.get('visited') == undefined) {
// Cookies.set('visited', 'false');
// }
// console.log (Cookies.get('visited'))

// if (Cookies.get('visited') == 'false'){
// 	window.alert("Welcome")
// } else {
// 	window.alert("Welcome back!!")
// }

// if (Cookies.get('visited') == 'false'){
// 	Cookies.set('visited', 'true')
// }

// console.log(Cookies.get('visited'))

if(Cookies.get('something') !== undefined) {
      alert("Welcome back!!");
    } else {
      alert("Welcome!")
    }

Cookies.set('something', { stuff: 'more stuff' });