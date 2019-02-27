var drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
	drawer.open = !drawer.open;
});



const menu = new mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'))

$('#menu').on('click',function(){
	menu.open = true;
})

new mdc.ripple.MDCRipple.attachTo(document.querySelector('.b1'));

document.querySelector('#btn').addEventListener('click', function(evt){
	const dialog = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.d1'))
	event.preventDefault(evt);
	dialog.lastFocusedTarget = evt.target;
	dialog.open();
	console.log('accepted');
});

const snackbar = new mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));

$('#btn1').on('click',function(){
	snackbar.open();
})
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText2'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText4'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.user'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.pass'));


