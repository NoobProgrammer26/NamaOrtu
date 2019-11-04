function validate(){
    /* Validasi Password User */
    let passdata = document.getElementById("startcode").value;
    if(document.getElementById("pantat").value == "Re-enter"){
		document.getElementById("startcode").type = "password"
		document.getElementById("bout").style ="display:inline;";
        document.getElementById("startcode").value = ""
        document.getElementById("pantat").value = "Login"
        document.getElementById("hint").style ="padding-top:0;margin:0;display:inline;color:red;"
    } else if(passdata == "") {
    } else if(passdata == "NAEL" || passdata == "nael") {
		document.getElementById("protection").style ="display:none;";
		document.getElementById("mangisi").style ="display:block;";
    } else {
        document.getElementById("startcode").value = "*Invalid Password";
		document.getElementById("startcode").type = "text"
		document.getElementById("bout").style ="display:none;";
        document.getElementById("pantat").value = "Re-enter"
    }
}

function start() {
    document.getElementById("eusi").style ="display:block;"
    document.getElementById("prit").style = "display:none;"
    document.getElementById("haha").style ="display:inline;"
}

function nama_ortu(){
    /* Prompt */
	var x = document.getElementById("inputnya").value;
    /* Nama orang tua dan command lain-nya */
	switch(x) {
		case "nevan":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Nevan Wagner";
			document.getElementById("mother").innerHTML = "Shinta Dewatari";
			document.getElementById("daddy").innerHTML = "Dapot Mangisi Siagian";
			break;
		case "geraldi":
            document.getElementById("window_answer").style="display:block;";
            document.getElementById("child").innerHTML = "Chadinar Geraldi Purnama";
            alert("Error 404\nForbidden Access")
			document.getElementById("mother").innerHTML = "Forbidden Access 404";
			document.getElementById("daddy").innerHTML = "Forbidden Access 404";
			break;
		case "nael":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Efran Nathanael Langitan";
			document.getElementById("mother").innerHTML = "Deni Rivanti";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "farel":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Farellino Lanang";
			document.getElementById("mother").innerHTML = "Indrawati Purnamasari";
			document.getElementById("daddy").innerHTML = "Matheus Hutauruk";
			break;
		case "enos":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Enos Garcia Karosekali";
			document.getElementById("mother").innerHTML = "Erwina Pelawi";
			document.getElementById("daddy").innerHTML = "James Karosekali";
			break;
		case "fitrah":
             document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "M. Fitrah Yudi Seno";
			document.getElementById("mother").innerHTML = "Ayu Dirgahayu";
			document.getElementById("daddy").innerHTML = "Djarot Eko Suseno";
			break;
		case "kinanti":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Kinanti Becik Widrorahajo";
			document.getElementById("mother").innerHTML = "Siska Rahajo";
			document.getElementById("daddy").innerHTML = "Hari";
			break;
		case "cella":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Cella Avilria";
			document.getElementById("mother").innerHTML = "-";
			document.getElementById("daddy").innerHTML = "Ujang Wijaya";
			break;
		case "david":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "David Zior Darmanik";
			document.getElementById("mother").innerHTML = "Christina Maria Hutagaol";
			document.getElementById("daddy").innerHTML = "Marantika Revando Darmanik";
			break;
		case "elia":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Christoper Elia";
			document.getElementById("mother").innerHTML = "Yohanna Panjaitan";
			document.getElementById("daddy").innerHTML = "Sahat Sihombing";
			break;
		case "lio":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Lio";
			document.getElementById("mother").innerHTML = "Trisna Bertutu";
			document.getElementById("daddy").innerHTML = "Awan Mangatas";
			break;
		case "willy":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Willy";
			document.getElementById("mother").innerHTML = "-";
			document.getElementById("daddy").innerHTML = "Sunardi";
			break;
		case "aldo":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Claudius Revaldo";
			document.getElementById("mother").innerHTML = "Sri Rummigati";
			document.getElementById("daddy").innerHTML = "Melky";
			break;
		case "fien":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Fienaldo Bobolangi Sulo";
			document.getElementById("mother").innerHTML = "Defrin Sangraja";
			document.getElementById("daddy").innerHTML = "Hendrik";
			break;
		case "felice":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Felice";
			document.getElementById("mother").innerHTML = "Mandy Simatupang";
			document.getElementById("daddy").innerHTML = "Meiny Purba";
			break;
		case "desmond":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Desmond";
			document.getElementById("mother").innerHTML = "Mandy Simatupang";
			document.getElementById("daddy").innerHTML = "Meiny Purba";
			break;
		case "testname":
			var ch = prompt("Siapa nama anaknya?");
			var ib = prompt("Siapa nama ibunya?");
			var bp = prompt("Siapa nama ayahnya?");
		switch(ch){
			case null:
				break;
			case "":
				alert("Ini kenapa kosong nama anaknya ya?")
				break;
			case "Nama Anak":
				alert("ERROR 512 - Maaf!\n\nMaaf!\nAnda tidak bisa mengetik nama(Nama Anak) tersebut karena nama itu sudah direserved oleh program.")
				break;
			default:
                document.getElementById("window_answer").style="display:block;";
                document.getElementById("inputnya").value = ch;
				document.getElementById("child").innerHTML = ch;
				document.getElementById("mother").innerHTML = ib;
				document.getElementById("daddy").innerHTML = bp;
			}
			break;
		case "berta":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Berta";
			document.getElementById("mother").innerHTML = "Maria Tjong Kiat Tjen";
			document.getElementById("daddy").innerHTML = "Robertus Sutowo";
			break;
		case "agnes":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Agnes";
			document.getElementById("mother").innerHTML = "Elida";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "stevi":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Stevi";
			document.getElementById("mother").innerHTML = "Efrida Wati Taringan";
			document.getElementById("daddy").innerHTML = "Teguh";
			break;
		case "julius":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Julius Adhi Prawara";
			document.getElementById("mother").innerHTML = "Pupuh Sri Rahayu";
			document.getElementById("daddy").innerHTML = "Dedi Priatna";
			break;
		case "angel":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Angel";
			document.getElementById("mother").innerHTML = "Yuliana Sembel";
			document.getElementById("daddy").innerHTML = "Djengkar Subagyo";
			break;
		case "karin":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Karin";
			document.getElementById("mother").innerHTML = "Ika Sartika";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "mickey":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Mickey Marco Wolf";
			document.getElementById("mother").innerHTML = "Tanti Wolf";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "tyo":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Krisantio Nugroho";
			document.getElementById("mother").innerHTML = "Sri Hartuti";
			document.getElementById("daddy").innerHTML = "Gunawan";
			break;
		case "harry":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Harry Sugianto";
			document.getElementById("mother").innerHTML = "Elika";
			document.getElementById("daddy").innerHTML = "-";
			break;
		case "gracia":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Gracia Christanbel Pattymahu";
			document.getElementById("mother").innerHTML = "Vera Ngapiet";
			document.getElementById("daddy").innerHTML = "";
			break;
		case "nagita":
            document.getElementById("window_answer").style="display:block;";document.getElementById("window_answer").style="display:block;";
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Nagita Purnamasari";
			document.getElementById("mother").innerHTML = "Vivi Ferawati";
			document.getElementById("daddy").innerHTML = "Agus";
			break;
		case "pio":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Pio Danu Adji";
			document.getElementById("mother").innerHTML = "Novi";
			document.getElementById("daddy").innerHTML = "Adji";
			break;
		case "yosafat":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Yosafat Christian Lufi";
			document.getElementById("mother").innerHTML = "Sri Patmiarsi (Aning)";
			document.getElementById("daddy").innerHTML = "Yamin";
			break;
		case "nathan":
            document.getElementById("window_answer").style="display:block;";
			document.getElementById("child").innerHTML = "Nathaniel Phang Ryan";
			document.getElementById("mother").innerHTML = "Fanny Tessalonika";
			document.getElementById("daddy").innerHTML = "Herman";
			break;
		case "":
			break;
		default:
	 		alert("Error in userInput(); \n" + x + " is not exist in our database!\nERROR CODE:\n" + x +"_IS_NOT_EXIST\n\nFor more information, copy this error code and report it to the developer.")
            document.getElementById("inputnya").value = ""; 
            break;
	 	}
}

function reset() {
    /* Reset */
    document.getElementById("inputnya").value = "";
    document.getElementById("window_answer").style="display:none;";
}

function about() {
    /* Tentang */
	alert("About This Program\nCredits:\n-Chadinar Geraldi Purnama: Developer dan Pembantu nama-nama\n-Efran Nathanael Langitan: Developer Untuk Android dan pembantu nama-nama\n-Farellino Lanang: Pembantu Nama-nama\n-Nagita Purnamasari: Pembantu Nama-nama\n-Kristantio Nurgroho: Pembantu Nama-nama\n-Yang Suka Ngatain di kelas atau di sekolah: Pembantu nama-nama");
}

function logout(){
	window.location.reload();
}