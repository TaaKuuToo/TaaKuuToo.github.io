function CountdownTimer(elm, tl, mes) {
  this.initialize.apply(this, arguments);
}
CountdownTimer.prototype = {
  initialize: function (elm, tl, mes) {
    this.elem = document.getElementById(elm);
    this.tl = tl;
    this.mes = mes;
  },
  countDown: function () {
    var timer = '';
    var today = new Date();
    var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
    var hour = Math.floor(((this.tl - today) % (  60 * 60 * 1000)) / (60 * 60 * 1000));
    var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
    var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
    var me = this;

    if ((this.tl - today) > 0) {
      if (day) timer += '<span class="cdt_num">' + day + '</span><small>日と</small>';
      if (hour) timer += '<span class="cdt_num">' + hour + '</span><small>時間</small>';
      timer += '<span class="cdt_num">' + this.addZero(min) + '</span><small>分</small><span class="cdt_num">' +
          this.addZero(sec) + '</span><small>秒</small><span class="cdt_num">';
      this.elem.innerHTML = timer;
      tid = setTimeout(function () {
        me.countDown();
      }, 10);
    } else {
      this.elem.innerHTML = this.mes;
      return;
    }
  },
  addZero: function (num) {
    return ('0' + num).slice(-2);
  }
}

// ▼ 開始日時と終了日時を入力
function CDT() {

  var today = new Date();
  var myD = today.getTime(); // 1970/1/1午前0時から現在までのミリ秒
  var start = new Date('2019/1/9/ 0:00:00'); // 開始日時を入力
  var myS = start.getTime(); // 1970/1/1午前0時からの開始日時までのミリ秒
  var end = new Date('2019/1/31/ 0:00:00'); // 終了日時を入力
  var myE = end.getTime(); // 1970/1/1午前0時から終了日時までのミリ秒

  // 開始までor終了までor終了後のカウントダウンタイマー前テキスト
  if (myS <= myD && myE >= myD) {
    var text = '<span>実装</span><span>まで</span>';
    var tl = new Date(end);
  } // 終了まで
  else if (myS > myD) {
    var text = '<span>開催</span><span>まで</span>';
    var tl = new Date(start);
  } // 開始まで
  else {
    var text = '';
  } // 終了後

  var timer = new CountdownTimer('cdt_date', tl, '<small>実装されました！</small>');
  timer.countDown();
  target = document.getElementById("cdt_txt");
  target.innerHTML = text;
}

window.onload = function () {
  CDT();
}