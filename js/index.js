var isOpen = false;
var volume = 0.75;

// Bank2音の素材を変数に代入
var kick = new Howl({src: ['libra/diKick.wav'],volume: volume});
var clap = new Howl({src: ['libra/PrimClap.WAV'],volume: volume});
var closedHat = new Howl({src: ['libra/PriH.wav'],volume: volume});
var shaker = new Howl({src: ['libra/PrimShaker.wav'],volume: volume});
var priKick = new Howl({src: ['libra/PrimKick.wav'],volume: volume});
var sd = new Howl({src: ['libra/PrimSd.wav'],volume: volume});
var rimTwo = new Howl({src: ['libra/Rim.wav'],volume: volume});
var scratch = new Howl({src: ['libra/Scratch.wav'],volume: volume});
var sndOne = new Howl({src: ['libra/Snd1.wav'],volume: volume});
var sndTwo = new Howl({src: ['libra/Snd2.wav'],volume: volume});
var sndThree = new Howl({src: ['libra/Snd3.wav'],volume: volume});
var sndFour = new Howl({src: ['libra/Snd4.wav'],volume: volume});

// Bank2
var bassOne = new Howl({src: ['bankTwo/BassZion1.wav'],volume: volume});
var bassTwo = new Howl({src: ['bankTwo/BassZion2.wav'],volume: volume});
var bassThree = new Howl({src: ['bankTwo/BassZion3.wav'],volume: volume});
var clH = new Howl({src: ['bankTwo/ClHHZion.wav'],volume: volume});
var guiter = new Howl({src: ['bankTwo/GuZion.wav'],volume: volume});
var kickZion = new Howl({src: ['bankTwo/KickZion1.wav'],volume: volume});
var opH = new Howl({src: ['bankTwo/OpenHHZion1.wav'],volume: volume});
var rim = new Howl({src: ['bankTwo/RimZion.wav'],volume: volume});
var sneaThree = new Howl({src: ['bankTwo/SdZion.wav'],volume: volume});
var tam = new Howl({src: ['bankTwo/TambourineZion.wav'],volume: volume});
var tim = new Howl({src: ['bankTwo/TimbaleZion.wav'],volume: volume});
var vocalTwo = new Howl({src: ['bankTwo/VocalZion.wav'],volume: volume});

// 音の素材をsounds配列に格納
var sounds = [kick, clap, closedHat, shaker, priKick, sd, rimTwo, scratch, sndOne, sndTwo,
              sndThree, sndFour,bassOne, bassTwo, bassThree, clH, guiter, kickZion, opH, rim,
              sneaThree, tam, tim, vocalTwo];

// 音量
function changeVolume() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var volumeValue = isNaN(value) ? $('#slider').slider('value') / 100 : value;
  volume = volumeValue;
  sounds.forEach(function (sound) {
    sound._volume = volume;
  });
  $('.screen-info').html('Vol: ' + Math.round(volume * 100));
}

// jQueryのスライダーの読み込み
$("#slider").slider({
  orientation: "vertical",
  max: 100,
  value: 75,
  slide: changeVolume,
  change: changeVolume });

// padオブジェクト
var padObject = {
  one: {'sound': sndOne, name: 'Sound One'},
  two: {'sound': sndTwo, name: 'Sound Two'},
  three: {'sound': sndThree, name: 'Sound Three'},
  four: {'sound': sndFour, name: 'Sound Four'},
  five: {'sound': shaker, name: 'Shaker'},
  six: {'sound': clap, name: 'Clap'},
  seven: {'sound': sd, name: 'Snea'},
  eight: {'sound': rimTwo, name: 'Rim Shot'},
  nine: {'sound': closedHat, name: 'Hi Hat'},
  ten: {'sound': kick, name: 'Kick One'},
  eleven: {'sound': priKick, name: 'Kick Two'},
  twelve: {'sound': scratch, name: 'Scratch'},
};

// 再生関数
var playSound = function playSound(pad, div) {
  // pad.sound.currentTime = 0;
  pad.sound.play();
  $('.screen-info').html(pad.name);
  div.addClass('pressed');
  setTimeout(function() {
    div.removeClass('pressed');
  }, 100);
};

// padクラスをクリックした時の処理
$('.pad').click(function (e) {
  var id = e.target.id;
  playSound(padObject[id], $('#' + id ));
});

// keyの配置とidを関連づける
$(document).keydown(function(e) {
  switch (e.which) {
    case 81:
      playSound(padObject.one, $('#one'));
      return;
    case 87:
      playSound(padObject.two, $('#two'));
      return;
    case 69:
      playSound(padObject.three, $('#three'));
      return;
    case 82:
      playSound(padObject.four, $('#four'));
      return;
    case 65:
      playSound(padObject.five, $('#five'));
      return;
    case 83:
      playSound(padObject.six, $('#six'));
      return;
    case 68:
      playSound(padObject.seven, $('#seven'));
      return;
    case 70:
      playSound(padObject.eight, $('#eight'));
      return;
    case 90:
      playSound(padObject.nine, $('#nine'));
      return;
    case 88:
      playSound(padObject.ten, $('#ten'));
      return;
    case 67:
      playSound(padObject.eleven, $('#eleven'));
      return;
    case 86:
      playSound(padObject.twelve, $('#twelve'));
      return;
  };
});

// bank1の設定
$('.bank-one').click(function() {
  $('.bank-one').addClass('active');
  $('.bank-two').removeClass('active');
  $('.screen-info').html('First Kit..');
  padObject = {
    one: {'sound': sndOne, name: 'Sound One'},
    two: {'sound': sndTwo, name: 'Sound Two'},
    three: {'sound': sndThree, name: 'Sound Three'},
    four: {'sound': sndFour, name: 'Sound Four'},
    five: {'sound': shaker, name: 'Shaker'},
    six: {'sound': clap, name: 'Clap'},
    seven: {'sound': sd, name: 'Snea'},
    eight: {'sound': rimTwo, name: 'Rim Shot'},
    nine: {'sound': closedHat, name: 'Hi Hat'},
    ten: {'sound': kick, name: 'Kick One'},
    eleven: {'sound': priKick, name: 'Kick Two'},
    twelve: {'sound': scratch, name: 'Scratch'},
  };
});

// bank2の設定
$('.bank-two').click(function () {
  $('.bank-two').addClass('active');
  $('.bank-one').removeClass('active');
  $('.screen-info').html('Zion Kit..');
  padObject = {
    // ここにbank2の音をアサインする
    one: {'sound': bassOne, name: 'Bass One'},
    two: {'sound': bassTwo, name: 'Bass Two'},
    three: {'sound': bassThree, name: 'Bass Three'},
    four: {'sound': vocalTwo, name: 'Vocal'},
    five: {'sound': tim, name: 'Timbale'},
    six: {'sound': tam, name: 'Tambourine'},
    seven: {'sound': rim, name: 'Rim Shot'},
    eight: {'sound': sneaThree, name: 'Snea'},
    nine: {'sound': clH, name: 'Hi Hat'},
    ten: {'sound': opH, name: 'Open Hat'},
    eleven: {'sound': kickZion, name: 'Kick'},
    twelve: {'sound': guiter, name: 'Guiter'},
  }
})

// Timeline TweenMax
// コピペ
$(document).ready(function () {
  var tl = new TimelineLite();
  tl.to('.on-button', 0.4, { // クラス指定, 秒数,
    opacity: 0, // 透明度
    top: '0%' }, // top0%の部分に動く
  'first +=0.2'); // 0.2秒後一番先に動く
  tl.to('.pad', 0.4, {
    left: '105%' },
  'poof');
  tl.to('.screen', 0.3, {
    background: "rgb(255, 255, 255)",
    },
  'proof');
  tl.to('.bank-one', 0.5, {
    opacity: 0,
    },
  'proof');
  tl.to('.bank-two', 0.4, {
    opacity: 0,
    },
  'proof');
  tl.to('.dial', 0.3, {
    css: {rotation:360, ease: Back.easeOut.config(1.7), y: 10},
    },
  'proof');
  tl.to('.dial-inner-1', 0.4, {
    css: {rotation:360, ease: Back.easeOut.config(2.8), y: 10},
    },
  'proof');
  tl.to('.dial-inner-2', 0.5, {
    css: {rotation:360, ease: Back.easeOut.config(1.9), y: 10},
    },
  'proof');

  tl.to('.ui-slider-handle', 0.4, {
    ease: Bounce.easeOut, y: 103 },
  'poof');

  tl.to('.detail-strip', 0.4, {
    opacity: 0,
    top: '-30%' },
  'poof');
  tl.from('.strap', 0.4, {
    height: '0%',
    ease: Power1.easeIn });

  tl.to('.top-plate', 0.3, {
    height: '100%',
    cursor: 'pointer' },
  'first');
  tl.to('.bottom-plate', 0, {
    display: 'none' },
  'first');
  tl.to('.sampler', 0.7, {
    transform: 'scale(0.6)', // 大きさが変形する
    ease: Power2.easeOut },
  'first -=0.15');
  tl.to('.sampler', 0.1, {
    width: '17em',
    ease: Power1.easeNone },
  '+=0.25');
  tl.stop();

  $('.top-plate, .strap').click(function () {
    if (isOpen) {
      tl.reverse();
      changeVolume(0.75);
      isOpen = false;
    }
  });

  $('.on-button').click(function () {
    if (!isOpen) {
      tl.play();
      changeVolume(0);
      $('.screen-info').html('Goodbye..');
      isOpen = true;
    }
  });

  $('.sampler').hover(function () {
    if (isOpen) {
      $('.sampler').addClass('highlight');
    }
  });

  $('.sampler').mouseleave(function () {
    if (isOpen) {
      $('.sampler').removeClass('highlight');
    }
  });

  $('.sampler').click(function () {
    $('.sampler').removeClass('highlight');
  });
});
