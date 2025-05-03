/**
 * EXEMPLE UTILISATION :
 * 
 * const hiragana = new Hiragana()
 * 
 * console.log(hiragana.getGroupe('voyelles'))
 * 
 * console.log(hiragana.rechercherParSymbole('あ'))
 * 
 * console.log(hiragana.rechercherParSon('ka'))
 * 
 */
export default class Hiragana {

    constructor() {
        
        /**
         * Voyelles
         */
        this.voyelles = [
            { symbole: 'あ', son: 'a' },
            { symbole: 'い', son: 'i' },
            { symbole: 'う', son: 'u' },
            { symbole: 'え', son: 'e' },
            { symbole: 'お', son: 'o' }
        ];

        /**
         * Groupe K
         */
        this.groupeK = [
            { symbole: 'か', son: 'ka' },
            { symbole: 'き', son: 'ki' },
            { symbole: 'く', son: 'ku' },
            { symbole: 'け', son: 'ke' },
            { symbole: 'こ', son: 'ko' },
            { symbole: 'が', son: 'ga' },
            { symbole: 'ぎ', son: 'gi' },
            { symbole: 'ぐ', son: 'gu' },
            { symbole: 'げ', son: 'ge' },
            { symbole: 'ご', son: 'go' }
        ];

        /**
         * Groupe S
         */
        this.groupeS = [
            { symbole: 'さ', son: 'sa' },
            { symbole: 'し', son: 'shi' },
            { symbole: 'す', son: 'su' },
            { symbole: 'せ', son: 'se' },
            { symbole: 'そ', son: 'so' },
            { symbole: 'ざ', son: 'za' },
            { symbole: 'じ', son: 'ji' },
            { symbole: 'ず', son: 'zu' },
            { symbole: 'ぜ', son: 'ze' },
            { symbole: 'ぞ', son: 'zo' }
        ];

        /**
         * Groupe T
         */
        this.groupeT = [
            { symbole: 'た', son: 'ta' },
            { symbole: 'ち', son: 'chi' },
            { symbole: 'つ', son: 'tsu' },
            { symbole: 'て', son: 'te' },
            { symbole: 'と', son: 'to' },
            { symbole: 'だ', son: 'da' },
            { symbole: 'ぢ', son: 'ji (di)' },
            { symbole: 'づ', son: 'zu (du)' },
            { symbole: 'で', son: 'de' },
            { symbole: 'ど', son: 'do' }
        ];

        /**
         * Groupe N
         */
        this.groupeN = [
            { symbole: 'な', son: 'na' },
            { symbole: 'に', son: 'ni' },
            { symbole: 'ぬ', son: 'nu' },
            { symbole: 'ね', son: 'ne' },
            { symbole: 'の', son: 'no' }
        ];

        /**
         * Groupe H
         */
        this.groupeH = [
            { symbole: 'は', son: 'ha' },
            { symbole: 'ひ', son: 'hi' },
            { symbole: 'ふ', son: 'fu' },
            { symbole: 'へ', son: 'he' },
            { symbole: 'ほ', son: 'ho' },
            { symbole: 'ば', son: 'ba' },
            { symbole: 'び', son: 'bi' },
            { symbole: 'ぶ', son: 'bu' },
            { symbole: 'べ', son: 'be' },
            { symbole: 'ぼ', son: 'bo' },
            { symbole: 'ぱ', son: 'pa' },
            { symbole: 'ぴ', son: 'pi' },
            { symbole: 'ぷ', son: 'pu' },
            { symbole: 'ぺ', son: 'pe' },
            { symbole: 'ぽ', son: 'po' }
        ];

        /**
         * Groupe M
         */
        this.groupeM = [
            { symbole: 'ま', son: 'ma' },
            { symbole: 'み', son: 'mi' },
            { symbole: 'む', son: 'mu' },
            { symbole: 'め', son: 'me' },
            { symbole: 'も', son: 'mo' }
        ];

        /**
         * Groupe Y
         */
        this.groupeY = [
            { symbole: 'や', son: 'ya' },
            { symbole: 'ゆ', son: 'yu' },
            { symbole: 'よ', son: 'yo' }
        ];

        /**
         * Combinaisons avec Y
         */
        this.combinaisonsY = [
            { symbole: 'きゃ', son: 'kya' },
            { symbole: 'きゅ', son: 'kyu' },
            { symbole: 'きょ', son: 'kyo' },
            { symbole: 'しゃ', son: 'sha' },
            { symbole: 'しゅ', son: 'shu' },
            { symbole: 'しょ', son: 'sho' },
            { symbole: 'ちゃ', son: 'cha' },
            { symbole: 'ちゅ', son: 'chu' },
            { symbole: 'ちょ', son: 'cho' },
            { symbole: 'にゃ', son: 'nya' },
            { symbole: 'にゅ', son: 'nyu' },
            { symbole: 'にょ', son: 'nyo' },
            { symbole: 'ひゃ', son: 'hya' },
            { symbole: 'ひゅ', son: 'hyu' },
            { symbole: 'ひょ', son: 'hyo' },
            { symbole: 'みゃ', son: 'mya' },
            { symbole: 'みゅ', son: 'myu' },
            { symbole: 'みょ', son: 'myo' },
            { symbole: 'りゃ', son: 'rya' },
            { symbole: 'りゅ', son: 'ryu' },
            { symbole: 'りょ', son: 'ryo' },
            { symbole: 'ぎゃ', son: 'gya' },
            { symbole: 'ぎゅ', son: 'gyu' },
            { symbole: 'ぎょ', son: 'gyo' },
            { symbole: 'じゃ', son: 'ja' },
            { symbole: 'じゅ', son: 'ju' },
            { symbole: 'じょ', son: 'jo' },
            { symbole: 'びゃ', son: 'bya' },
            { symbole: 'びゅ', son: 'byu' },
            { symbole: 'びょ', son: 'byo' },
            { symbole: 'ぴゃ', son: 'pya' },
            { symbole: 'ぴゅ', son: 'pyu' },
            { symbole: 'ぴょ', son: 'pyo' }
        ];

        /**
         * Groupe R
         */
        this.groupeR = [
            { symbole: 'ら', son: 'ra' },
            { symbole: 'り', son: 'ri' },
            { symbole: 'る', son: 'ru' },
            { symbole: 'れ', son: 're' },
            { symbole: 'ろ', son: 'ro' }
        ];

        /**
         * Groupe W
         */
        this.groupeW = [
            { symbole: 'わ', son: 'wa' },
            { symbole: 'を', son: 'wo' }
        ];

        /**
         * N
         */
        this.n = [
            { symbole: 'ん', son: 'n' }
        ];

        /**
         * Ponctuation et symboles japonais
         */
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
            { symbole: '…', son: 'points de suspension' }
        ];
    }

    /**
     * obtenir tous les hiragana
     * @returns object
     */
    getTousLesHiragana() {
        return {
            voyelles: this.voyelles,
            groupeK: this.groupeK,
            groupeS: this.groupeS,
            groupeT: this.groupeT,
            groupeN: this.groupeN,
            groupeH: this.groupeH,
            groupeM: this.groupeM,
            groupeY: this.groupeY,
            combinaisonsY: this.combinaisonsY,
            groupeR: this.groupeR,
            groupeW: this.groupeW,
            n: this.n,
            ponctuation: this.ponctuation
        };
    }

    /**
     * obtenir un groupe spécifique
     * @param {string} nomGroupe 
     * @returns array{}
     */
    getGroupe(nomGroupe) {
        return this[nomGroupe] || [];
    }

    /**
     * rechercher un hiragana par son symbole
     * @param {string} symbole 
     * @returns string|null
     */
    rechercherParSymbole(symbole) {
        for (const groupe in this) {
            if (Array.isArray(this[groupe])) {
                const resultat = this[groupe].find(item => item.symbole === symbole);
                if (resultat) return resultat;
            }
        }
        return null;
    }

    /**
     * rechercher un hiragana par son son
     * @param {string} son 
     * @returns string|null
     */
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

