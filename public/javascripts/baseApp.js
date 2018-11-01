import jquery from 'jquery';

import '../stylesheets/general/reset.scss';
import '../stylesheets/app.scss';
import '../stylesheets/style.scss';

/**
 * アプリケーションの基本機能を定義します。
 *
 * @export
 * @class baseApp
 */
export class baseApp {
  constructor(){
    window.$ = jquery;
    this.root = this._getRoot();
    this.ua = this._getUA();
  };
  init(fn) {
    // ===========
    // index run init before myApp init function here...
      
    // jqueryの関数拡張
    $.fn.extend({
      dateVal: function(dateValue){
        if(dateValue){
          return $(this).val(dateValue.replace(/(\d{4})(\d{2})(\d{2})/,'$1/$2/$3'));
        }
        else{
          var baf = $(this).val();
          return baf.slice(0,4) + baf.slice(5,7) + baf.slice(8,10);
        }
      },
      shamHide: function(){
        $(this).addClass("dummy-hide");
      },
      shamShow: function(){
        $(this).removeClass("dummy-hide");
      },
      setValue: function(serverData){
        console.log(serverData);
        const formData = this[0];
        if(formData){
          Object.keys(serverData).forEach(key => {
            if(formData[key]){
              $(formData[key]).val(serverData[key]);
            }
          })
        }
      },
      clearForm: function(){
        if(this[0]){
          // formの取得
          const formData = this.find("input,select,textarea,radio,checkbox,[data-dummytag='input']");
          
          // エラー表示の要素の取得
          const errInput = this.find(".error-input");
          if(errInput.length){
            for(let i=0;i<errInput.length;i++){
              $(errInput[i]).removeClass("error-input");
            }
          }

          // ボトムラベルの初期化
          const bottomLabel = this.find(".bottom-label");
          if(bottomLabel.length){
            for(let i=0;i<bottomLabel.length;i++){
              $(bottomLabel[i]).text("");
            }
          }

          // 入力系要素の初期化
          for(let i=0;i<formData.length;i++){
            let crntEle = formData[i]
            if(crntEle){
              switch(crntEle.tagName){
                case "INPUT":
                case "TEXTAREA":
                  crntEle.value = "";
                  break;
                case "DIV":
                  crntEle.textContent = null;
                  break;
                case "SELECT":
                  $(crntEle).val("");
                case "RADIO":
                case "CHECK":
                  break;
              }
            }
          }
        }
      }
    })

    //= ===========
    fn();
  }
  _getRoot(){
    let Path = location.pathname;
    Path = Path ? Path.split("/") : [];
    return Path[Path.length-1];
  }
  gerUrl(){
    return location.href;
  }
  _getUA(){
    return navigator.userAgent;
  }
  isSmartPhone(){
    if(this.ua.indexOf("iPhone") > 0 || this.ua.indexOf("Android") > 0 && this.ua.indexOf("Mobile") > 0){
      return true;
    }
    return false;
  }
  isTablet(){
    if(this.ua.indexOf("iPad") > 0 || this.ua.indexOf("Android") > 0){
      return true;
    }
    return false;
  }
  isPC(){
    if(!this.isSmartPhone && !this.isTablet){
      return true;
    }
    return false;
  }
  ready(fn) {
    document.addEventListener('DOMContentLoaded', fn, false);
  }
  load(fn) {
    window.addEventListener('load', fn, false);
  }
}
