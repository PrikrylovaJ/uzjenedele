const uzJeNedele = dayjs('2021-03-28');
const dnes = dayjs();

if (dnes.isAfter(uzJeNedele)) {
  document.write('ANO');
} else {
  document.write('NE');
}