# HacktoberFest 2019 - Mashara.id

![HacktoberFest](https://vinitshahdeo.github.io/HacktoberFest2K19/hacktoberfestfooter.png)

## Apa itu Hacktoberfest?

Hacktoberfest adalah acara tahunan _open source_ yang di inisiasi oleh digital ocean sejak 2014. Tujuannya untuk mengajak semua developer seluruh dunia untuk berkontribusi ke ekosistem open source. Acara ini terbuka untuk siapa saja, baik untuk pemula hingga professional sekalipun. Berlangsung mulai dari tanggal 1 oktober hingga 31 oktober .

Hacktoberfest memberikan hadiah menarik seperti t-shirt & sticker bagi kontributor yang memenuhi persyaratan.

[https://hacktoberfest.digitalocean.com/](https://hacktoberfest.digitalocean.com/)

## ✨ Tentang Mashara (https://www.mashara.id)

  <a href="https://twitter.com/mashara_id">
    <img alt="Twitter: mashara_id" src="https://img.shields.io/twitter/follow/mashara_id.svg?style=social" target="_blank" />
  </a>

![Mashara.id](https://www.mashara.id/_nuxt/img/2751b66.jpg)
Mimpi besar Mashara adalah ingin mengumpulkan dan membagikan pengetahuan tentang dunia keislaman ke seluruh dunia. Perintah mempelajari ilmu agama adalah wajib bagi seluruh umat islam. Untuk itu, mengkodifikasi sumber-sumber keilmuan berkualitas melalui orang-orang terpercaya sangat penting bagi Mashara. Fenomena hari ini, pengetahuan terkait keislaman seringkali hanya terbatas bagi kalangan tertentu saja. Mashara hadir untuk menjembatani orang-orang yang memiliki pengetahuan dengan yang membutuhkannya.

## :handshaking: Cara kontribusi ke project ini

- Sebelum berkontribusi ke project ini pastikan sudah mendaftar di website official [Hacktoberfest](https://hacktoberfest.digitalocean.com/) dan mendaftar di website [Mashara.id](https://www.mashara.id)
- Baca Ketentuan Kontribusi di bawah
- Lakukan pull request (baca pada bagian Getting started)

## <center>Selamat Datang di Tantangan Search Surah of Quran</center>

## :exclamation: Ketentuan Kontribusi

1. Pada index.js terdapat fungsi searchQuran().
2. Fungsi tersebut menerima satu parameter berupa nama surah dalam Al-Quran
3. Surah Al-Quran terdapat pada file data.json
4. Contoh inputan:

```
searchQuran("Al-Faatiha")
// Output:
{
            "number": 1,
            "name": "\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0671\u0644\u0652\u0641\u064e\u0627\u062a\u0650\u062d\u064e\u0629\u0650",
            "englishName": "Al-Faatiha",
            "englishNameTranslation": "The Opening",
            "numberOfAyahs": 7,
            "revelationType": "Meccan"
        }
```

## 🚀 Getting started

- Fork repository ini ( Klik tombol fork di bagian atas kanan halaman ini )
- Clone hasil fork nya ke komputer anda.

```markdown
git clone https://github.com/[your-username]/mashara-hacktoberfest
```

- Build Setup. (Cek di bawah).

- Buat branch baru dengan format `tantangan2/profil-mashara-kamu`, contoh `tantangan2/agung-putu-yoga`

```markdown
git checkout -b nama-branch
```

- buat folder <url-profile-mashara> pada folder submissions
- copy folder search-surah-quran ke folder submissions dan ubah nama folder tersebut menjadi <url-profile-mashara> kamu.

- Buat perubahan sesuai Ketentuan Cara Kontribusi di atas
- Pastikan sudah melewati testing terlebih dahulu (lihat bagian TEST dibawah)
- Commit dan push code kamu

```markdown
git add .
git commit -m 'Commit message'
git push origin branch-name
```

- Buat pull-request dari hasil repositori fork anda. ( Klik tombol `New Pull Request`).
- Tunggu PR anda di review
- Jangan lupa **Star** repo ini.

## ⚙️ Build Setup

```
# install dependencies
$ npm run install
```

## :heavy_check_mark: TEST Your Code

Gunakan test berikut sebelum di push:

```
npm run test submissions/<url-profile-mashara>/index.test.js
```

Pastikan sudah lulus test baru push code kamu. Terimakasih

# HAPPY CODING
