export type CardSuit = 'D' | 'C' | 'H' | 'S';
export type CardType = 'normal' | 'weapon' | 'armor' | '+1horse' | '-1horse' | 'scheme' | 'delay';
export enum CardContent {
	// normal 基本牌：
	'杀'=1, '闪'=2, '桃'=3, '雷杀'=4, '火杀'=5, '酒'=6,
	// weapon 武器：
	'雌雄双股剑'=11, '青釭剑'=12, '贯石斧'=13, '青龙偃月刀'=14, '丈八蛇矛'=15, 
	'麒麟弓'=16, '寒冰剑'=17, '古锭刀'=18, '朱雀羽扇'=19, '诸葛连弩'=20,
	// armor 防具：
	'白银狮子'=51, '藤甲'=52, '仁王盾'=53, '八卦阵'=54,
	// +1horse +1马：
	'骅骝'=81, '绝影'=82, '爪黄飞电'=83, '的卢'=84,
	// -1horse -1马：
	'大宛'=91, '紫骍'=92, '赤兔'=93, 
	// scheme 锦囊：
	'决斗'=111, '过河拆桥'=112, '顺手牵羊'=113, '万箭齐发'=114, '南蛮入侵'=115, 
	'无中生有'=116, '桃园结义'=117, '五谷丰登'=118, '借刀杀人'=119, '无懈可击'=120, 
	'铁索连环'=121, '火攻'=122,
	// delay 延时锦囊：
	'乐不思蜀'=150, '闪电'=151, '兵粮寸断'=152
};


export class Card {
	private _num: number;
	private _suit: CardSuit;
	private _type: CardType;
	private _content: CardContent;
	private _textContent: string;
	private _id: number;
	public darken: boolean = false;
	public selected: boolean = false;

	constructor(num: number, suit: CardSuit, content: CardContent, id: number) {
		if(num<1||num>13){
			console.error('Invalid card number: ', num);
			return;
		}
		this._num = num;
		this._suit = suit;
		this._content = content;
		this._textContent = CardContent[content];
		this._id = id;
		this._type = content < 11 ? 'normal' :
			content < 51 ? 'weapon' :
			content < 81 ? 'armor' :
			content < 91 ? '+1horse' :
			content < 111 ? '-1horse' :
			content < 150 ? 'scheme' : 'delay';
	}

	get num(): number {
		return this._num;
	}
	get numStr(): string {
		let s = this._num.toString();
		return s === '1' ? 'A' : s === '11' ? 'J' : s === '12' ? 'Q' : s === '13' ? 'K' : s;
	}
	get suit(): CardSuit {
		return this._suit;
	}
	get type(): CardType {
		return this._type;
	}
	get content(): CardContent {
		return this._content;
	}
	get textContent(): string {
		return this._textContent;
	}
	get id(): number {
		return this._id;
	}
	isRed(){
		return ['D', 'H'].indexOf(this._suit) > -1;
	}
	isBig(c: Card){
		return this._num > c.num;
	}
	isSameSuit(c: Card){
		return this._suit === c.suit;
	}
}