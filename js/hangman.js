function drawHangman() {
  if (!hangman.getContext) {
    return alert('Your browser does not support canvas')
  }
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = '4.5';
  ctx.beginPath();
  ctx.moveTo(355, 355);
  ctx.lineTo(5, 355);
  ctx.moveTo(50, 355);
  ctx.lineTo(50, 5);
  ctx.lineTo(227, 5);
  ctx.lineTo(227, 45);
  ctx.stroke();
}
function headHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(227, 75, 31.5, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();
}
function bodyHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(227, 109);
  ctx.lineTo(227, 230);
  ctx.stroke();
}
function leftArmHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(227, 109);
  ctx.lineTo(191, 181);
  ctx.stroke();
}
function rightArmHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(227, 109);
  ctx.lineTo(262, 181);
  ctx.stroke();
}
function leftLegHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(227, 229);
  ctx.lineTo(191, 301);
  ctx.stroke();
}
function rightLegHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(227, 229);
  ctx.lineTo(262, 301);
  ctx.stroke();
}
function leftFootHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(165, 300);
  ctx.lineTo(192, 300);
  ctx.stroke();
}
function rightFootHangman() {
  const ctx = hangman.getContext('2d')
  ctx.strokeStyle = '#0A3871';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(260, 300);
  ctx.lineTo(289, 300);
  ctx.stroke();
}