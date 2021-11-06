var tanya = true;
while (tanya) {
	//MENANGKAP PILIHAN ORANG
	var p = prompt('Pilih: gajah, semut, orang? ');

	//MENANGKAP PILIHAN COMPUTER
	//MEMBANGKITKAN BILANGAN RANDOM
	var comp = Math.random();

	if( comp < 0.34 ) {
		comp = 'gajah';
	} else if ( comp >= 0.34 && comp < 0.67 ){
		comp = 'orang';
	} else {
		comp = 'semut';
	}

	//MENENTUKAN RULES
	var hasil = '';
	if ( p == comp ) {
		hasil = 'SERI!';
	} else if( p == 'gajah' ) {
		hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	} else if ( p == 'orang') {
		hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
	} else if (p == 'semut') {
		hasil = (comp == 'orang') ? 'KALAH1' : 'MENANG!'
	} else {
		hasil = 'memasukkan pilihan yang salah!'; 
	}
	//TAMPILKAN HASIL
	alert ('Kamu memilih ' + p + ' dan komputer memilih ' + comp + '. \nKamu ' + hasil);

	//KONFIRMASI
	tanya = confirm ('Ingin suit lagi? ');
}

