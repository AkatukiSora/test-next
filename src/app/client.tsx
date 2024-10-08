
/*
    *ボタンを押すとテキストが変わるクラス
*/

class pushButton {

    private static initText = "Hoge";

    private text: string;

    constructor() {
        this.text = pushButton.initText;
    }
    /*
        * ボタンが押されたときに呼び出される関数
        * currentTextの値を変更する
    */
    pushButton() {
        const nextText = this.text === "Hoge" ? "Fuga" : "Hoge";
        this.text = nextText;
    }

    /*
        *現在のテキストを取得する
        * @return {string} 現在のテキスト
    */
    get currentText() {
        return this.text;
    }
}
export default pushButton;
