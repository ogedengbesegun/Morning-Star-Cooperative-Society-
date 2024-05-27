// keep the download btn disabled = true
document.getElementById('downloadBtn').disabled = true


// styling my h4 with the #id of h4
document.getElementById('h4').style.borderRadius = '5px'
document.getElementById('h4').style.color = 'blue';
document.getElementById('h4').style.marginBottom = '7px'
document.getElementById('h4').style.inlineSize = 'fit-Content'
document.getElementById('h4').style.padding = '5px'
document.getElementById('h4').style.marginLeft = '19%';



let oracleNum = document.getElementById('oracleNum')
let yourName = document.getElementById('yourName')
let logId = document.getElementById('logId')

// document.getElementsByClassName('cards').style.backgroundColor = 'blue'
// let errorMsg text be called upon
let errorMsg = document.getElementById('errorMsg')


//declare h4 variable
let h4 = document.getElementById('h4')

//arrays of Names

let memName = ['ABBAS, Mr. ABDUL MUMIN',
    'ABIENEKPEN, Mrs. REGINA IGIE',
    'ABODUNRIN, Mrs. CAROLINE OLUKEMI',
    'ADAMS, Mr. TAOFEEK AKINRINMADE',
    'ADEBAYO, Miss TEMITOPE CHRISTIANAH',
    'ADEBAYO, Mrs. JUMOKE ABIMBOLA',
    'ADEBESIN, Mr. BABAJIDE ADEYEMI',
    'ADEBOWALE, Miss RONKE BEATRICE',
    'ADEBUNMI, Mr. OLUFEMI OLANREWAJU',
    'ADEDEJI, Mr. SIKIRU KEHINDE',
    'ADEFIOYE, Mrs. TITILOLA FELICIA',
    'ADEGBITE, Mr. ABDURRAHMAN AKANNI',
    'ADEJOBI, Mr. HAMMED SOLADOYE',
    'ADELESI, Miss OLUBUNMI MARY',
    'ADENIJI, Miss OLUWAPELUMI OMOTOLA',
    'ADENIJI, Mrs. BOLANLE OMODOLAPO',
    'ADENIRAN, Mr. MUGISU OLAYIWOLA',
    'ADENIRAN, Mrs. OLUWAYEMISI ADEBUNMI',
    'ADESANWO, Mr. ADEKUNLE JOSEPH',
    'ADESANYA, Mrs. AGNES OMOLABAKE',
    'ADESEGHA, Mr. ADEDAYO OLORUNFUNMILOLA',
    'ADESHINA, Miss TOYOSI ENITAN',
    'ADESINA, Mr. GBENGA MICHEAL',
    'ADESINA, Mrs. ADEBOLA ALICE',
    'ADESOYE, Mrs. CHRISTIANAH OYENIKE',
    'ADEWALE, Mrs. CHARITY AFOLUKE',
    'ADEWALE, Mrs. OLUREMI AYODELE',
    'ADEWUNMI, Mrs. MORUNMUBO JOSEPHINE',
    'ADEYELU, Mrs. OLAYINKA ESTHER',
    'ADEYEMI, Mrs. JANET OYEWOLARI',
    'ADEYEMO, Miss ADENIKE DEBORAH',
    'ADEYEMO, Mr. AZEEZ ADEYEMI',
    'ADIBE, Miss MARACHI VICTORY',
    'ADUROJA, Mrs. OLAMITIKU OLUBIYI',
    'AGBOOLA, Mrs. ESTRHER FUNMILOLA',
    'AIKULOLA, Mr. IDOWU MOSES',
    'AINA, Mr. DAVID OLUWATOYIN',
    'AJAYI, Mr. OYESEYE TAIWO',
    'AJAYI, Mr. VICTOR IFEOLUWA',
    'AJAYI, Mrs. GRACE EBUNLOMO',
    'AJEWOLE, Mrs. OMOBOLANLE OLUFUNMILAYO',
    'AJIBOYE, Miss REBECCA FOLASHADE',
    'AKANBI, Mrs. KHADIJAH AMOKE',
    'AKANDE, Mr. PHILIPS OLUWASEYI',
    'AKANNI, Miss ADEDOYIN OLUWASEUN',
    'AKANO, Mrs. DORCAS OLUFUNKE',
    'AKERELE, Mr. KEHINDE HASSAN',
    'AKERELE, Mr. MICHAEL OJO',
    'AKINDOYENI, Mr. SAMUEL OLUWASEUN',
    'AKINNOLA, Mrs. MONISOLA OMOWUNMI',
    'AKINODE, Mr. OLUDARE AYINDE',
    'AKINOLA, Mr. OLUWATOBI KAZEEM',
    'AKINREMI, Mrs. FATIMO TOYIN',
    'AKINSETE, Mrs. OLULAYO KIKELOMO',
    'AKINTOLA, Mrs. RONKE FLORENCE',
    'AKINTOYE, Mr. TEMIDAYO JOSEPH',
    'AKINYEDE, Mrs. CHRISTIANAH OMOLADE',
    'AKINYELE, Mr. OLUFEMI OLAYINKA',
    'AKOREDE, Miss TAIWO FUNMILAYO',
    'ALABI, Mr. OLANREWAJU KABIR',
    'ALABI, Mrs. JANET OLUREMI',
    'ALADETOLA, Mrs. ADEYEMI YETUNDE',
    'ALAUSA, Miss BARAKAT MORENIKEJI',
    'ALBERT, Mrs. REBECCA OMETERE',
    'ALEGE, Mrs. OLUWAFUNMILAYO OLUWATOSIN',
    'AMBALI, Mr. RASAKI OLABANJI',
    'AMUSAN, Mrs. MODUPEOLA BAMIDELE',
    'ANOLIEFO, Mrs. IFEOMA MARY',
    'APALOWO, Mr. OLUDARE PAUL',
    'AROWORADE, Mr. DANIEL AKINRINMOLA',
    'AROYEWUN, Miss ADEOLA ODUBANWO',
    'ASEBHOTA, Mrs. PHILOMINA OTA',
    'ASHADE, Mr. ADEYEMI EMMANUEL',
    'ASHADE, Mrs. YEMISI OLUWATOYIN',
    'ATINUKE, Mr. DAUDA ABOLAJI',
    'AYANDEYI, Miss RUTH MOTUNRAYO',
    'AZEEZ, Mr. RASAK OLALEKAN',
    'BABAJIDE, Mr. OLANREWAJU AFOLAYAN',
    'BABATUNDE, Mrs. FUNMILOLA TEMITOPE',
    'BABATUNDE, Mrs. OLUFUNMILAYO OLUWATOSIN',
    'BAKARE, Mr. KAZEEM OLAGOKE',
    'BALOGUN, Miss TITILAYO EUNICE',
    'BALOGUN, Mrs. CHRISTIANA OLUWAFUNMILOLA',
    'BALOGUN, Mrs. HELEN OYELADUN',
    'BAMIGBOYE, Mr. OLADELE BENJAMIN',
    'BELLO, Mr. AZEEZ FEMI',
    'BELLO, Mrs. BOLANLE ROSEMARY',
    'BELLO, Mrs. MORIYEBA IYABO',
    'BELLO, Mrs. OLADUNNI OMOTAYO',
    'BELLO, Mrs. YETUNDE FAUSAT',
    'BRANCO, Mrs. KOFOWOROLA IYABODE',
    'BUSARI, Mrs. OLUYEMISI ADEOLA',
    'DADA, Mr. OKEOWO CHRISTOPHER',
    'DEHINSILU, Mr. TEMITOPE ENIOLA',
    'DUROJAIYE, Mrs. KHADIJAT ABISOLA',
    'DUROJAYE, Mrs. OLUTOYIN FEYISAYO',
    'DUROTOLORUN, Miss GRACE MODUPE',
    'EJEH, Mrs. RACHAEL OKAH',
    'ENIABIRE, Mr. AJIBOLADE',
    'EZEKIEL, Miss MOTUNRAYO ELIZABETH',
    'FAGBAYI, Mrs. ADENLOLA EKUNDAYO',
    'FAGOROYE, Mrs. DORIS OMOLABAKE',
    'FARINDE, Miss OLUFUNKE ABIOLA',
    'FASHOLA, Mrs. YEMI OLUDAYO',
    'FATOLA, Mr. OLUDARE IGE',
    'GBADEGESIN, Mr. SAMSON ABAYOMI',
    'HAMZAT, Mr. RASAQ ADETUNJI',
    'HASSAN, Miss FOLASADE ADEBUKOLA',
    'IDOWU, Miss SARAT OLUWATOYIN',
    'IDOWU, Mr. ABIODUN MATHIAS',
    'IDOWU, Mrs. FUNMILAYO OLUWATOYIN',
    'IDOWU, Mrs. OLUWATOMI OMOLEBI',
    'IJAOLA, Mr. AKEEM OLALEKAN',
    'IKOTUN, Mr. SEGUN JOSEPH',
    'ISAAC, Miss MODUPE JOY',
    'ISIAKA, Mrs. MODUPEOLA MAUSI',
    'IYIOLA, Mr. OLUSEGUN',
    'JEGEDE, Miss BUKOLA OLUWASEUN',
    'JOSEPH, Mr. OLUWAFEMI ABIODUN',
    'KAMORUDEEN, Mr. SULAIMAN OLADIMEJI',
    'KOLADE, Miss ABIOLA TOLULOPE',
    'KOLAWOLE, Mr. TIMOTHY OLUWABUSUYI',
    'KOLAWOLE, Mrs. THERESA ABIODUN',
    'KOMOLAFE, Mrs. RACHAEL FOLASAYO',
    'KOSOKO, Mr. BOLUWATIFE MATHEW',
    'KOYEJO, Mrs. FATIMOH MODUPE',
    'KUPOLATI, Mrs. MARGARETH FOLUSO',
    'LONGE, Mr. FEMI ADEBISI',
    'MABORUKOJE, Mr. AIKUOLA OLATOKUN',
    'MICHAEL, Mrs. TAIWO DAMILOLA',
    'MOROLARI, Mrs. COMFORT OMOSETE',
    'MUDASIRU, Mr. OLAIDE KOLAWOLE',
    'MUSTAPHA, Mr. IDRIS OLASUNKANMI',
    'NANA, Mrs. UZOCHUKWU JULIA',
    'NASIRU, Mrs. OMOLARA OLAPEJU',
    'NKEMENA, Mrs. CHINENYE CHRISTIANA',
    'NWAEME, Miss FAITH OGECHI',
    'NWAFOR, Mr. JAMES CHIONOSO',
    'NWONWU, Mrs. EBUBE GLORIA',
    'ODETAYO, Mrs. OMOTAYO GRACE',
    'ODEYALE, Mr. SAMSON OLUYEMI',
    'ODEYEMI, Mrs. TOYIN YEMISI',
    'ODU, Miss ONYINYE ONYINYE',
    'OGBONNAYA, Miss CHIEMERIE VICTORIA',
    'OGEDENGBE, Mr. SEGUN',
    'OGEDENGBE, Mrs. FOLASADE IYABO',
    'OGUINE, Miss UCHE BERNICE',
    'OGUNGBE, Mrs. BOLAJI RAFAT',
    'OGUNGBENRO, Mr. JELIL ABIODUN',
    'OGUNJA, Mr. TEMITOPE BABS',
    'OGUNLEYE, Mrs. GRACE SHADE',
    'OGUNTUNDE, Mr. ISRAEL OLUSEGUN',
    'OGUNWEIDE, Miss ABIMBOLA EUNICE',
    'OJAJUNI, Mrs. REGINA ENIOLA',
    'OJEBODE, Mr. SAMUEL OLUSEGUN',
    'OJEBODE, Mrs. TOYOSI ESTHER',
    'OKEDIRAN, Mrs. KHADIJAT OYINLOLA',
    'OKEYELE, Miss JOY MEDESE',
    'OKORHI, Mrs. ELIZABETH ABIMBOLA',
    'OKUNOLA, Mr. ABIODUN EMMANUEL',
    'OKUNOLA, Mr. MORUF ADEKUNLE',
    'OKUSANYA, Mr. RILWAN ADEWALE',
    'OLADEJI, Mr. ISMAILA OYEWOLE',
    'OLADELE, Mrs. MARGARET OLUFUNMILAYO',
    'OLADIMEJI, Miss MONSURAT TAIWO',
    'OLADIMEJI, Mrs. TITILAYO OLUBUNMI',
    'OLAJOBI, Mrs. RACHEAL OLUYEMISI',
    'OLAOYE, Mr. SUNDAY ADEGBOYEGA',
    'OLATUNBOSUN, Mrs. YEMISI TINUKE',
    'OLATUNJI, Mr. ABDBASIT ABIODUN',
    'OLAWEPO, Mr. TIMOTHY ADEBISI',
    'OLAWOLE, Mrs. TAIWO BRIDGET',
    'OLAWUYI, Mrs. FATIMOH SIYANBOLA',
    'OLAYINKA, Miss BUSAYO JANET',
    'OLOGUNDUDU, Mrs. MUINAT ADEJOKE',
    'OLORUNFEMI, Mrs. ABIODUN OLUSOLA',
    'OLORUNFEMI, Mrs. RUTH OLUWAFUNKE',
    'OLOWOLAIYEMO, Miss ETANA ROSE',
    'OLOWOYEYE, Miss IYABODE COMFORT',
    'OLUBOWALE, Miss OMOBOLANLE ADEOLA',
    'OLUGOLA, Mrs. DEBORAH TOLA',
    'OLUKOYA, Miss MARY ABOSEDE',
    'OLUSESI, Miss OLABODE IBIRONKE',
    'OLUWOLE, Mrs. ADERONKE ESTHER',
    'OMIMAKINDE, Mr. OLUWATOBI ISAAC',
    'OMOLORUN, Mrs. OLABIMPE OLUFUNMILAYO',
    'OMOTARA, Mrs. HENRIETTA OLUWAFOLAKEMI',
    'OMOTUYI, Mr. STEPHEN OJO',
    'ONALAJA, Mr. TAIWO OMOTOLA',
    'ONIBOKUN, Mrs. ESTHER ABOSEDE',
    'ONITIMIRIN, Mrs. MAYOWA ABIODUN',
    'ONIYELU, Mr. EZEKIEL OLALEYE',
    'OROLADE, Mr. SARAFADEEN DOTUN',
    'OSO, Mr. GBOLAHAN EKUNDAYO',
    'OSO, Mr. MUMIN OLANREWAJU',
    'OSOKOYA, Miss TITILOPE CHRISTIANAH',
    'OWOLABI, Miss SEUN FUNMILAYO',
    'OWOO, Mrs. MUJIDAT BOLANLE',
    'OYEDEPO, Miss BUKOLA ROSELINE',
    'OYEWALE, Mr. BENJAMIN',
    'OYINLOYE, Mrs. FUNMILAYO ABIOLA',
    'PANU, Mrs. MARY MAUTIN',
    'PHILIPS, Mr. OLATUNJI ADENIYI',
    'QUADIR, Mr. BOLA TAOFIQ',
    'QUADRI, Mr. IBRAHIM ABIODUN',
    'QUADRI, Mrs. OYINDAMOLA OLABISI',
    'RAHMON, Mr. MUHAMMED OLAITAN',
    'RAJI, Mr. TAJUDEEN ALABA',
    'RAJI, Mrs. PHEBIAN TITILAYO',
    'RUFAI, Miss AYISAT OLAYEMI',
    'SALAM, Mrs. MONSURAT ANIKE',
    'SALAMI, Mr. SURAJUDEEN OYEBOLA',
    'SALIMAN, Mr. KEHINDE HASSAN',
    'SALIMAN, Mrs. FUNKE RASIDAT',
    'SANNI, Miss KEHINDE OMOTOYOSI',
    'SARUMI, Miss ABIOLA ASIAT',
    'SHOBO, Mr. OLUFEMI AYOOLA',
    'SIMEON, Ms. MARIAN OLUSOLA',
    'SODEINDE, Mr. BRAIMOH TEMITOPE',
    'SONIBARE, Miss FUNMILOLA OLADOJA',
    'SOWEMIMO, Mrs. BOSEDE OLUBISI',
    'TELLA, Mrs. BILIKISU ADEBUNMI',
    'THOMAS, Mr. OLUWASEUN ADEBAYO',
    'UWAEZIOZI, Miss JOY NGOZI',
    'UZOKWE, Mrs. EDITH OBINAUJU',
    'WHENU, Mr. DOTUN VICTOR',
    'YEMITAN, Mr. DAMILARE ADEDEJI',
    'YOMI-BADA, Mr. KEHINDE AYOOLA',
]

//arrays of oracle numbers
let oracNum = [13999, 15898, 20593, 179996, 165950, 191132, 165888, 191136, 13945, 16411, 167331, 216574, 38185, 41499, 223486,
    41070, 46736, 36759, 191690, 16586, 216596, 190675, 191084, 175516, 69679, 32086, 38616, 160277, 16641, 173651, 221968,
    37915, 219575, 14945, 16694, 46683, 190834, 32112, 216572, 16577, 39259, 190387, 216622, 190885, 153559, 192201, 160598,
    10108, 193466, 41109, 38414, 173730, 16420, 14647, 174837, 200999, 14547, 187367, 157832, 217623, 9396, 18524, 223506, 190673,
    13715, 41781, 179645, 16508, 218280, 223311, 165747, 17377, 196901, 190754, 216566, 180462, 17168, 191146, 182515, 15079, 190893,
    216564, 153656, 174353, 223306, 192251, 17414, 36764, 190667, 15739, 17775, 180297, 43341, 214722, 18185, 32355, 192216, 191721,
    192236, 218127, 173423, 42716, 173581, 41636, 223096, 187350, 159595, 37331, 201224, 190812, 153580, 18522, 15667, 37818, 192244,
    16828, 192239, 201360, 201458, 191358, 41510, 13973, 19940, 17370, 218460, 37192, 41125, 37771, 74581, 219562, 166952, 223182, 219546,
    191687, 17127, 222106, 182795, 191056, 190796, 17607, 37323, 160528, 18028, 187325, 180095, 222108, 16523, 153374, 218269, 219796,
    16526, 17137, 192265, 5552, 13804, 37874, 173836, 190799, 165996, 182315, 36686, 193455, 18292, 6180, 166969, 153361, 16131, 15377,
    174168, 190845, 38579, 191681, 17857, 218121, 37425, 182549, 173741, 191029, 162315, 223176, 180443, 219050, 201385, 174748, 219570,
    15343, 37555, 18285, 205242, 157756, 190650, 187199, 37351, 32985, 190559, 201605, 218534, 16511, 165694, 190574, 16349, 161127, 43413,
    201323, 201142, 187327, 223053, 37854, 37816, 202430, 191710, 18074, 17895, 13617, 192245, 173411, 165935, 153605, 173719, 155893, 216620, 16412, 218353, 160484, 36836, 218298, 222298, 216189]


let loginId = [101011
    , 102012, 103013, 104014, 105015, 106016, 107017, 108018, 109019,
    110020, 111021, 112022, 113023, 114024, 115025, 116026, 117027,
    118028, 119029, 120030, 121031, 122032, 123033, 124034, 125035,
    126036, 127037, 128038, 129039, 130040, 131041, 132042, 133043,
    134044, 135045, 136046, 137047, 138048, 139049, 140050, 141051,
    142052, 143053, 144054, 145055, 146056, 147057, 148058, 149059,
    150060, 151061, 152062, 153063, 154064, 155065, 156066, 157067,
    158068, 159069, 160070, 161071, 162072, 163073, 164074, 165075,
    166076, 167077, 168078, 169079, 170080, 171081, 172082, 173083,
    174084, 175085, 176086, 177087, 178088, 179089, 180090, 181091,
    182092, 183093, 184094, 185095, 186096, 187097, 188098, 189099,
    190100, 191101, 192102, 193103, 194104, 195105, 196106, 197107,
    198108, 199109, 200110, 201111, 202112, 203113, 204114, 205115,
    206116, 207117, 208118, 209119, 210120, 211121, 212122, 213123,
    214124, 215125, 216126, 217127, 218128, 219129, 220130, 221131,
    222132, 223133, 224134, 225135, 226136, 227137, 228138, 229139,
    230140, 231141, 232142, 233143, 234144, 235145, 236146, 237147,
    238148, 239149, 240150, 241151, 242152, 243153, 244154, 245155,
    246156, 247157, 248158, 249159, 250160, 251161, 252162, 253163,
    254164, 255165, 256166, 257167, 258168, 259169, 260170, 261171,
    262172, 263173, 264174, 265175, 266176, 267177, 268178, 269179,
    270180, 271181, 272182, 273183, 274184, 275185, 276186, 277187,
    278188, 279189, 280190, 281191, 282192, 283193, 284194, 285195,
    286196, 287197, 288198, 289199, 290200, 291201, 292202, 293203,
    294204, 295205, 296206, 297207, 298208, 299209, 300210, 301211,
    302212, 303213, 304214, 305215, 306216, 307217, 308218, 309219,
    310220, 311221, 312222, 313223, 314224, 315225, 316226, 317227,
    318228, 319229, 320230, 321231, 322232, 323233, 324234, 325235,
    326236, 327237, 328238
]
//declaring the variables for href from html files

let a0 = document.getElementById('13999')
let a1 = document.getElementById('15898')
let a2 = document.getElementById('20593')
let a3 = document.getElementById('179996')
let a4 = document.getElementById('165950')
let a5 = document.getElementById('191132')
let a6 = document.getElementById('165888')
let a7 = document.getElementById('191136')
let a8 = document.getElementById('13945')
let a9 = document.getElementById('16411')
let a10 = document.getElementById('167331')
let a11 = document.getElementById('216574')
let a12 = document.getElementById('38185')
let a13 = document.getElementById('41499')
let a14 = document.getElementById('223486')
let a15 = document.getElementById('41070')
let a16 = document.getElementById('46736')
let a17 = document.getElementById('36759')
let a18 = document.getElementById('191690')
let a19 = document.getElementById('16586')
let a20 = document.getElementById('216596')
let a21 = document.getElementById('190675')
let a22 = document.getElementById('191084')
let a23 = document.getElementById('175516')
let a24 = document.getElementById('69679')
let a25 = document.getElementById('32086')
let a26 = document.getElementById('38616')
let a27 = document.getElementById('160277')
let a28 = document.getElementById('16641')
let a29 = document.getElementById('173651')
let a30 = document.getElementById('221968')
let a31 = document.getElementById('37915')
let a32 = document.getElementById('219575')
let a33 = document.getElementById('14945')
let a34 = document.getElementById('16694')
let a35 = document.getElementById('46683')
let a36 = document.getElementById('190834')
let a37 = document.getElementById('32112')
let a38 = document.getElementById('216572')
let a39 = document.getElementById('16577')
let a40 = document.getElementById('39259')
let a41 = document.getElementById('190387')
let a42 = document.getElementById('216622')
let a43 = document.getElementById('190885')
let a44 = document.getElementById('153559')
let a45 = document.getElementById('192201')
let a46 = document.getElementById('160598')
let a47 = document.getElementById('10108')
let a48 = document.getElementById('193466')
let a49 = document.getElementById('41109')
let a50 = document.getElementById('38414')
let a51 = document.getElementById('173730')
let a52 = document.getElementById('16420')
let a53 = document.getElementById('14647')
let a54 = document.getElementById('174837')
let a55 = document.getElementById('200999')
let a56 = document.getElementById('14547')
let a57 = document.getElementById('187367')
let a58 = document.getElementById('157832')
let a59 = document.getElementById('217623')
let a60 = document.getElementById('9396')
let a61 = document.getElementById('18524')
let a62 = document.getElementById('223506')
let a63 = document.getElementById('190673')
let a64 = document.getElementById('13715')
let a65 = document.getElementById('41781')
let a66 = document.getElementById('179645')
let a67 = document.getElementById('16508')
let a68 = document.getElementById('218280')
let a69 = document.getElementById('223311')
let a70 = document.getElementById('165747')
let a71 = document.getElementById('17377')
let a72 = document.getElementById('196901')
let a73 = document.getElementById('190754')
let a74 = document.getElementById('216566')
let a75 = document.getElementById('180462')
let a76 = document.getElementById('17168')
let a77 = document.getElementById('191146')
let a78 = document.getElementById('182515')
let a79 = document.getElementById('15079')
let a80 = document.getElementById('190893')
let a81 = document.getElementById('216564')
let a82 = document.getElementById('153656')
let a83 = document.getElementById('174353')
let a84 = document.getElementById('223306')
let a85 = document.getElementById('192251')
let a86 = document.getElementById('17414')
let a87 = document.getElementById('36764')
let a88 = document.getElementById('190667')
let a89 = document.getElementById('15739')
let a90 = document.getElementById('17775')
let a91 = document.getElementById('180297')
let a92 = document.getElementById('43341')
let a93 = document.getElementById('214722')
let a94 = document.getElementById('18185')
let a95 = document.getElementById('32355')
let a96 = document.getElementById('192216')
let a97 = document.getElementById('191721')
let a98 = document.getElementById('192236')
let a99 = document.getElementById('218127')
let a100 = document.getElementById('173423')
let a101 = document.getElementById('42716')
let a102 = document.getElementById('173581')
let a103 = document.getElementById('41636')
let a104 = document.getElementById('223096')
let a105 = document.getElementById('187350')
let a106 = document.getElementById('159595')
let a107 = document.getElementById('37331')
let a108 = document.getElementById('201224')
let a109 = document.getElementById('190812')
let a110 = document.getElementById('153580')
let a111 = document.getElementById('18522')
let a112 = document.getElementById('15667')
let a113 = document.getElementById('37818')
let a114 = document.getElementById('192244')
let a115 = document.getElementById('16828')
let a116 = document.getElementById('192239')
let a117 = document.getElementById('201360')
let a118 = document.getElementById('201458')
let a119 = document.getElementById('191358')
let a120 = document.getElementById('41510')
let a121 = document.getElementById('13973')
let a122 = document.getElementById('19940')
let a123 = document.getElementById('17370')
let a124 = document.getElementById('218460')
let a125 = document.getElementById('37192')
let a126 = document.getElementById('41125')
let a127 = document.getElementById('37771')
let a128 = document.getElementById('74581')
let a129 = document.getElementById('219562')
let a130 = document.getElementById('166952')
let a131 = document.getElementById('223182')
let a132 = document.getElementById('219546')
let a133 = document.getElementById('191687')
let a134 = document.getElementById('17127')
let a135 = document.getElementById('222106')
let a136 = document.getElementById('182795')
let a137 = document.getElementById('191056')
let a138 = document.getElementById('190796')
let a139 = document.getElementById('17607')
let a140 = document.getElementById('37323')
let a141 = document.getElementById('160528')
let a142 = document.getElementById('18028')
let a143 = document.getElementById('187325')
let a144 = document.getElementById('180095')
let a145 = document.getElementById('222108')
let a146 = document.getElementById('16523')
let a147 = document.getElementById('153374')
let a148 = document.getElementById('218269')
let a149 = document.getElementById('219796')
let a150 = document.getElementById('16526')
let a151 = document.getElementById('17137')
let a152 = document.getElementById('192265')
let a153 = document.getElementById('5552')
let a154 = document.getElementById('13804')
let a155 = document.getElementById('37874')
let a156 = document.getElementById('173836')
let a157 = document.getElementById('190799')
let a158 = document.getElementById('165996')
let a159 = document.getElementById('182315')
let a160 = document.getElementById('36686')
let a161 = document.getElementById('193455')
let a162 = document.getElementById('18292')
let a163 = document.getElementById('6180')
let a164 = document.getElementById('166969')
let a165 = document.getElementById('153361')
let a166 = document.getElementById('16131')
let a167 = document.getElementById('15377')
let a168 = document.getElementById('174168')
let a169 = document.getElementById('190845')
let a170 = document.getElementById('38579')
let a171 = document.getElementById('191681')
let a172 = document.getElementById('17857')
let a173 = document.getElementById('218121')
let a174 = document.getElementById('37425')
let a175 = document.getElementById('182549')
let a176 = document.getElementById('173741')
let a177 = document.getElementById('191029')
let a178 = document.getElementById('162315')
let a179 = document.getElementById('223176')
let a180 = document.getElementById('180443')
let a181 = document.getElementById('219050')
let a182 = document.getElementById('201385')
let a183 = document.getElementById('174748')
let a184 = document.getElementById('219570')
let a185 = document.getElementById('15343')
let a186 = document.getElementById('37555')
let a187 = document.getElementById('18285')
let a188 = document.getElementById('205242')
let a189 = document.getElementById('157756')
let a190 = document.getElementById('190650')
let a191 = document.getElementById('187199')
let a192 = document.getElementById('37351')
let a193 = document.getElementById('32985')
let a194 = document.getElementById('190559')
let a195 = document.getElementById('201605')
let a196 = document.getElementById('218534')
let a197 = document.getElementById('16511')
let a198 = document.getElementById('165694')
let a199 = document.getElementById('190574')
let a200 = document.getElementById('16349')
let a201 = document.getElementById('161127')
let a202 = document.getElementById('43413')
let a203 = document.getElementById('201323')
let a204 = document.getElementById('201142')
let a205 = document.getElementById('187327')
let a206 = document.getElementById('223053')
let a207 = document.getElementById('37854')
let a208 = document.getElementById('37816')
let a209 = document.getElementById('202430')
let a210 = document.getElementById('191710')
let a211 = document.getElementById('18074')
let a212 = document.getElementById('17895')
let a213 = document.getElementById('13617')
let a214 = document.getElementById('192245')
let a215 = document.getElementById('173411')
let a216 = document.getElementById('165935')
let a217 = document.getElementById('153605')
let a218 = document.getElementById('173719')
let a219 = document.getElementById('155893')
let a220 = document.getElementById('216620')
let a221 = document.getElementById('16412')
let a222 = document.getElementById('218353')
let a223 = document.getElementById('160484')
let a224 = document.getElementById('36836')
let a225 = document.getElementById('218298')
let a226 = document.getElementById('222298')
let a227 = document.getElementById('216189')


//addEventhandler to OracleNumber Click

let oNum = document.getElementById('oracleNum')
oNum.addEventListener('click', function () {
    let empty = ''

    oracleNum.value = empty
    yourName.value = empty
    logId.value = empty
    h4.innerText = empty
    errorMsg.innerText = empty

    errorMsg.style.backgroundColor = ''
    h4.style.backgroundColor = ''

    // deactivate the download Btn  to ensure login 
    //Btn is clicked before download
    document.getElementById('downloadBtn').disabled = true


    //    console.log('help me oh lord')

});




// oracleNum.value = oracNum
// logId.value = loginId
//firing up my login button to run some commands
let loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', function () {

    // document.getElementById('javaAlert').click('loginBtn')



         let x = oracleNum.value 
    for (let sc = 0; sc < 228; sc++) {
        if (oracNum[sc] == x && logId.value == loginId[sc])
         {
            yourName.value = memName[sc];
            h4.style.backgroundColor = 'white'; h4.innerText
                = 'Welcome Valued Member';

            // once the conditions are met, downloadBtn is activated
            ; document.getElementById('downloadBtn').disabled = false

            errorMsg.innerHTML = ''
            errorMsg.style.backgroundColor = ''; }


        }
        
            
           
                if (oracNum[0] != oracleNum.value) if (oracNum[1] != oracleNum.value) if (oracNum[2] != oracleNum.value) if (oracNum[3] != oracleNum.value)
            if (oracNum[4] != oracleNum.value) if (oracNum[5] != oracleNum.value) if (oracNum[6] != oracleNum.value) if (oracNum[7] != oracleNum.value)
                if (oracNum[8] != oracleNum.value) if (oracNum[9] != oracleNum.value) if (oracNum[10] != oracleNum.value) if (oracNum[11] != oracleNum.value)
            if (oracNum[12] != oracleNum.value) if (oracNum[13] != oracleNum.value) if (oracNum[14] != oracleNum.value) if (oracNum[15] != oracleNum.value)
                if (oracNum[16] != oracleNum.value) if (oracNum[17] != oracleNum.value) if (oracNum[18] != oracleNum.value) if (oracNum[19] != oracleNum.value)
            if (oracNum[20] != oracleNum.value) if (oracNum[21] != oracleNum.value) if (oracNum[22] != oracleNum.value) if (oracNum[23] != oracleNum.value)
                if (oracNum[24] != oracleNum.value) if (oracNum[25] != oracleNum.value) if (oracNum[26] != oracleNum.value) if (oracNum[27] != oracleNum.value)
            if (oracNum[28] != oracleNum.value) if (oracNum[29] != oracleNum.value) if (oracNum[30] != oracleNum.value) if (oracNum[31] != oracleNum.value)
                if (oracNum[32] != oracleNum.value) if (oracNum[33] != oracleNum.value) if (oracNum[34] != oracleNum.value) if (oracNum[35] != oracleNum.value)
            if (oracNum[36] != oracleNum.value) if (oracNum[37] != oracleNum.value) if (oracNum[38] != oracleNum.value) if (oracNum[39] != oracleNum.value)
                if (oracNum[40] != oracleNum.value) if (oracNum[41] != oracleNum.value) if (oracNum[42] != oracleNum.value) if (oracNum[43] != oracleNum.value)
            if (oracNum[44] != oracleNum.value) if (oracNum[45] != oracleNum.value) if (oracNum[46] != oracleNum.value) if (oracNum[47] != oracleNum.value)
                if (oracNum[48] != oracleNum.value) if (oracNum[49] != oracleNum.value) if (oracNum[50] != oracleNum.value) if (oracNum[51] != oracleNum.value)
            if (oracNum[52] != oracleNum.value) if (oracNum[53] != oracleNum.value) if (oracNum[54] != oracleNum.value) if (oracNum[55] != oracleNum.value)
                if (oracNum[56] != oracleNum.value) if (oracNum[57] != oracleNum.value) if (oracNum[58] != oracleNum.value) if (oracNum[59] != oracleNum.value)
            if (oracNum[60] != oracleNum.value) if (oracNum[61] != oracleNum.value) if (oracNum[62] != oracleNum.value) if (oracNum[63] != oracleNum.value)
                if (oracNum[64] != oracleNum.value) if (oracNum[65] != oracleNum.value) if (oracNum[66] != oracleNum.value) if (oracNum[67] != oracleNum.value)
            if (oracNum[68] != oracleNum.value) if (oracNum[69] != oracleNum.value) if (oracNum[70] != oracleNum.value) if (oracNum[71] != oracleNum.value)
                if (oracNum[72] != oracleNum.value) if (oracNum[73] != oracleNum.value) if (oracNum[74] != oracleNum.value) if (oracNum[75] != oracleNum.value)
            if (oracNum[76] != oracleNum.value) if (oracNum[77] != oracleNum.value) if (oracNum[78] != oracleNum.value) if (oracNum[79] != oracleNum.value)
                if (oracNum[80] != oracleNum.value) if (oracNum[81] != oracleNum.value) if (oracNum[82] != oracleNum.value) if (oracNum[83] != oracleNum.value)
            if (oracNum[84] != oracleNum.value) if (oracNum[85] != oracleNum.value) if (oracNum[86] != oracleNum.value) if (oracNum[87] != oracleNum.value)
                if (oracNum[88] != oracleNum.value) if (oracNum[89] != oracleNum.value) if (oracNum[90] != oracleNum.value) if (oracNum[91] != oracleNum.value)
            if (oracNum[92] != oracleNum.value) if (oracNum[93] != oracleNum.value) if (oracNum[94] != oracleNum.value) if (oracNum[95] != oracleNum.value)
                if (oracNum[96] != oracleNum.value) if (oracNum[97] != oracleNum.value) if (oracNum[98] != oracleNum.value) if (oracNum[99] != oracleNum.value)
            if (oracNum[100] != oracleNum.value) if (oracNum[101] != oracleNum.value) if (oracNum[102] != oracleNum.value) if (oracNum[103] != oracleNum.value)
                if (oracNum[104] != oracleNum.value) if (oracNum[105] != oracleNum.value) if (oracNum[106] != oracleNum.value) if (oracNum[107] != oracleNum.value)
            if (oracNum[108] != oracleNum.value) if (oracNum[109] != oracleNum.value) if (oracNum[110] != oracleNum.value) if (oracNum[111] != oracleNum.value)
                if (oracNum[112] != oracleNum.value) if (oracNum[113] != oracleNum.value) if (oracNum[114] != oracleNum.value) if (oracNum[115] != oracleNum.value)
            if (oracNum[116] != oracleNum.value) if (oracNum[117] != oracleNum.value) if (oracNum[118] != oracleNum.value) if (oracNum[119] != oracleNum.value)
                if (oracNum[120] != oracleNum.value) if (oracNum[121] != oracleNum.value) if (oracNum[122] != oracleNum.value) if (oracNum[123] != oracleNum.value)
            if (oracNum[124] != oracleNum.value) if (oracNum[125] != oracleNum.value) if (oracNum[126] != oracleNum.value) if (oracNum[127] != oracleNum.value)
                if (oracNum[128] != oracleNum.value) if (oracNum[129] != oracleNum.value) if (oracNum[130] != oracleNum.value) if (oracNum[131] != oracleNum.value)
            if (oracNum[132] != oracleNum.value) if (oracNum[133] != oracleNum.value) if (oracNum[134] != oracleNum.value) if (oracNum[135] != oracleNum.value)
                if (oracNum[136] != oracleNum.value) if (oracNum[137] != oracleNum.value) if (oracNum[138] != oracleNum.value) if (oracNum[139] != oracleNum.value)
            if (oracNum[140] != oracleNum.value) if (oracNum[141] != oracleNum.value) if (oracNum[142] != oracleNum.value) if (oracNum[143] != oracleNum.value)
                if (oracNum[144] != oracleNum.value) if (oracNum[145] != oracleNum.value) if (oracNum[146] != oracleNum.value) if (oracNum[147] != oracleNum.value)
            if (oracNum[148] != oracleNum.value) if (oracNum[149] != oracleNum.value) if (oracNum[150] != oracleNum.value) if (oracNum[151] != oracleNum.value)
                if (oracNum[152] != oracleNum.value) if (oracNum[153] != oracleNum.value) if (oracNum[154] != oracleNum.value) if (oracNum[155] != oracleNum.value)
            if (oracNum[156] != oracleNum.value) if (oracNum[157] != oracleNum.value) if (oracNum[158] != oracleNum.value) if (oracNum[159] != oracleNum.value)
                if (oracNum[160] != oracleNum.value) if (oracNum[161] != oracleNum.value) if (oracNum[162] != oracleNum.value) if (oracNum[163] != oracleNum.value)
            if (oracNum[164] != oracleNum.value) if (oracNum[165] != oracleNum.value) if (oracNum[166] != oracleNum.value) if (oracNum[167] != oracleNum.value)
                if (oracNum[168] != oracleNum.value) if (oracNum[169] != oracleNum.value) if (oracNum[170] != oracleNum.value) if (oracNum[171] != oracleNum.value)
            if (oracNum[172] != oracleNum.value) if (oracNum[173] != oracleNum.value) if (oracNum[174] != oracleNum.value) if (oracNum[175] != oracleNum.value)
                if (oracNum[176] != oracleNum.value) if (oracNum[177] != oracleNum.value) if (oracNum[178] != oracleNum.value) if (oracNum[179] != oracleNum.value)
            if (oracNum[180] != oracleNum.value) if (oracNum[181] != oracleNum.value) if (oracNum[182] != oracleNum.value) if (oracNum[183] != oracleNum.value)
                if (oracNum[184] != oracleNum.value) if (oracNum[185] != oracleNum.value) if (oracNum[186] != oracleNum.value) if (oracNum[187] != oracleNum.value)
            if (oracNum[188] != oracleNum.value) if (oracNum[189] != oracleNum.value) if (oracNum[190] != oracleNum.value) if (oracNum[191] != oracleNum.value)
                if (oracNum[192] != oracleNum.value) if (oracNum[193] != oracleNum.value) if (oracNum[194] != oracleNum.value) if (oracNum[195] != oracleNum.value)
            if (oracNum[196] != oracleNum.value) if (oracNum[197] != oracleNum.value) if (oracNum[198] != oracleNum.value) if (oracNum[199] != oracleNum.value)
                if (oracNum[200] != oracleNum.value) if (oracNum[201] != oracleNum.value) if (oracNum[202] != oracleNum.value) if (oracNum[203] != oracleNum.value)
            if (oracNum[204] != oracleNum.value) if (oracNum[205] != oracleNum.value) if (oracNum[206] != oracleNum.value) if (oracNum[207] != oracleNum.value)
                if (oracNum[208] != oracleNum.value) if (oracNum[209] != oracleNum.value) if (oracNum[210] != oracleNum.value) if (oracNum[211] != oracleNum.value)
            if (oracNum[212] != oracleNum.value) if (oracNum[213] != oracleNum.value) if (oracNum[214] != oracleNum.value) if (oracNum[215] != oracleNum.value)
                if (oracNum[216] != oracleNum.value) if (oracNum[217] != oracleNum.value) if (oracNum[218] != oracleNum.value) if (oracNum[219] != oracleNum.value)
            if (oracNum[220] != oracleNum.value) if (oracNum[221] != oracleNum.value) if (oracNum[222] != oracleNum.value) if (oracNum[223] != oracleNum.value)
                if (oracNum[224] != oracleNum.value) if (oracNum[225] != oracleNum.value) if (oracNum[226] != oracleNum.value) if (oracNum[227] != oracleNum.value)
                {
                
                    // if ( !oracNum[nt] == !oracleNum.value) {
                // && logId.value === !loginId[nt])
                    // console.log(loginId[nt])
                    // console.log(!oracNum[nt] === oracleNum.value || logId.value === !loginId[nt])

        
                //     // effect changes to the h4 in the html
                h4.innerText = 'Non-Members are NOT allowed'
                h4.style.backgroundColor = 'white'
        
                // changes to the errorMsg in html
        
                errorMsg.style.backgroundColor = 'white'
                errorMsg.innerText = 'Invalid Oracle Number / Login ID';}
                
 
                });




//decare option value = jan


// monthly = 

//fire up the download Button
let downloadBtn = document.getElementById('downloadBtn')
downloadBtn.addEventListener('click', function () {

    //  var linkHref = a0.href;

    //  var hiddenLink = document.createElement('a');
    //  var hiddenLink = document.getElementById('13999');
    //  hiddenLink.download = '/Monthly/13999.pdf';
    //  hiddenLink.href = linkHref;
    //  document.body.appendChild(hiddenLink);
    //  hiddenLink.click();



    if (oracleNum.value == oracNum[0]) { a0.download = '13999.pdf'; a0.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[1]) { a1.download = '15898.pdf'; a1.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[2]) { a2.download = '20593.pdf'; a2.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[3]) { a3.download = '179996.pdf'; a3.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[4]) { a4.download = '165950.pdf'; a4.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[5]) { a5.download = '191132.pdf'; a5.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[6]) { a6.download = '165888.pdf'; a6.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[7]) { a7.download = '191136.pdf'; a7.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[8]) { a8.download = '13945.pdf'; a8.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[9]) { a9.download = '16411.pdf'; a9.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[10]) { a10.download = '167331.pdf'; a10.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[11]) { a11.download = '216574.pdf'; a11.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[12]) { a12.download = '38185.pdf'; a12.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[13]) { a13.download = '41499.pdf'; a13.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[14]) { a14.download = '223486.pdf'; a14.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[15]) { a15.download = '41070.pdf'; a15.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[16]) { a16.download = '46736.pdf'; a16.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[17]) { a17.download = '36759.pdf'; a17.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[18]) { a18.download = '191690.pdf'; a18.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[19]) { a19.download = '16586.pdf'; a19.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[20]) { a20.download = '216596.pdf'; a20.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[21]) { a21.download = '190675.pdf'; a21.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[22]) { a22.download = '191084.pdf'; a22.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[23]) { a23.download = '175516.pdf'; a23.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[24]) { a24.download = '69679.pdf'; a24.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[25]) { a25.download = '32086.pdf'; a25.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[26]) { a26.download = '38616.pdf'; a26.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[27]) { a27.download = '160277.pdf'; a27.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[28]) { a28.download = '16641.pdf'; a28.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[29]) { a29.download = '173651.pdf'; a29.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[30]) { a30.download = '221968.pdf'; a30.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[31]) { a31.download = '37915.pdf'; a31.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[32]) { a32.download = '219575.pdf'; a32.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[33]) { a33.download = '14945.pdf'; a33.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[34]) { a34.download = '16694.pdf'; a34.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[35]) { a35.download = '46683.pdf'; a35.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[36]) { a36.download = '190834.pdf'; a36.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[37]) { a37.download = '32112.pdf'; a37.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[38]) { a38.download = '216572.pdf'; a38.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[39]) { a39.download = '16577.pdf'; a39.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[40]) { a40.download = '39259.pdf'; a40.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[41]) { a41.download = '190387.pdf'; a41.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[42]) { a42.download = '216622.pdf'; a42.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[43]) { a43.download = '190885.pdf'; a43.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[44]) { a44.download = '153559.pdf'; a44.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[45]) { a45.download = '192201.pdf'; a45.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[46]) { a46.download = '160598.pdf'; a46.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[47]) { a47.download = '10108.pdf'; a47.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[48]) { a48.download = '193466.pdf'; a48.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[49]) { a49.download = '41109.pdf'; a49.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[50]) { a50.download = '38414.pdf'; a50.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[51]) { a51.download = '173730.pdf'; a51.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[52]) { a52.download = '16420.pdf'; a52.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[53]) { a53.download = '14647.pdf'; a53.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[54]) { a54.download = '174837.pdf'; a54.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[55]) { a55.download = '200999.pdf'; a55.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[56]) { a56.download = '14547.pdf'; a56.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[57]) { a57.download = '187367.pdf'; a57.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[58]) { a58.download = '157832.pdf'; a58.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[59]) { a59.download = '217623.pdf'; a59.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[60]) { a60.download = '9396.pdf'; a60.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[61]) { a61.download = '18524.pdf'; a61.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[62]) { a62.download = '223506.pdf'; a62.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[63]) { a63.download = '190673.pdf'; a63.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[64]) { a64.download = '13715.pdf'; a64.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[65]) { a65.download = '41781.pdf'; a65.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[66]) { a66.download = '179645.pdf'; a66.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[67]) { a67.download = '16508.pdf'; a67.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[68]) { a68.download = '218280.pdf'; a68.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[69]) { a69.download = '223311.pdf'; a69.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[70]) { a70.download = '165747.pdf'; a70.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[71]) { a71.download = '17377.pdf'; a71.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[72]) { a72.download = '196901.pdf'; a72.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[73]) { a73.download = '190754.pdf'; a73.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[74]) { a74.download = '216566.pdf'; a74.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[75]) { a75.download = '180462.pdf'; a75.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[76]) { a76.download = '17168.pdf'; a76.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[77]) { a77.download = '191146.pdf'; a77.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[78]) { a78.download = '182515.pdf'; a78.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[79]) { a79.download = '15079.pdf'; a79.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[80]) { a80.download = '190893.pdf'; a80.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[81]) { a81.download = '216564.pdf'; a81.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[82]) { a82.download = '153656.pdf'; a82.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[83]) { a83.download = '174353.pdf'; a83.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[84]) { a84.download = '223306.pdf'; a84.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[85]) { a85.download = '192251.pdf'; a85.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[86]) { a86.download = '17414.pdf'; a86.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[87]) { a87.download = '36764.pdf'; a87.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[88]) { a88.download = '190667.pdf'; a88.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[89]) { a89.download = '15739.pdf'; a89.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[90]) { a90.download = '17775.pdf'; a90.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[91]) { a91.download = '180297.pdf'; a91.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[92]) { a92.download = '43341.pdf'; a92.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[93]) { a93.download = '214722.pdf'; a93.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[94]) { a94.download = '18185.pdf'; a94.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[95]) { a95.download = '32355.pdf'; a95.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[96]) { a96.download = '192216.pdf'; a96.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[97]) { a97.download = '191721.pdf'; a97.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[98]) { a98.download = '192236.pdf'; a98.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[99]) { a99.download = '218127.pdf'; a99.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[100]) { a100.download = '173423.pdf'; a100.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[101]) { a101.download = '42716.pdf'; a101.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[102]) { a102.download = '173581.pdf'; a102.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[103]) { a103.download = '41636.pdf'; a103.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[104]) { a104.download = '223096.pdf'; a104.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[105]) { a105.download = '187350.pdf'; a105.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[106]) { a106.download = '159595.pdf'; a106.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[107]) { a107.download = '37331.pdf'; a107.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[108]) { a108.download = '201224.pdf'; a108.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[109]) { a109.download = '190812.pdf'; a109.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[110]) { a110.download = '153580.pdf'; a110.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[111]) { a111.download = '18522.pdf'; a111.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[112]) { a112.download = '15667.pdf'; a112.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[113]) { a113.download = '37818.pdf'; a113.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[114]) { a114.download = '192244.pdf'; a114.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[115]) { a115.download = '16828.pdf'; a115.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[116]) { a116.download = '192239.pdf'; a116.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[117]) { a117.download = '201360.pdf'; a117.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[118]) { a118.download = '201458.pdf'; a118.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[119]) { a119.download = '191358.pdf'; a119.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[120]) { a120.download = '41510.pdf'; a120.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[121]) { a121.download = '13973.pdf'; a121.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[122]) { a122.download = '19940.pdf'; a122.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[123]) { a123.download = '17370.pdf'; a123.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[124]) { a124.download = '218460.pdf'; a124.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[125]) { a125.download = '37192.pdf'; a125.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[126]) { a126.download = '41125.pdf'; a126.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[127]) { a127.download = '37771.pdf'; a127.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[128]) { a128.download = '74581.pdf'; a128.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[129]) { a129.download = '219562.pdf'; a129.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[130]) { a130.download = '166952.pdf'; a130.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[131]) { a131.download = '223182.pdf'; a131.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[132]) { a132.download = '219546.pdf'; a132.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[133]) { a133.download = '191687.pdf'; a133.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[134]) { a134.download = '17127.pdf'; a134.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[135]) { a135.download = '222106.pdf'; a135.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[136]) { a136.download = '182795.pdf'; a136.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[137]) { a137.download = '191056.pdf'; a137.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[138]) { a138.download = '190796.pdf'; a138.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[139]) { a139.download = '17607.pdf'; a139.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[140]) { a140.download = '37323.pdf'; a140.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[141]) { a141.download = '160528.pdf'; a141.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[142]) { a142.download = '18028.pdf'; a142.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[143]) { a143.download = '187325.pdf'; a143.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[144]) { a144.download = '180095.pdf'; a144.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[145]) { a145.download = '222108.pdf'; a145.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[146]) { a146.download = '16523.pdf'; a146.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[147]) { a147.download = '153374.pdf'; a147.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[148]) { a148.download = '218269.pdf'; a148.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[149]) { a149.download = '219796.pdf'; a149.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[150]) { a150.download = '16526.pdf'; a150.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[151]) { a151.download = '17137.pdf'; a151.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[152]) { a152.download = '192265.pdf'; a152.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[153]) { a153.download = '5552.pdf'; a153.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[154]) { a154.download = '13804.pdf'; a154.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[155]) { a155.download = '37874.pdf'; a155.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[156]) { a156.download = '173836.pdf'; a156.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[157]) { a157.download = '190799.pdf'; a157.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[158]) { a158.download = '165996.pdf'; a158.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[159]) { a159.download = '182315.pdf'; a159.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[160]) { a160.download = '36686.pdf'; a160.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[161]) { a161.download = '193455.pdf'; a161.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[162]) { a162.download = '18292.pdf'; a162.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[163]) { a163.download = '6180.pdf'; a163.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[164]) { a164.download = '166969.pdf'; a164.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[165]) { a165.download = '153361.pdf'; a165.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[166]) { a166.download = '16131.pdf'; a166.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[167]) { a167.download = '15377.pdf'; a167.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[168]) { a168.download = '174168.pdf'; a168.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[169]) { a169.download = '190845.pdf'; a169.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[170]) { a170.download = '38579.pdf'; a170.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[171]) { a171.download = '191681.pdf'; a171.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[172]) { a172.download = '17857.pdf'; a172.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[173]) { a173.download = '218121.pdf'; a173.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[174]) { a174.download = '37425.pdf'; a174.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[175]) { a175.download = '182549.pdf'; a175.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[176]) { a176.download = '173741.pdf'; a176.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[177]) { a177.download = '191029.pdf'; a177.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[178]) { a178.download = '162315.pdf'; a178.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[179]) { a179.download = '223176.pdf'; a179.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[180]) { a180.download = '180443.pdf'; a180.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[181]) { a181.download = '219050.pdf'; a181.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[182]) { a182.download = '201385.pdf'; a182.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[183]) { a183.download = '174748.pdf'; a183.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[184]) { a184.download = '219570.pdf'; a184.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[185]) { a185.download = '15343.pdf'; a185.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[186]) { a186.download = '37555.pdf'; a186.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[187]) { a187.download = '18285.pdf'; a187.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[188]) { a188.download = '205242.pdf'; a188.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[189]) { a189.download = '157756.pdf'; a189.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[190]) { a190.download = '190650.pdf'; a190.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[191]) { a191.download = '187199.pdf'; a191.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[192]) { a192.download = '37351.pdf'; a192.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[193]) { a193.download = '32985.pdf'; a193.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[194]) { a194.download = '190559.pdf'; a194.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[195]) { a195.download = '201605.pdf'; a195.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[196]) { a196.download = '218534.pdf'; a196.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[197]) { a197.download = '16511.pdf'; a197.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[198]) { a198.download = '165694.pdf'; a198.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[199]) { a199.download = '190574.pdf'; a199.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[200]) { a200.download = '16349.pdf'; a200.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[201]) { a201.download = '161127.pdf'; a201.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[202]) { a202.download = '43413.pdf'; a202.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[203]) { a203.download = '201323.pdf'; a203.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[204]) { a204.download = '201142.pdf'; a204.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[205]) { a205.download = '187327.pdf'; a205.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[206]) { a206.download = '223053.pdf'; a206.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[207]) { a207.download = '37854.pdf'; a207.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[208]) { a208.download = '37816.pdf'; a208.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[209]) { a209.download = '202430.pdf'; a209.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[210]) { a210.download = '191710.pdf'; a210.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[211]) { a211.download = '18074.pdf'; a211.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[212]) { a212.download = '17895.pdf'; a212.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[213]) { a213.download = '13617.pdf'; a213.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[214]) { a214.download = '192245.pdf'; a214.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[215]) { a215.download = '173411.pdf'; a215.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[216]) { a216.download = '165935.pdf'; a216.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[217]) { a217.download = '153605.pdf'; a217.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[218]) { a218.download = '173719.pdf'; a218.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[219]) { a219.download = '155893.pdf'; a219.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[220]) { a220.download = '216620.pdf'; a220.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[221]) { a221.download = '16412.pdf'; a221.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[222]) { a222.download = '218353.pdf'; a222.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[223]) { a223.download = '160484.pdf'; a223.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[224]) { a224.download = '36836.pdf'; a224.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[225]) { a225.download = '218298.pdf'; a225.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[226]) { a226.download = '222298.pdf'; a226.click(); downloadBtn.disabled = true}
    if (oracleNum.value == oracNum[227]) { a227.download = '216189.pdf'; a227.click(); downloadBtn.disabled = true}
    //    { errorMsg.innerText = 
    //     'Download Successful'
    //     errorMsg.style.backgroundColor = 'white' }

    else {



        // errorMsg.innerText = 'Input Oracle Number First'
        // errorMsg.style.backgroundColor = 'white'
    }

    for (let i = 0; i < memName.length; i++) {
        if (yourName.value == memName[i]) {
            errorMsg.innerText =
                'Download Successful'
            errorMsg.style.backgroundColor = 'white'
        }
    }



    // console.log(memName[80])

    // console.log(errorMsg.innerText) 

});



// for my monthly slections styling
let monthStyle = document.getElementById('monthly').style

monthStyle.color = 'blue'
monthStyle.padding = '3px'
monthStyle.borderRadius = '5px'
monthStyle.fontSize = '15px'
monthStyle.outline = 'none'
monthStyle.borderBottomColor = 'red'

// for my yearly selections styling
let yearlyStyle = document.getElementById('yearly').style
yearlyStyle.color = 'blue'
yearlyStyle.padding = '3px'
yearlyStyle.borderRadius = '5px'
yearlyStyle.fontSize = '15px'
yearlyStyle.outline = 'none'
yearlyStyle.borderBottomColor = 'red';





let yearly = document.querySelector('option[value = yearly]')
yearly.innerText = new Date().getFullYear()


// set an array to get months
const mtn = ["January", "February", "March",
    "April", "May", "June", "July", "August", "September", "October",
    "November", "December"];

// set variable for new date
let d = new Date()

// get my object option 
let monthly = document.querySelector('option[value = monthly]')

monthly.innerText = mtn[d.getMonth()];



// footer date configuration
// d for date was previosly declared

let space = document.getElementsByClassName('space')[0]
let space1 = document.getElementsByClassName('space1')[0]
space.style.marginLeft = '5px'
space1.style.marginRight = '5px'

space.innerHTML = d.getFullYear() + '.';
console.log(space.innerHTML)
// end

// localDate to displace
const myInterval = setInterval(myTimer, 1000);
const my_Timeout = setTimeout(myTimeout)

function myTimer() {
    const date = new Date();


    document.getElementsByClassName('localDate')[0].innerHTML
        = date.toLocaleTimeString();

        
}

function myTimeout(){
    const date = new Date();
    document.getElementsByClassName('localDate')[0].textContent
    = date.getMonth()+1
    
}

// end

