window.addEventListener('load', isItIRO, false);

    cardsArray =
    [
      [
        ['Orc Herói','1h','gef_fild03',3600000],
        ['Maya','2h','anthell02 ',7200000],
        ['Maya','8h','gld_dun03 ',28800000],
        ['Maya','8h','gld_dun02_2',28800000],
        ['Senhor dos Orcs','2h','gef_fild10',7200000],
        ['Besouro-ladrão Dourado','1h','prt_sewb4',3600000],
        ['Eddga','2h','pay_fild10',7200000],
        ['Eddga','8h','gld_dun01 ',28800000],
        ['Eddga','8h','gld_dun01_2',28800000],
        ['Osíris','1h','moc_pryd04',3600000],
        ['Amon Ra','1h','moc_pryd06',3600000],
        ['Freeoni','2h','moc_fild17',7200000],
        ['Drácula','1h','gef_dun01',3600000],
        ['Doppelganger','2h','gef_dun02 ',7200000],
        ['Doppelganger','8h','gld_dun02 ',28800000],
        ['Doppelganger','8h','gld_dun04',28800000],
        ['Abelha-rainha','2h','mjolnir_04 ',7200000],
        ['Abelha-rainha','8h','gld_dun02',28800000],
        ['Flor do Luar','1h','pay_dun04 ',3600000],
        ['Flor do Luar','8h','gld_dun01',28800000],
        ['Lady Tanee','7h','ayo_dun02',25200000],
        ['Bafomé','2h','prt_maze03 ',7200000],
        ['Bafomé','8h','gld_dun03',28800000],
        ['Faraó','1h','in_sphinx5',3600000],
        ['Drake','2h','treasure02',7200000],
        ['Cavaleiro da Tempestade','1h','xmas_dun02',3600000],
        ['Boitatá','2h','bra_dun02',7200000],
        ['Leak','2h','dew_dun01',7200000],
        ['Senhor dos Mortos','2:13h','Nifflheim',7980000],
        ['Senhor das Trevas','1h','gl_chyard ',3600000],
        ['Senhor das Trevas','1h','gl_chyard_ ',3600000],
        ['Senhor das Trevas','8h','gld_dun04 ',28800000],
        ['Senhor das Trevas','8h','gld_dun04_2',28800000],
        ['Gorynych','2h','mosk_dun03',7200000],
        ['Lady Branca','1:56h','lou_dun03',6960000],
        ['Hatii','2h','xmas_fild01',7200000],
        ['Ktullanux','2h','ice_dun03',7200000],
        ['Memória de Thanatos','2h','Torre de Thanatos',7200000],
        ['Superaprendiz','2h','teg_dun02',7200000],
        ['Aprendiz','8h','teg_dun01',28800000],
        ['RSX-0806','2:05h','ein_dun02',7500000],
        ['Samurai Encarnado','1:31h','ama_dun03',5460000],
        ['Serpente Suprema','1:34h','gon_dun03',5640000],
        ['Tao Gunka','5h','beach_dun',18000000],
        ['General Tartaruga','1h','tur_dun04',3600000],
        ['Atroce','3h','ra_fild03 ',10800000],
        ['Atroce','5h','ra_fild04 ',18000000],
        ['Atroce','3h','ve_fild01 ',10800000],
        ['Atroce','6h','ve_fild02 ',21600000],
        ['Atroce','8h','gld_dun03_2',28800000],
        ['Kraken','2:20h','iz_dun05',8400000],
        ['Kiel-D-01','2h','kh_dun02',7200000],
        ['Vesper','2h','jupe_core',7200000],
        ['Detardeurus','3h','abyss_03',10800000],
        ['Bispo Decadente','2h','abbey02',7200000],
        ['Pesar Noturno','5h','ra_san05',18000000],
        ['Rainha Scaraba','2h','dic_dun02',7200000],
        ['Rainha Scaraba Dourada','2h','dic_dun03',7200000],
        ['Amon Ra Pesadelo','1h','moc_prydn2',3600000],
        ['Egnigen Cenia','2h','lhz_dun02',7200000],
        ['Valquíria Randgris','8h','odin_tem03',28800000],
        ['Pyuriel Furiosa','8h','gld2_prt',28800000],
        ['General Daehyun','8h','gld2_pay',28800000],
        ['Guardião Morto Kades','8h','gld2_gef',28800000],
        ['Gioia','8h','gld2_ald',28800000],
        ['Ifrit','11h','thor_v03',39600000],
        ['Belzebu','12h','abbey03',43200000],
        ['Bafomé Amaldiçoado','2h','gl_cas02_',7200000],
        ['Morroc Ferido','12h','moc_fild22',43200000],
        ['Vigia do Tempo','2h','c_tower3_',7200000],
        ['Gemaring','1h','lasa_dun01',3600000]

      ],
      [
        ['Memorial dos Orcs','2h',7200000],
        ['Altar do Selo','12h',43200000],
        ['Caverna do Polvo','3h',10800000],
        ['Esgotos de Malangdo','3h',10800000],
        ['Labirinto da Neblina','2h',7200000],
        ['Torneio de Magia','23h',46800000],
        ['Memórias de Sarah','20h',72000000],
        ['Palácio das Mágoas','23h',82800000],
        ['Pesadelo Musical','20h',72000000],
        ['Charleston em Crise','20h',72000000],
        ['Torre do Demônio','23h',82800000],
        ['Maldição de Glast Heim','23h',82800000],
        ['Covil de Vermes','23h',82800000],
        ['Laboratório Central','23h',82800000],
        ['Fábrica do Terror','23h',82800000],
        ['Sala Final','23h',82800000],
        ['Ilha Bios','23h',82800000],
        ['Caverna de Mors','23h',82800000],
        ['Templo do Demônio Rei','23h',82800000],
        ['Ninho de Nidhogg','3d',259200000],
        ['Laboratório de Wolfchev','3d',259200000],
        ['Glast Heim Sombria','70h',252000000],
        ['Torre sem Fim','7d',604800000],
        ['Hospital Abandonado','7d',604800000],
        ['Caverna de Buwaya','7d',604800000],
        ['Lago de Bakonawa','7d',604800000],
        ['Salão de Ymir','16h', 57600000],
        ['Sussurro Sombrio','3d',259200000]
      ]
    ];

    cardsArray2 =
    [
      [
        ['Orc Hero','1h','gef_fild03',3600000],
        ['Maya','2h','anthell02 ',7200000],
        ['Maya','8h','gld_dun03 ',28800000],
        ['Maya','8h','gld_dun02_2',28800000],
        ['Orc Lord','2h','gef_fild10',7200000],
        ['Golden Thief Bug','1h','prt_sewb4',3600000],
        ['Eddga','2h','pay_fild10',7200000],
        ['Eddga','8h','gld_dun01 ',28800000],
        ['Eddga','8h','gld_dun01_2',28800000],
        ['Osiris','1h','moc_pryd04',3600000],
        ['Amon Ra','1h','moc_pryd06',3600000],
        ['Phreeoni','2h','moc_fild17',7200000],
        ['Dracula','1h','gef_dun01',3600000],
        ['Doppelganger','2h','gef_dun02 ',7200000],
        ['Doppelganger','8h','gld_dun02 ',28800000],
        ['Doppelganger','8h','gld_dun04',28800000],
        ['Mistress','2h','mjolnir_04 ',7200000],
        ['Mistress','8h','gld_dun02',28800000],
        ['Moonlight Flower','1h','pay_dun04 ',3600000],
        ['Moonlight Flower','8h','gld_dun01',28800000],
        ['Lady Tanee','7h','ayo_dun02',25200000],
        ['Baphomet','2h','prt_maze03 ',7200000],
        ['Baphomet','8h','gld_dun03',28800000],
        ['Pharaoh','1h','in_sphinx5',3600000],
        ['Drake','2h','treasure02',7200000],
        ['Stormy Knight','1h','xmas_dun02',3600000],
        ['Boitata','2h','bra_dun02',7200000],
        ['Leak','2h','dew_dun01',7200000],
        ['Lord of the Dead','2h 13minh','Nifflheim',7980000],
        ['Dark Lord','1h','gl_chyard ',3600000],
        ['Dark Lord','1h','gl_chyard_ ',3600000],
        ['Dark Lord','8h','gld_dun04 ',28800000],
        ['Dark Lord','8h','gld_dun04_2',28800000],
        ['Gopinch','2h','mosk_dun03',7200000],
        ['White Lady','1h 56minh','lou_dun03',6960000],
        ['Hatii','2h','xmas_fild01',7200000],
        ['Ktullanux','2h','ice_dun03',7200000],
        ['Memory of Thanatos','2h','Torre de Thanatos',7200000],
        ['Supernovice','2h','teg_dun02',7200000],
        ['Novice','8h','teg_dun01',28800000],
        ['RSX-0806','2h 5minh','ein_dun02',7500000],
        ['Samurai Specter','1h 31minh','ama_dun03',5460000],
        ['Evil Snake Lord','1h 34minh','gon_dun03',5640000],
        ['Tao Gunka','5h','beach_dun',18000000],
        ['Turtle General','1h','tur_dun04',3600000],
        ['Atroce','3h','ra_fild03 ',10800000],
        ['Atroce','5h','ra_fild04 ',18000000],
        ['Atroce','3h','ve_fild01 ',10800000],
        ['Atroce','6h','ve_fild02 ',21600000],
        ['Atroce','8h','gld_dun03_2',28800000],
        ['Kraken','2h 20minh','iz_dun05',8400000],
        ['Kiel-D-01','2h','kh_dun02',7200000],
        ['Vesper','2h','jupe_core',7200000],
        ['Detardeurus','3h','abyss_03',10800000],
        ['Fallen Bishop','2h','abbey02',7200000],
        ['Gloom Under Night','5h','ra_san05',18000000],
        ['Scaraba Queen','2h','dic_dun02',7200000],
        ['Golden Scaraba Queen','2h','dic_dun03',7200000],
        ['Nightmare Amon Ra','1h','moc_prydn2',3600000],
        ['Egnigem Cenia','2h','lhz_dun02',7200000],
        ['Valkyrie Randgris','8h','odin_tem03',28800000],
        ['Angry Student Pyuriel','8h','gld2_prt',28800000],
        ['General Daehyun','8h','gld2_pay',28800000],
        ['Dead Guardian Kades','8h','gld2_gef',28800000],
        ['Gioia','8h','gld2_ald',28800000],
        ['Ifrit','11h','thor_v03',39600000],
        ['Beelzebub','12h','abbey03',43200000],
        ['Great Demon Baphomet','2h','gl_cas02_',7200000],
        ['Wounded Morocc','12h','moc_fild22',43200000],
        ['Timeholder','2h','c_tower3_',7200000],
        ['Giant Eggring','1h','lasa_dun01',3600000]

      ],
      [
        ['Orc Memory','2h',7200000],
        ['Sealed Shrine','12h',43200000],
        ['Octopus Cave','3h',10800000],
        ['Malangdo Culvert','3h',10800000],
        ['Hazy Forest','2h',7200000],
        ['Geffen Magic Tournament','23h',46800000],
        ["Sara's Memory",'20h',72000000],
        ['Ghost Palace','23h',82800000],
        ['Nightmarish Jitterbug','20h',72000000],
        ['Charleston Crisis','20h',72000000],
        ["Devil's Tower",'23h',82800000],
        ['Old Glast Heim','23h',82800000],
        ['Faceworm Nest','23h',82800000],
        ['Central Laboratory','23h',82800000],
        ['Horror Toy Factory','23h',82800000],
        ['The Last Room','23h',82800000],
        ['Isle of Bios','23h',82800000],
        ["Morse's Cave",'23h',82800000],
        ['Temple of Demon God','23h',82800000],
        ["Nidhoggur's Nest",'3d',259200000],
        ["Wolfchev's Laboratory",'3d',259200000],
        [0],
        ['Endless Tower','7d',604800000],
        ["Bangungot's Instance",'7d',604800000],
        ["Buwaya's Cave",'7d',604800000],
        ['Bakonawa Extermination','7d',604800000],
        ['Room of Consciousness	','16h', 57600000],
        ['Sky Fortress','3d',259200000],
        ['VIP Summoner', '6h', 21600000],
        ['Airship Raid', '23h', 82800000],
        ['Wave Mode', '23h', 82800000],
        ['Heart Hunter War Base 2', '23h', 82800000],
        ['Werner Laboratory Central Room', '23h', 82800000]
      ]
    ];
//
function isItIRO(){
  if (!isIRO) {
    populate(cardsArray, 'adicionar');
  }else {
    populate(cardsArray2, 'add');
  }
}

function populate(array, add){
  let
  divEls = [], p1Arr=[], p2Arr=[], h3Arr=[],imgArr=[],btnArr=[],
  p1Txt= [], p2Txt = [], h3Txt=[];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      // console.log('cardsArray2['+i+']['+j+']');
      if (array[i][j].length == 1) {
        continue;
      }

        divEls[j] = document.createElement('DIV'),
        p1Arr[j] = document.createElement('P'),
        h3Arr[j] = document.createElement('H3'),
        imgArr[j] = document.createElement('IMG'),
        btnArr[j] = document.createElement('BUTTON'),

        btnTxt = document.createTextNode(add),
        h3Txt[j] = document.createTextNode(array[i][j][0]),
        p1Txt[j] = document.createTextNode(array[i][j][1]),
        imgArr[j].alt = array[i][0];

        divEls[j].classList.add('box');
        divEls[j].classList.add('item');
        h3Arr[j].classList.add('name');
        p1Arr[j].classList.add('intervalo');
        btnArr[j].classList.add('addCard');
        btnArr[j].classList.add('search');
        btnArr[j].name = j;

        btnArr[j].appendChild(btnTxt);
        p1Arr[j].appendChild(p1Txt[j]);
        h3Arr[j].appendChild(h3Txt[j]);

        divEls[j].appendChild(h3Arr[j]);
        divEls[j].appendChild(imgArr[j]);
        divEls[j].appendChild(p1Arr[j]);
        if (i == 0) {
          p2Arr[j] = document.createElement('P'),
          p2Txt[j] = document.createTextNode(array[i][j][2]);
          p2Arr[j].classList.add('mapId');
          p2Arr[j].appendChild(p2Txt[j]);
          divEls[j].appendChild(p2Arr[j]);
        }
        divEls[j].appendChild(btnArr[j]);
        if (i == 0) {
          mvpSearch.appendChild(divEls[j]);
          imgArr[j].src = "./img/mvp/"+j+".gif";
        }else {
          instSearch.appendChild(divEls[j]);
          imgArr[j].src = "./img/instancias/"+j+".gif";
        }

        btnArr[j].setAttribute('onclick','addInfo(this);');
    }
  }
}
