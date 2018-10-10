/**初始化页面状态 */
$(document).ready(() => {
    $('.head_activity').show();
    $('.locale_list').hide();
})

$('.icon-guanbi').click(() => {
    $('.head_activity').hide();
})
$('.locale').mouseover(() => {
    $('.locale').addClass('locale_hover');
    $('.locale_list').show();
}).mouseout(() => {
    $('.locale').removeClass('locale_hover');
    $('.locale_list').hide();
})