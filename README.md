# Hotel Realta FrontEnd

List nama username **Github** di Trello untuk diundang sebagai collaborator di project ini.

## Clone Project

Clone project ini dengan menggunakan perintah:

```bash
git clone https://github.com/VierryFadhilah/Hotel-Realta-FrontEnd.git
```

Setelah clone project ini, buka di VS Code.

## Instalasi dan Jalankan Project

```bash
npm install

npm run dev
```

## Buat Branch Baru

Setelah itu buat branch baru dengan perintah

```bash
git checkout -b  namamodule_namakamu
```

**Contoh**: `

```
git checkout -b payment_rustam
```

Buat kodingan untuk FrontEnd kalian.

> Semua perubahan kode untuk masing-masing module di `commit` dan di `push` ke `branch` masing-masing (jangan ke `branch master`).
> Setelah itu kalau ada keperluan untuk menyatukan project bisa melakukan `pull request` atau menghubungi Tama atau yang lain.

---

## Aturan-aturan

### Penamaan

> **Jangan menggunakan nama yang kurang memberikan gambaran tentang variabel, nama method/function, isi file atau folder yang dikerjakan agar mudah dikenali atau dibaca oleh orang lain. Contoh:** `let terserah = 'terserah`, `nyoba-nyoba.controller.ts`, `jajang.service.ts`, atau `folderPunyaJajang`.

1. Penamaan variabel menggunakan bahasa inggris dan menggunakan format **camelCase**.
   Contoh: `const hotelName: string`

2. Penamaan method/function menggunakan bahasa inggris dan menggunakan format **camelCase**.
   Contoh: `const getAllUsers() {}`;

3. Penamaan folder menggunakan nama bahasa inggris dan menggunakan format **camelCase**.
   Contoh: `usersSchema`

4. Nama folder untuk models menggunakan format `namaSchema`.
   Contoh: `usersSchema`

### Struktur Folder REDUX

1. Struktur folder untuk models:

```
redux/
  ├── action
    ├── nama_modul (contoh: users)
        ├── action.tsx
        ├── ActionTypes.tsx
  ├── reducer
    ├── nama_modul (contoh: users)
        ├── reducer.tsx
  ├── saga
    ├── nama_modul (contoh: users)
        ├── index.ts (*untuk yang TakeEvery nya)
  ├── store
    index.tsx (*silahkan masukan reducers masing masing)
```

### Struktur Folder Untuk Masing-masing MODUl

```
pages/
  ├── nama_modul (contoh: users)
    ├── users
      ├── folder
        index.tsx
    _app.tsx
    _document.tsx
    _index.tsx
components/
    ├── paginations
        ├── index.tsx
```

Jika ada kebutuhan penambahan folder custom seperti untuk `guards`, `validation`, dll bisa disesuaikan.

Namun apabila jika misalnya ada kebutuhan yang bisa dipakai oleh banyak schema seperti `konstanta`, `decorators` dan lainnya bisa disimpan pada folder `common`.

### Penggunaan File .env

Untuk file `.env` bisa buat file dengan nama `.env` dan bisa copy isinya dari file `.env.example`
