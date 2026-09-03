def balik_kata(teks):
    stack = []

    for huruf in teks:
        stack.append(huruf)

    hasil = ""
    while stack:
        hasil += stack.pop()
    return hasil

while True:
    print("\n=== PROGRAM BALIK KATA ===")
    print("1. Balik Kata")
    print("2. Keluar")

    pilihan = input("Pilih menu: ")

    if pilihan == "1":
        teks = input("Masukkan kata: ")
        hasil = balik_kata(teks)
        print("Hasil:", hasil)

    elif pilihan == "2":
        print("Terima kasih telah menggunakan program ini.")
        break

    else:
        print("Pilihan tidak valid.")