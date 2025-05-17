/**
 * EXEMPLE UTILISATION :
 * 
 * const katakana = new Katakana()
 * 
 * console.log(katakana.getGroupe('voyelles'))
 * 
 * console.log(katakana.rechercherParSymbole('ア'))
 * 
 * console.log(katakana.rechercherParSon('ka'))
 * 
 */
export default class Katakana {

    constructor() {
        // Voyelles
        this.voyelles = [
            { symbole: 'ア', son: 'a' },
            { symbole: 'イ', son: 'i' },
            { symbole: 'ウ', son: 'u' },
            { symbole: 'エ', son: 'e' },
            { symbole: 'オ', son: 'o' }
        ];

        // Petites voyelles (utilisées pour les diphtongues et combinaisons spéciales)
        this.petitesVoyelles = [
            { symbole: 'ァ', son: 'petit a' },
            { symbole: 'ィ', son: 'petit i' },
            { symbole: 'ゥ', son: 'petit u' },
            { symbole: 'ェ', son: 'petit e' },
            { symbole: 'ォ', son: 'petit o' }
        ];

        // Groupe K
        this.groupeK = [
            { symbole: 'カ', son: 'ka' },
            { symbole: 'キ', son: 'ki' },
            { symbole: 'ク', son: 'ku' },
            { symbole: 'ケ', son: 'ke' },
            { symbole: 'コ', son: 'ko' },
            { symbole: 'ガ', son: 'ga' },
            { symbole: 'ギ', son: 'gi' },
            { symbole: 'グ', son: 'gu' },
            { symbole: 'ゲ', son: 'ge' },
            { symbole: 'ゴ', son: 'go' }
        ];

        // Groupe S
        this.groupeS = [
            { symbole: 'サ', son: 'sa' },
            { symbole: 'シ', son: 'shi' },
            { symbole: 'ス', son: 'su' },
            { symbole: 'セ', son: 'se' },
            { symbole: 'ソ', son: 'so' },
            { symbole: 'ザ', son: 'za' },
            { symbole: 'ジ', son: 'ji' },
            { symbole: 'ズ', son: 'zu' },
            { symbole: 'ゼ', son: 'ze' },
            { symbole: 'ゾ', son: 'zo' }
        ];

        // Groupe T
        this.groupeT = [
            { symbole: 'タ', son: 'ta' },
            { symbole: 'チ', son: 'chi' },
            { symbole: 'ツ', son: 'tsu' },
            { symbole: 'テ', son: 'te' },
            { symbole: 'ト', son: 'to' },
            { symbole: 'ダ', son: 'da' },
            { symbole: 'ヂ', son: 'ji (di)' },
            { symbole: 'ヅ', son: 'zu (du)' },
            { symbole: 'デ', son: 'de' },
            { symbole: 'ド', son: 'do' }
        ];

        // Groupe N
        this.groupeN = [
            { symbole: 'ナ', son: 'na' },
            { symbole: 'ニ', son: 'ni' },
            { symbole: 'ヌ', son: 'nu' },
            { symbole: 'ネ', son: 'ne' },
            { symbole: 'ノ', son: 'no' }
        ];

        // Groupe H
        this.groupeH = [
            { symbole: 'ハ', son: 'ha' },
            { symbole: 'ヒ', son: 'hi' },
            { symbole: 'フ', son: 'fu' },
            { symbole: 'ヘ', son: 'he' },
            { symbole: 'ホ', son: 'ho' },
            { symbole: 'バ', son: 'ba' },
            { symbole: 'ビ', son: 'bi' },
            { symbole: 'ブ', son: 'bu' },
            { symbole: 'ベ', son: 'be' },
            { symbole: 'ボ', son: 'bo' },
            { symbole: 'パ', son: 'pa' },
            { symbole: 'ピ', son: 'pi' },
            { symbole: 'プ', son: 'pu' },
            { symbole: 'ペ', son: 'pe' },
            { symbole: 'ポ', son: 'po' }
        ];

        // Groupe M
        this.groupeM = [
            { symbole: 'マ', son: 'ma' },
            { symbole: 'ミ', son: 'mi' },
            { symbole: 'ム', son: 'mu' },
            { symbole: 'メ', son: 'me' },
            { symbole: 'モ', son: 'mo' }
        ];

        // Groupe Y
        this.groupeY = [
            { symbole: 'ヤ', son: 'ya' },
            { symbole: 'ユ', son: 'yu' },
            { symbole: 'ヨ', son: 'yo' }
        ];

        // Petits Y (utilisés pour les combinaisons)
        this.petitsY = [
            { symbole: 'ャ', son: 'petit ya' },
            { symbole: 'ュ', son: 'petit yu' },
            { symbole: 'ョ', son: 'petit yo' }
        ];

        // Combinaisons avec Y
        this.combinaisonsY = [
            { symbole: 'キャ', son: 'kya' },
            { symbole: 'キュ', son: 'kyu' },
            { symbole: 'キョ', son: 'kyo' },
            { symbole: 'シャ', son: 'sha' },
            { symbole: 'シュ', son: 'shu' },
            { symbole: 'ショ', son: 'sho' },
            { symbole: 'チャ', son: 'cha' },
            { symbole: 'チュ', son: 'chu' },
            { symbole: 'チョ', son: 'cho' },
            { symbole: 'ニャ', son: 'nya' },
            { symbole: 'ニュ', son: 'nyu' },
            { symbole: 'ニョ', son: 'nyo' },
            { symbole: 'ヒャ', son: 'hya' },
            { symbole: 'ヒュ', son: 'hyu' },
            { symbole: 'ヒョ', son: 'hyo' },
            { symbole: 'ミャ', son: 'mya' },
            { symbole: 'ミュ', son: 'myu' },
            { symbole: 'ミョ', son: 'myo' },
            { symbole: 'リャ', son: 'rya' },
            { symbole: 'リュ', son: 'ryu' },
            { symbole: 'リョ', son: 'ryo' },
            { symbole: 'ギャ', son: 'gya' },
            { symbole: 'ギュ', son: 'gyu' },
            { symbole: 'ギョ', son: 'gyo' },
            { symbole: 'ジャ', son: 'ja' },
            { symbole: 'ジュ', son: 'ju' },
            { symbole: 'ジョ', son: 'jo' },
            { symbole: 'ビャ', son: 'bya' },
            { symbole: 'ビュ', son: 'byu' },
            { symbole: 'ビョ', son: 'byo' },
            { symbole: 'ピャ', son: 'pya' },
            { symbole: 'ピュ', son: 'pyu' },
            { symbole: 'ピョ', son: 'pyo' }
        ];

        // Groupe R
        this.groupeR = [
            { symbole: 'ラ', son: 'ra' },
            { symbole: 'リ', son: 'ri' },
            { symbole: 'ル', son: 'ru' },
            { symbole: 'レ', son: 're' },
            { symbole: 'ロ', son: 'ro' }
        ];

        // Groupe W
        this.groupeW = [
            { symbole: 'ワ', son: 'wa' },
            { symbole: 'ヲ', son: 'wo' }
        ];

        // Petit W (rare mais utilisé)
        this.petitW = [
            { symbole: 'ヮ', son: 'petit wa' }
        ];

        // Petit tsu (marque une consonne doublée/coupure)
        this.petitTsu = [
            { symbole: 'ッ', son: 'tsu de coupure' }
        ];

        // N
        this.n = [
            { symbole: 'ン', son: 'n' }
        ];

        // Katakanas spéciaux pour sons étrangers
        this.sonsEtrangers = [
            { symbole: 'ヴ', son: 'vu' },
            { symbole: 'ファ', son: 'fa' },
            { symbole: 'フィ', son: 'fi' },
            { symbole: 'フェ', son: 'fe' },
            { symbole: 'フォ', son: 'fo' },
            { symbole: 'ウィ', son: 'wi' },
            { symbole: 'ウェ', son: 'we' },
            { symbole: 'ウォ', son: 'wo (moderne)' },
            { symbole: 'ティ', son: 'ti' },
            { symbole: 'トゥ', son: 'tu' },
            { symbole: 'チェ', son: 'che' },
            { symbole: 'シェ', son: 'she' },
            { symbole: 'ジェ', son: 'je' }
        ];

        // Ponctuation et symboles japonais
        this.ponctuation = [
            { symbole: '。', son: 'point' },
            { symbole: '、', son: 'virgule' },
            { symbole: '！', son: 'point d\'exclamation' },
            { symbole: '？', son: 'point d\'interrogation' },
            { symbole: '・', son: 'point médian' },
            { symbole: '「', son: 'guillemet ouvrant' },
            { symbole: '」', son: 'guillemet fermant' },
            { symbole: '～', son: 'tilde' },
            { symbole: '　', son: 'espace' },
            { symbole: '…', son: 'points de suspension' },
            { symbole: 'ー', son: 'allongement de voyelle' }
        ];
    }

    // Méthode pour obtenir tous les katakana
    getTousLesKatakana() {
        return {
            voyelles: this.voyelles,
            petitesVoyelles: this.petitesVoyelles,
            groupeK: this.groupeK,
            groupeS: this.groupeS,
            groupeT: this.groupeT,
            groupeN: this.groupeN,
            groupeH: this.groupeH,
            groupeM: this.groupeM,
            groupeY: this.groupeY,
            petitsY: this.petitsY,
            combinaisonsY: this.combinaisonsY,
            groupeR: this.groupeR,
            groupeW: this.groupeW,
            petitW: this.petitW,
            petitTsu: this.petitTsu,
            n: this.n,
            sonsEtrangers: this.sonsEtrangers,
            ponctuation: this.ponctuation
        };
    }

    // Méthode pour obtenir un groupe spécifique
    getGroupe(nomGroupe) {
        return this[nomGroupe] || [];
    }

    // Méthode pour rechercher un katakana par son symbole
    rechercherParSymbole(symbole) {
        for (const groupe in this) {
            if (Array.isArray(this[groupe])) {
                const resultat = this[groupe].find(item => item.symbole === symbole);
                if (resultat) return resultat;
            }
        }
        return null;
    }

    // Méthode pour rechercher un katakana par son son
    rechercherParSon(son) {
        for (const groupe in this) {
            if (Array.isArray(this[groupe])) {
                const resultat = this[groupe].find(item => item.son === son);
                if (resultat) return resultat;
            }
        }
        return null;
    }
}