// CheckAcc.js for Volusion stores
// Author: Peter Tandy
// Check for CustomerID cookie and make sure there's no LoggedOut
// Change the #user_icon when conditions are satisfied

if(document.cookie.includes('CustomerID') && !(document.cookie.includes('LoggedOut'))) {
	newIcon = $('#user_icon').css('background').replace('btn-user', 'btn-verify-user');
	$('#user_icon').css('background', newIcon);
	$('#user_icon').css('width', '30px');
	$('#user_icon').css('height', '30px');
}