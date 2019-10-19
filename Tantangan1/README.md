# HacktoberFest 2019 - Mashara.id

## Apa itu Hacktoberfest?

Hacktoberfest adalah acara tahunan _open source_ yang di inisiasi oleh digital ocean sejak 2014. Tujuannya untuk mengajak semua developer seluruh dunia untuk berkontribusi ke ekosistem open source. Acara ini terbuka untuk siapa saja, baik untuk pemula hingga professional sekalipun. Berlangsung mulai dari tanggal 1 oktober hingga 31 oktober .

Hacktoberfest memberikan hadiah menarik seperti t-shirt & sticker bagi kontributor yang memenuhi persyaratan.

[https://hacktoberfest.digitalocean.com/](https://hacktoberfest.digitalocean.com/)

## ✨ Tentang Mashara (https://www.mashara.id)

  <a href="https://twitter.com/mashara_id">
    <img alt="Twitter: mashara_id" src="https://img.shields.io/twitter/follow/mashara_id.svg?style=social" target="_blank" />
  </a>
  
![alt text](https://www.mashara.id/_nuxt/img/2751b66.jpg)
Mimpi besar Mashara adalah ingin mengumpulkan dan membagikan pengetahuan tentang dunia keislaman ke seluruh dunia. Perintah mempelajari ilmu agama adalah wajib bagi seluruh umat islam. Untuk itu, mengkodifikasi sumber-sumber keilmuan berkualitas melalui orang-orang terpercaya sangat penting bagi Mashara. Fenomena hari ini, pengetahuan terkait keislaman seringkali hanya terbatas bagi kalangan tertentu saja. Mashara hadir untuk menjembatani orang-orang yang memiliki pengetahuan dengan yang membutuhkannya.

Kalender Hijiriah Converter

## :fire: Cara kontribusi ke project ini

- Sebelum berkontribusi ke project ini pastikan sudah mendaftar di website official [Hacktoberfest](https://hacktoberfest.digitalocean.com/) dan mendaftar di website [Mashara.id](https://www.mashara.id)
- Baca Ketentuan Kontribusi di bawah
- Lakukan pull request (baca pada bagian Getting started)

## <center>Konverter Kalender Hijiriah dari Kalender Masehi.</center>

## :exclamation: Ketentuan Kontribusi

Kami menginginkan sebuah fungsi yang seperti :

1. Pada index.js terdapat fungsi hijriConverter().
2. Fungsi tersebut menerima dua parameter, tanggal dan penyesuaian
3. Tanggal yang di input menggunakan format YYYY-MM-DD (cth: 2019-10-19)
4. Penyesuaian memiliki 5 inputan yang berbeda: -2, -1, 0, 1, dan 2.
5. Selain penyesuaian tersebut, maka fungsi akan mengembalikan error.
6. Contoh inputan:

```
hijriConverter("2019-10-19", 0) // Sabt, 20 Safar 1441 H
hijriConverter("2019-10-19", 2) // Sabt, 22 Safar 1441 H
hijriConverter("2019-10-19", -2) // Sabt, 18 Safar 1441 H
```

## 🚀 Getting started

- Fork repository ini ( Klik tombol fork di bagian atas kanan halaman ini )
- Clone hasil fork nya ke komputer anda.

```markdown
git clone https://github.com/[your-username]/mashara-hacktoberfest
```

- Buat branch baru dengan format `tantangan4/profil-mashara-kamu`, contoh `tantangan4/cakra-danu-sedayu`

```markdown
git checkout -b nama-branch
```

- Buat perubahan sesuai "Ketentuan Kontribusi" di atas
- Pastikan sudah melewati testing terlebih dahulu (lihat bagian TEST dibawah)
- Commit dan push

```markdown
git add .
git commit -m 'Commit message'
git push origin branch-name
```

- Buat pull-request dari hasil repositori fork anda. ( Klik tombol `New Pull Request`).
- Jangan lupa Tambahkan Label `Hacktoberfest`
- Tunggu PR anda di review
- Jangan lupa **Star** repo ini.

## ⚙️ Build Setup

Pastikan anda berada pada folder Kontribusi1

```
# install dependencies
$ npm install
```

## :heavy_check_mark: TEST

Gunakan test berikut sebelum di push:

```
npm run test
```

Pastikan sudah lulus test baru push code kamu. Terimakasih

## 📝 License

Copyright © 2019 [Mashara](https://github.com/mashara).<br />
This project is [MIT](https://github.com/mashara) licensed.

# HAPPY CODING
