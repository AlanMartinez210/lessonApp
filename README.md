# lessonApp
MVC練習用の模擬アプリケーション準備編

## 事前準備
### 初めに以下のアプリケーションをインストールしてください。

 - データベース
    - mysql (https://dev.mysql.com/downloads/windows/installer/8.0.html)
 - 汎用SQL開発ツール
    - A5m2 (https://a5m2.mmatsubara.com/)
 - エディタ(この解説は以下のエディタを使って行います)
    - visual studio code (https://code.visualstudio.com/)
 - その他必要なもの
    - node.js(推奨版) (https://nodejs.org/ja/)
 
```` text
  ※ 補足
  mysql8で認証系のエラーが表示された場合、デフォルト認証プラグインの問題の可能性があります。
  デフォルト認証プラグインを以下に変更してください。
  default_authentication_plugin = mysql_native_password

  特に問題なければmysqlでは以下のユーザーを作成してください。
    userID: root
    password: Password
````

## インストールが完了したら
### 正しくインストール出来ているか確認します。

 - node
    - コマンドプロンプトを開き以下のコマンドを実行します。
      - `npm -v`を実行し、バージョン情報が表示されればOKです。
 - データベース
    1. インストールしたA5m2を立ち上げ、データベース(D) > データベースの追加と削除 をクリック
    1. 右下の 追加ボタン をクリック
    1. mysql を選択
    1. データベースの内容を登録 のウィンドウが開くので、基本タブに以下の内容を入力し、テスト接続をクリック、「接続に成功しました。」のダイアログが出ればOKです。  
    右横の ✓OK ボタン をクリックします。
    ```` text
      ホスト名: localhost
      ユーザー名: root
      パスワード: Password
      データベース: mysql
      キャラクタセット: utf8
    ````

## データベースの作成
### 新しくDBを作成します。

  **a5m2で以下のSQLを実行します。**
  ```` SQL
  create database database_development;
  ````

## プロジェクトのダウンロード
### githubからプロジェクトをダウンロードします。

 - 以下の手順を行ってください。
   1. このページ右上の Clone or download のボタンをクリックします。
   1. Download ZIP をクリックします。
   1. ダウンロードしたzipをドキュメント直下に解凍します。

## プロジェクトの初期化
### npmコマンドを使い、プロジェクトを初期化します。

 - 以下の手順を行ってください。
   1. 解凍したプロジェクトをvisual studio code(以下 VSC)で開きます。
       - 一番下にターミナルタブがない場合は、 表示(V) > ターミナルを選択し、ターミナルを表示してください。
       - コマンドプロンプトと同様の内容がターミナルに表示されます。
   1. ターミナルに `npm install` と入力します。
   1. ダウンロードが完了し `added *** packages in **.***s` と表示されればOKです

## データベースの初期化とテーブルの作成
### マイグレーション機能を利用してテーブルを初期化します。

 - 以下の手順を行ってください。
   1. ターミナルに `npm run migrate:up` と入力します。
   2. 実行後 ` == **************-create-user: migrated (*.***s) ` と表示されればOKです。

## サーバーの起動
### npmコマンドを実行し、サーバーを起動する。

 - 以下の手順を行ってください。
   1. ターミナルに `npm run start` と入力します。(このコマンドがサーバー起動を意味します。)
   2. 実行後 ` ---- start env ------ development ` と表示されればOKです。

## 起動確認
### ブラウザにアクセスし、表示を確認する。

 - 以下の手順を行ってください。
   1. 任意のブラウザを開きます。
   2. ` http://localhost:3000 ` にアクセスします。
   3. Welcome to テストページ と表示されればOKです。

#### ==== MVC練習用の模擬アプリケーション準備編終了 ====


