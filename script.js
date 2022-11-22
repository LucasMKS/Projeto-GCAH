        
/*Variáveis globais para geração dos relatórios*/
var atividadeComentada = "";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    // adicione um zero na frente de números<10
    day = checkTime(day);
    month = checkTime(month);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year + " " + h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/*Array de controle do login coordenador na tela principal (codigo, senha e id)*/
function BuscarArrayLoginCoordenadores() { 
    var arraylogincoordenador = ['hp200200;c124;200', 'hp200201;c124;201', 'hp200202;c124;202'];
    return arraylogincoordenador;
}

/*Array's de controle dos coordenadores das 3 equipes do turno Manhã, Tarde e Noite (tela funcionários)*/
function BuscarArrayEquipeCoordenadores() { 
    var equipetodas = ['200;Sudario Gonçalves;Coordenador;hp200200;Equipe Manhã - Leitos 01 a 17', '201;Lucas Melo;Coordenador;hp200201;Equipe Tarde - Leitos 01 a 17', '202;Gabriel Galdino;Coordenador;hp200203;Equipe Noite - Leitos 01 a 17'];
    return equipetodas;
}

/*Array de controle do login dos funcionários na tela Principal (codigo, senha e id)*/
function BuscarArrayLogin() { 
    var arrayLogin = ['hp200001;c123;1', 'hp200002;c123;6', 'hp200003;c123;11', 'hp200004;c123;21', 'hp200005;c123;26', 'hp200006;c123;31', 'hp200007;c123;4', 'hp200008;c123;5', 'hp200009;c123;9', 'hp200010;c123;2',
        'hp200011;c123;3', 'hp200012;c123;7', 'hp200013;c123;8', 'hp200014;c123;12', 'hp200015;c123;13', 'hp200016;c123;20','hp200017;c123;15', 'hp200018;c123;27', 'hp200019;c123;28', 'hp200020;c123;32',
        'hp200021;c123;33', 'hp200022;c123;22', 'hp200023;c123;35', 'hp200024;c123;38', 'hp200025;c123;39', 'hp200026;c123;45', 'hp200027;c123;42', 'hp200028;c123;18', 'hp200029;c123;24', 'hp200030;c123;25',
        'hp200031;c123;29', 'hp200032;c123;30', 'hp200033;c123;34', 'hp200034;c123;10', 'hp200035;c123;36', 'hp200036;c123;37', 'hp200037;c123;40', 'hp200038;c123;41', 'hp200039;c123;44', 'hp200040;c123;43',
        'hp200041;c123;19','hp200042;c123;16','hp200043;c123;17','hp200044;c123;45','hp200045;c123;14'
    ];
    return arrayLogin;
}

/*Array's de controle dos funcionários e definição equipeturno Manhã, Tarde e Noite (tela CargaEquipeCord)*/
function BuscarArrayEquipeManha() { /*Turma da Manhã*/
    var equipemanha = ['1;Carlos de Souza;Enfermeiro;hp200001;Eq01 Responsavel p/Leitos 01 a 05', '2;José Feliciano;Técnico de Enfermagem;hp200010;Eq01 Responsavel p/Leitos 01 a 05', '3;Adriano de Silva;Técnico de Enfermagem;hp200011;Eq01 Responsavel p/Leitos 01 a 05', '14;Berenice Antunes;Auxiliar Técnico de Enfermagem;hp200045;Eq01 Responsavel p/Leitos 01 a 05',
        '15;Silvia Aparecida;Auxiliar Técnico de Enfermagem;hp200017;Eq01 Responsavel p/Leitos 01 a 05', '6;Eduardo das Dores;Enfermeiro;hp200002;Eq02 Responsavel p/Leitos 06 a 11', '7;Marisa Helena;Técnico de Enfermagem;hp200012;Eq02 Responsavel p/Leitos 06 a 11', '8;Monique Resende;Técnico de Enfermagem;hp200013;Eq02 Responsavel p/Leitos 06 a 11',
        '16;Afranio Pedrosa;Auxiliar Técnico de Enfermagem;hp200042;Eq02 Responsavel p/Leitos 06 a 11', '17;Wilde Juvenal;Auxiliar Técnico de Enfermagem;hp200043;Eq02 Responsavel p/Leitos 06 a 11', '11;Gabriel Galdino;Enfermeiro;hp200003;Eq03 Responsavel p/Leitos 12 a 17', '12;Lucas de Souza;Técnico de Enfermagem;hp200014;Eq03 Responsavel p/Leitos 12 a 17',
        '13;Pedro de Souza;Técnico de Enfermagem;hp200015;Eq03 Responsavel p/Leitos 12 a 17', '18;Soraia das Dores;Auxiliar Técnico de Enfermagem;hp200028;Eq03 Responsavel p/Leitos 12 a 17', '19;Ricardo Soares;Auxiliar Técnico de Enfermagem;hp200041;Eq03 Responsavel p/Leitos 12 a 17'];
    return equipemanha;
}

function BuscarArrayEquipeTarde() {  /*Turma da Tarde*/
    var equipetarde = ['21;Amarildo da Cunha;Enfermeiro;hp200004;Eq01 Responsavel p/Leitos 01 a 05', '20;Abrel Feliciano;Tecnico de Enfermagem;hp200016;Eq01 Responsavel p/Leitos 01 a 05', '23;Anderson Louredo;Técnico de Enfermagem;hp200017;Eq01 Responsavel p/Leitos 01 a 05', '24;Carlos Alberto;Auxiliar Técnico de Enfermagem;hp200029;Eq01 Responsavel p/Leitos 01 a 05',
        '25;Alexandre Aparecido;Auxiliar Técnico de Enfermagem;hp200030;Eq01 Responsavel p/Leitos 01 a 05', '26;Eduarda das Dores;Enfermeiro;hp200005;Eq02 Responsavel p/Leitos 06 a 11', '27;Maria Helena;Técnico de Enfermagem;hp200018;Eq02 Responsavel p/Leitos 06 a 11', '28;Pedro Resende;Técnico de Enfermagem;hp200019;Eq02 Responsavel p/Leitos 06 a 11',
        '29;Lucas Pedrosa;Auxiliar Técnico de Enfermagem;hp200031;Eq02 Responsavel p/Leitos 06 a 11', '30;Wesley Juvenal;Auxiliar Técnico de Enfermagem;hp200032;Eq02 Responsavel p/Leitos 06 a 11', '31;Marinalva Galdino;Enfermeiro;hp200006;Eq03 Responsavel p/Leitos 12 a 17', '32;Rogeria Gonçalves;Técnico de Enfermagem;hp200020;Eq03 Responsavel p/Leitos 12 a 17',
        '33;Patrico da Iluminação;Técnico de Enfermagem;hp200021;Eq03 Responsavel p/Leitos 12 a 17', '34;Sandra Cecilia;Auxiliar Técnico de Enfermagem;hp200033;Eq03 Responsavel p/Leitos 12 a 17', '10;Renato de Almeida;Auxiliar Técnico de Enfermagem;hp200034;Eq03 Responsavel p/Leitos 12 a 17'];
    return equipetarde;
}

function BuscarArrayEquipeNoite() {  /*Turma da Noite*/
    var equipenoite = ['4;Antonio Carlos;Enfermeiro;hp200007;Eq01 Responsavel p/Leitos 01 a 05', '22;Jean Antunes;Tecnico de Enfermagem;hp200022;Eq01 Responsavel p/Leitos 01 a 05', '35;Adriana Calabresa;Técnico de Enfermagem;hp200023;Eq01 Responsavel p/Leitos 01 a 05', '36;Alexandra de Nobrega;Auxiliar Técnico de Enfermagem;hp200035;Eq01 Responsavel p/Leitos 01 a 05',
        '37;Janaina Cavadão;Auxiliar Técnico de Enfermagem;hp200036;Eq01 Responsavel p/Leitos 01 a 05', '5;Nadine Figueredo;Enfermeiro;hp200008;Eq02 Responsavel p/Leitos 06 a 11', '38;Monica Anunciação;Técnico de Enfermagem;hp200024;Eq02 Responsavel p/Leitos 06 a 11', '39;Carol Resende;Técnico de Enfermagem;hp200025;Eq02 Responsavel p/Leitos 06 a 11',
        '40;Pedro Francisco;Auxiliar Técnico de Enfermagem;hp200037;Eq02 Responsavel p/Leitos 06 a 11', '41;Bonifacio Delgado;Auxiliar Técnico de Enfermagem;hp200038;Eq02 Responsavel p/Leitos 06 a 11', '9;André Cenario;Enfermeiro;hp200009;Eq03 Responsavel p/Leitos 12 a 17', '45;Juliana Abrel;Técnico de Enfermagem;hp200026;Eq03 Responsavel p/Leitos 12 a 17',
        '42;Paulo Coelho;Técnico de Enfermagem;hp200027;Eq03 Responsavel p/Leitos 12 a 17', '43;Benedita das Dores;Auxiliar Técnico de Enfermagem;hp200039;Eq03 Responsavel p/Leitos 12 a 17', '44;Juliano Brasil;Auxiliar Técnico de Enfermagem;hp200040;Eq03 Responsavel p/Leitos 12 a 17'];
    return equipenoite;
}

/*Função de identificação daas atividades por função dos funcionários*/
function BuscarArrayAtividadesPorFuncao() {

    var funcaoAtividade = [
        '1;Enfermeiro;1)Atualização de prontuários e auxilio aos medicos',
        '2;Enfermeiro;2)Encaminhamento de exames a laboratórios',
        '3;Enfermeiro;3)Cuidar da higiene e conservação do local',
        '4;Enfermeiro;4)Administrar medicamentos prescritos ao paciente',
        '5;Enfermeiro;5)Monitorar quadro geral do paciente',
        '6;Técnico de Enfermagem;1)Participar da programação da Assistência',
        '7;Técnico de Enfermagem;2)Auxiliar o paciente na coleta de exames',
        '8;Técnico de Enfermagem;3)Administrar medicamentos prescritos ao paciente',
        '9;Técnico de Enfermagem;4)Higienização coorporal dos pacientes',
       '10;Técnico de Enfermagem;5)Monitoramento de dados vitais',
       '11;Auxiliar Técnico de Enfermagem;1)Auxiliar a programação da assistência',
       '12;Auxiliar Técnico de Enfermagem;2)Auxiliar no deslocamento necessários do paciente',
       '13;Auxiliar Técnico de Enfermagem;3)Coleta de materiais de exame',
       '14;Auxiliar Técnico de Enfermagem;4)Acompanhamento de dietas',
       '15;Auxiliar Técnico de Enfermagem;5)Mobilização do paciente no leito'];

    return funcaoAtividade;
    
}

document.querySelector('#copyright').innerHTML =  `
<footer>Direitos reservados a equipe de projeto: Sudário Gonçalves, Lucas Marques, Gabriel Galdino, Wesley
            Cardoso - 3ºPeriodo - UNA/Contagem - 09/2022
        </footer><br>
`  
