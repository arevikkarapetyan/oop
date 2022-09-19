"use strict";

function NationalDance(name, history, country, danceMoves) {
    this.name = name;
    this.history = history;
    this.country = country;
    this.danceMoves = danceMoves;
    // methods
    this.homeLand = function () {
		console.log(`Հայկական այս պարատեսակը ծագել է  ${country} -ում`);
	};
    this.yourOnlineTeacher = function () {
        console.log(`Այսօր պարում ենք ${name}: Պարի շարժումները ${danceMoves}`);
    };
    this.historyOfDance = function () {
        console.log(`Հայկական լեռնաշխարհի ամենատարածված պարերից ${history}`);
    };
    this.KomitasSpeaks = function () {
        console.log("Թեպետ մարդ պարում է ազատ կամքով, բայց մարմնի տեսակ-տեսակ շարժումներն ակամա մատնում են ներքինը!!!");
    };
    // statements
    this.dancingDilemma = function (state) {
		if (state) {
			console.log(`${name}- ը ժողովրդական պարատեսակ է`);
		} else {
			console.log(`${name}- ը ավանդական պարատեսակ է`);
		}
	};
}


const danceOfLords = new NationalDance("Իշխանաց Պար",
"«Իշխանաց պարը» շատ հպարտ, վեհ պար է,տեխնիկապես ամենաբարդ պարատեսակներից մեկը հայկական պարարվեստում", 
"Շատախ", "ձեռքերը բռնում են թևկախ, խաչված ափերով՝ ձախ ձեռքը անցկացնելով աջի վրայով"
);
// console.log(danceOfLords);

danceOfLords.homeLand();

danceOfLords.yourOnlineTeacher();

danceOfLords.dancingDilemma(false);

danceOfLords.KomitasSpeaks();


const tamzara = new NationalDance("Թամզարա", 
"Հայկական հարսանեկան երգ-պար է։Այն պարել են շատ հայկական բնակավայրերում։ Գրառվել է 17-ից ավելի տարբերակ",
"Թամզարա Գյուղ", "աջ ոտքով կատարվում է քայլ դեպի աջ, ձախ ոտքով կատարվում է կցորդ քայլ՝ ձախ ոտքը միացվում է աջին, կրկին քայլ աջ ոտքով..."
);

tamzara.yourOnlineTeacher();

const shoror = new NationalDance ("Կոմիտասի Շորոր", "Կոմիտասի գրառած 8 պարերից մեկը",
"Պարի հայրենիքն անհայտ է", "Երկու քայլ դեպի առաջ՝ սկսած աջ ոտքից հարված աջ ոտքով՝ ձախի զսպանակումներով։ Աջ ոտքը ուղիղ անկյան տակ դնել աջի ետևում։ Կրկնել 1-ից 3-րդ քալերը");

shoror.dancingDilemma(true);
shoror.KomitasSpeaks();

const Ejmiatsin =  new NationalDance ("Էջմիածին", "Պարը շատ հին է։ Ձեռքերը վեր պարզած բռնելու ձևը համեմատում են եկեղեցու գմբեթի հետ, սակայն այն, ըստ երևույթին, հեթանոսական ծագում ունի, և վեր պարզած ձեռքերը հիշեցնում են Ձոն Արևին",
"Էջմիածին", "Պարն ունի երեք մաս․ առաջին մասը ետ ու առաջ է, երկրորդը՝ աջ ու հավասար, երրորդը՝ տեղում։ Մեղեդին նույնպես կարելի է տարանջատել երեք մասի, որը նաև համընկնում է պարաքայլերի հետ։");

Ejmiatsin.historyOfDance();



// practice

const Rikky = {
    fullName: "Rikky Hudgens",
    homeLand: "USA",
    birthDay: 1997,
    education: "University of California, Berkeley",

};

const Emma  = {
    homeLand:"Armenia",
    birthday: 2002,

};

Object.setPrototypeOf(Rikky, Emma);

console.log(Rikky.education);

const Anna = Object.create(Rikky);

console.log(Anna.birthday);

console.log(Object.assign(Rikky, Emma));
