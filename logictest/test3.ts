/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(_listHarga, _history) {
  const uangJajan = 10000;
  let totalTabungan = 0;
  // Write your code here
  const reduceStory = _history.split(".").reduce((previous, current) => {
    let price = 0;
    const splitCurrent = current.split("-");
    _listHarga.map((item) => {
      if (splitCurrent[1].split(",").includes(item.nama)) {
        price += item.harga;
      }
    });
    const subTotal = uangJajan - price;
    totalTabungan += subTotal;
    return {
      ...previous,
      TotalTabungan: totalTabungan,
      [splitCurrent[0]]: subTotal,
    };
  }, {});
  return reduceStory;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
