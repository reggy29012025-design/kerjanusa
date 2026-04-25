// Source basis: https://github.com/aldidana/indonesia-cities-regencies
const indonesiaLocationOptions = [
  {
    "province": "Aceh",
    "options": [
      {
        "label": "Aceh Barat",
        "value": "Aceh Barat",
        "rawName": "Kabupaten Aceh Barat"
      },
      {
        "label": "Aceh Barat Daya",
        "value": "Aceh Barat Daya",
        "rawName": "Kabupaten Aceh Barat Daya"
      },
      {
        "label": "Aceh Besar",
        "value": "Aceh Besar",
        "rawName": "Kabupaten Aceh Besar"
      },
      {
        "label": "Aceh Jaya",
        "value": "Aceh Jaya",
        "rawName": "Kabupaten Aceh Jaya"
      },
      {
        "label": "Aceh Selatan",
        "value": "Aceh Selatan",
        "rawName": "Kabupaten Aceh Selatan"
      },
      {
        "label": "Aceh Singkil",
        "value": "Aceh Singkil",
        "rawName": "Kabupaten Aceh Singkil"
      },
      {
        "label": "Aceh Tamiang",
        "value": "Aceh Tamiang",
        "rawName": "Kabupaten Aceh Tamiang"
      },
      {
        "label": "Aceh Tengah",
        "value": "Aceh Tengah",
        "rawName": "Kabupaten Aceh Tengah"
      },
      {
        "label": "Aceh Tenggara",
        "value": "Aceh Tenggara",
        "rawName": "Kabupaten Aceh Tenggara"
      },
      {
        "label": "Aceh Timur",
        "value": "Aceh Timur",
        "rawName": "Kabupaten Aceh Timur"
      },
      {
        "label": "Aceh Utara",
        "value": "Aceh Utara",
        "rawName": "Kabupaten Aceh Utara"
      },
      {
        "label": "Banda Aceh",
        "value": "Banda Aceh",
        "rawName": "Kota Banda Aceh"
      },
      {
        "label": "Bener Meriah",
        "value": "Bener Meriah",
        "rawName": "Kabupaten Bener Meriah"
      },
      {
        "label": "Bireuen",
        "value": "Bireuen",
        "rawName": "Kabupaten Bireuen"
      },
      {
        "label": "Gayo Lues",
        "value": "Gayo Lues",
        "rawName": "Kabupaten Gayo Lues"
      },
      {
        "label": "Langsa",
        "value": "Langsa",
        "rawName": "Kota Langsa"
      },
      {
        "label": "Lhokseumawe",
        "value": "Lhokseumawe",
        "rawName": "Kota Lhokseumawe"
      },
      {
        "label": "Nagan Raya",
        "value": "Nagan Raya",
        "rawName": "Kabupaten Nagan Raya"
      },
      {
        "label": "Pidie",
        "value": "Pidie",
        "rawName": "Kabupaten Pidie"
      },
      {
        "label": "Pidie Jaya",
        "value": "Pidie Jaya",
        "rawName": "Kabupaten Pidie Jaya"
      },
      {
        "label": "Sabang",
        "value": "Sabang",
        "rawName": "Kota Sabang"
      },
      {
        "label": "Simeulue",
        "value": "Simeulue",
        "rawName": "Kabupaten Simeulue"
      },
      {
        "label": "Subulussalam",
        "value": "Subulussalam",
        "rawName": "Kota Subulussalam"
      }
    ]
  },
  {
    "province": "Bali",
    "options": [
      {
        "label": "Badung",
        "value": "Badung",
        "rawName": "Kabupaten Badung"
      },
      {
        "label": "Bangli",
        "value": "Bangli",
        "rawName": "Kabupaten Bangli"
      },
      {
        "label": "Buleleng",
        "value": "Buleleng",
        "rawName": "Kabupaten Buleleng"
      },
      {
        "label": "Denpasar",
        "value": "Denpasar",
        "rawName": "Kota Denpasar"
      },
      {
        "label": "Gianyar",
        "value": "Gianyar",
        "rawName": "Kabupaten Gianyar"
      },
      {
        "label": "Jembrana",
        "value": "Jembrana",
        "rawName": "Kabupaten Jembrana"
      },
      {
        "label": "Karangasem",
        "value": "Karangasem",
        "rawName": "Kabupaten Karangasem"
      },
      {
        "label": "Klungkung",
        "value": "Klungkung",
        "rawName": "Kabupaten Klungkung"
      },
      {
        "label": "Tabanan",
        "value": "Tabanan",
        "rawName": "Kabupaten Tabanan"
      }
    ]
  },
  {
    "province": "Banten",
    "options": [
      {
        "label": "Cilegon",
        "value": "Cilegon",
        "rawName": "Kota Cilegon"
      },
      {
        "label": "Lebak",
        "value": "Lebak",
        "rawName": "Kabupaten Lebak"
      },
      {
        "label": "Pandeglang",
        "value": "Pandeglang",
        "rawName": "Kabupaten Pandeglang"
      },
      {
        "label": "Serang (Kabupaten)",
        "value": "Serang",
        "rawName": "Kabupaten Serang"
      },
      {
        "label": "Serang (Kota)",
        "value": "Serang",
        "rawName": "Kota Serang"
      },
      {
        "label": "Tangerang (Kabupaten)",
        "value": "Tangerang",
        "rawName": "Kabupaten Tangerang"
      },
      {
        "label": "Tangerang (Kota)",
        "value": "Tangerang",
        "rawName": "Kota Tangerang"
      },
      {
        "label": "Tangerang Selatan",
        "value": "Tangerang Selatan",
        "rawName": "Kota Tangerang Selatan"
      }
    ]
  },
  {
    "province": "Bengkulu",
    "options": [
      {
        "label": "Bengkulu",
        "value": "Bengkulu",
        "rawName": "Kota Bengkulu"
      },
      {
        "label": "Bengkulu Selatan",
        "value": "Bengkulu Selatan",
        "rawName": "Kabupaten Bengkulu Selatan"
      },
      {
        "label": "Bengkulu Tengah",
        "value": "Bengkulu Tengah",
        "rawName": "Kabupaten Bengkulu Tengah"
      },
      {
        "label": "Bengkulu Utara",
        "value": "Bengkulu Utara",
        "rawName": "Kabupaten Bengkulu Utara"
      },
      {
        "label": "Kaur",
        "value": "Kaur",
        "rawName": "Kabupaten Kaur"
      },
      {
        "label": "Kepahiang",
        "value": "Kepahiang",
        "rawName": "Kabupaten Kepahiang"
      },
      {
        "label": "Lebong",
        "value": "Lebong",
        "rawName": "Kabupaten Lebong"
      },
      {
        "label": "Mukomuko",
        "value": "Mukomuko",
        "rawName": "Kabupaten Mukomuko"
      },
      {
        "label": "Rejang Lebong",
        "value": "Rejang Lebong",
        "rawName": "Kabupaten Rejang Lebong"
      },
      {
        "label": "Seluma",
        "value": "Seluma",
        "rawName": "Kabupaten Seluma"
      }
    ]
  },
  {
    "province": "Gorontalo",
    "options": [
      {
        "label": "Boalemo",
        "value": "Boalemo",
        "rawName": "Kabupaten Boalemo"
      },
      {
        "label": "Bone Bolango",
        "value": "Bone Bolango",
        "rawName": "Kabupaten Bone Bolango"
      },
      {
        "label": "Gorontalo (Kabupaten)",
        "value": "Gorontalo",
        "rawName": "Kabupaten Gorontalo"
      },
      {
        "label": "Gorontalo (Kota)",
        "value": "Gorontalo",
        "rawName": "Kota Gorontalo"
      },
      {
        "label": "Gorontalo Utara",
        "value": "Gorontalo Utara",
        "rawName": "Kabupaten Gorontalo Utara"
      },
      {
        "label": "Pohuwato",
        "value": "Pohuwato",
        "rawName": "Kabupaten Pohuwato"
      }
    ]
  },
  {
    "province": "Jakarta",
    "options": [
      {
        "label": "Jakarta Barat",
        "value": "Jakarta Barat",
        "rawName": "Kota Administrasi Jakarta Barat"
      },
      {
        "label": "Jakarta Pusat",
        "value": "Jakarta Pusat",
        "rawName": "Kota Administrasi Jakarta Pusat"
      },
      {
        "label": "Jakarta Selatan",
        "value": "Jakarta Selatan",
        "rawName": "Kota Administrasi Jakarta Selatan"
      },
      {
        "label": "Jakarta Timur",
        "value": "Jakarta Timur",
        "rawName": "Kota Administrasi Jakarta Timur"
      },
      {
        "label": "Jakarta Utara",
        "value": "Jakarta Utara",
        "rawName": "Kota Administrasi Jakarta Utara"
      },
      {
        "label": "Kepulauan Seribu",
        "value": "Kepulauan Seribu",
        "rawName": "Kabupaten Administrasi Kepulauan Seribu"
      }
    ]
  },
  {
    "province": "Jambi",
    "options": [
      {
        "label": "Batanghari",
        "value": "Batanghari",
        "rawName": "Kabupaten Batanghari"
      },
      {
        "label": "Bungo",
        "value": "Bungo",
        "rawName": "Kabupaten Bungo"
      },
      {
        "label": "Jambi",
        "value": "Jambi",
        "rawName": "Kota Jambi"
      },
      {
        "label": "Kerinci",
        "value": "Kerinci",
        "rawName": "Kabupaten Kerinci"
      },
      {
        "label": "Merangin",
        "value": "Merangin",
        "rawName": "Kabupaten Merangin"
      },
      {
        "label": "Muaro Jambi",
        "value": "Muaro Jambi",
        "rawName": "Kabupaten Muaro Jambi"
      },
      {
        "label": "Sarolangun",
        "value": "Sarolangun",
        "rawName": "Kabupaten Sarolangun"
      },
      {
        "label": "Sungai Penuh",
        "value": "Sungai Penuh",
        "rawName": "Kota Sungai Penuh"
      },
      {
        "label": "Tanjung Jabung Barat",
        "value": "Tanjung Jabung Barat",
        "rawName": "Kabupaten Tanjung Jabung Barat"
      },
      {
        "label": "Tanjung Jabung Timur",
        "value": "Tanjung Jabung Timur",
        "rawName": "Kabupaten Tanjung Jabung Timur"
      },
      {
        "label": "Tebo",
        "value": "Tebo",
        "rawName": "Kabupaten Tebo"
      }
    ]
  },
  {
    "province": "Jawa Barat",
    "options": [
      {
        "label": "Bandung (Kabupaten)",
        "value": "Bandung",
        "rawName": "Kabupaten Bandung"
      },
      {
        "label": "Bandung (Kota)",
        "value": "Bandung",
        "rawName": "Kota Bandung"
      },
      {
        "label": "Bandung Barat",
        "value": "Bandung Barat",
        "rawName": "Kabupaten Bandung Barat"
      },
      {
        "label": "Banjar (Kota)",
        "value": "Banjar",
        "rawName": "Kota Banjar"
      },
      {
        "label": "Bekasi (Kabupaten)",
        "value": "Bekasi",
        "rawName": "Kabupaten Bekasi"
      },
      {
        "label": "Bekasi (Kota)",
        "value": "Bekasi",
        "rawName": "Kota Bekasi"
      },
      {
        "label": "Bogor (Kabupaten)",
        "value": "Kabupaten Bogor",
        "rawName": "Kabupaten Bogor"
      },
      {
        "label": "Bogor (Kota)",
        "value": "Bogor Kota",
        "rawName": "Kota Bogor"
      },
      {
        "label": "Kemang, Bogor",
        "value": "Kemang, Kabupaten Bogor",
        "rawName": "Kecamatan Kemang"
      },
      {
        "label": "Parung, Bogor",
        "value": "Parung, Kabupaten Bogor",
        "rawName": "Kecamatan Parung"
      },
      {
        "label": "Ciamis",
        "value": "Ciamis",
        "rawName": "Kabupaten Ciamis"
      },
      {
        "label": "Cianjur",
        "value": "Cianjur",
        "rawName": "Kabupaten Cianjur"
      },
      {
        "label": "Cimahi",
        "value": "Cimahi",
        "rawName": "Kota Cimahi"
      },
      {
        "label": "Cirebon (Kabupaten)",
        "value": "Cirebon",
        "rawName": "Kabupaten Cirebon"
      },
      {
        "label": "Cirebon (Kota)",
        "value": "Cirebon",
        "rawName": "Kota Cirebon"
      },
      {
        "label": "Depok",
        "value": "Depok",
        "rawName": "Kota Depok"
      },
      {
        "label": "Garut",
        "value": "Garut",
        "rawName": "Kabupaten Garut"
      },
      {
        "label": "Indramayu",
        "value": "Indramayu",
        "rawName": "Kabupaten Indramayu"
      },
      {
        "label": "Karawang",
        "value": "Karawang",
        "rawName": "Kabupaten Karawang"
      },
      {
        "label": "Kuningan",
        "value": "Kuningan",
        "rawName": "Kabupaten Kuningan"
      },
      {
        "label": "Majalengka (Kabupaten)",
        "value": "Majalengka",
        "rawName": "Kabupaten Majalengka"
      },
      {
        "label": "Majalengka (Kabupaten)",
        "value": "Majalengka",
        "rawName": "Kabupaten Majalengka"
      },
      {
        "label": "Purwakarta",
        "value": "Purwakarta",
        "rawName": "Kabupaten Purwakarta"
      },
      {
        "label": "Subang",
        "value": "Subang",
        "rawName": "Kabupaten Subang"
      },
      {
        "label": "Sukabumi (Kabupaten)",
        "value": "Sukabumi",
        "rawName": "Kabupaten Sukabumi"
      },
      {
        "label": "Sukabumi (Kota)",
        "value": "Sukabumi",
        "rawName": "Kota Sukabumi"
      },
      {
        "label": "Sumedang",
        "value": "Sumedang",
        "rawName": "Kabupaten Sumedang"
      },
      {
        "label": "Tasikmalaya (Kabupaten)",
        "value": "Tasikmalaya",
        "rawName": "Kabupaten Tasikmalaya"
      },
      {
        "label": "Tasikmalaya (Kota)",
        "value": "Tasikmalaya",
        "rawName": "Kota Tasikmalaya"
      }
    ]
  },
  {
    "province": "Jawa Tengah",
    "options": [
      {
        "label": "Banjarnegara",
        "value": "Banjarnegara",
        "rawName": "Kabupaten Banjarnegara"
      },
      {
        "label": "Banyumas",
        "value": "Banyumas",
        "rawName": "Kabupaten Banyumas"
      },
      {
        "label": "Batang",
        "value": "Batang",
        "rawName": "Kabupaten Batang"
      },
      {
        "label": "Blora",
        "value": "Blora",
        "rawName": "Kabupaten Blora"
      },
      {
        "label": "Boyolali",
        "value": "Boyolali",
        "rawName": "Kabupaten Boyolali"
      },
      {
        "label": "Brebes",
        "value": "Brebes",
        "rawName": "Kabupaten Brebes"
      },
      {
        "label": "Cilacap",
        "value": "Cilacap",
        "rawName": "Kabupaten Cilacap"
      },
      {
        "label": "Demak",
        "value": "Demak",
        "rawName": "Kabupaten Demak"
      },
      {
        "label": "Grobogan",
        "value": "Grobogan",
        "rawName": "Kabupaten Grobogan"
      },
      {
        "label": "Jepara",
        "value": "Jepara",
        "rawName": "Kabupaten Jepara"
      },
      {
        "label": "Karanganyar",
        "value": "Karanganyar",
        "rawName": "Kabupaten Karanganyar"
      },
      {
        "label": "Kebumen",
        "value": "Kebumen",
        "rawName": "Kabupaten Kebumen"
      },
      {
        "label": "Kendal",
        "value": "Kendal",
        "rawName": "Kabupaten Kendal"
      },
      {
        "label": "Klaten",
        "value": "Klaten",
        "rawName": "Kabupaten Klaten"
      },
      {
        "label": "Kudus",
        "value": "Kudus",
        "rawName": "Kabupaten Kudus"
      },
      {
        "label": "Magelang (Kabupaten)",
        "value": "Magelang",
        "rawName": "Kabupaten Magelang"
      },
      {
        "label": "Magelang (Kota)",
        "value": "Magelang",
        "rawName": "Kota Magelang"
      },
      {
        "label": "Pati",
        "value": "Pati",
        "rawName": "Kabupaten Pati"
      },
      {
        "label": "Pekalongan (Kabupaten)",
        "value": "Pekalongan",
        "rawName": "Kabupaten Pekalongan"
      },
      {
        "label": "Pekalongan (Kota)",
        "value": "Pekalongan",
        "rawName": "Kota Pekalongan"
      },
      {
        "label": "Pemalang",
        "value": "Pemalang",
        "rawName": "Kabupaten Pemalang"
      },
      {
        "label": "Purbalingga",
        "value": "Purbalingga",
        "rawName": "Kabupaten Purbalingga"
      },
      {
        "label": "Purworejo",
        "value": "Purworejo",
        "rawName": "Kabupaten Purworejo"
      },
      {
        "label": "Rembang",
        "value": "Rembang",
        "rawName": "Kabupaten Rembang"
      },
      {
        "label": "Salatiga",
        "value": "Salatiga",
        "rawName": "Kota Salatiga"
      },
      {
        "label": "Semarang (Kabupaten)",
        "value": "Semarang",
        "rawName": "Kabupaten Semarang"
      },
      {
        "label": "Semarang (Kota)",
        "value": "Semarang",
        "rawName": "Kota Semarang"
      },
      {
        "label": "Sragen",
        "value": "Sragen",
        "rawName": "Kabupaten Sragen"
      },
      {
        "label": "Sukoharjo",
        "value": "Sukoharjo",
        "rawName": "Kabupaten Sukoharjo"
      },
      {
        "label": "Surakarta",
        "value": "Surakarta",
        "rawName": "Kota Surakarta"
      },
      {
        "label": "Tegal (Kabupaten)",
        "value": "Tegal",
        "rawName": "Kabupaten Tegal"
      },
      {
        "label": "Tegal (Kota)",
        "value": "Tegal",
        "rawName": "Kota Tegal"
      },
      {
        "label": "Temanggung",
        "value": "Temanggung",
        "rawName": "Kabupaten Temanggung"
      },
      {
        "label": "Wonogiri",
        "value": "Wonogiri",
        "rawName": "Kabupaten Wonogiri"
      },
      {
        "label": "Wonosobo",
        "value": "Wonosobo",
        "rawName": "Kabupaten Wonosobo"
      }
    ]
  },
  {
    "province": "Jawa Timur",
    "options": [
      {
        "label": "Bangkalan",
        "value": "Bangkalan",
        "rawName": "Kabupaten Bangkalan"
      },
      {
        "label": "Banyuwangi",
        "value": "Banyuwangi",
        "rawName": "Kabupaten Banyuwangi"
      },
      {
        "label": "Batu",
        "value": "Batu",
        "rawName": "Kota Batu"
      },
      {
        "label": "Blitar (Kabupaten)",
        "value": "Blitar",
        "rawName": "Kabupaten Blitar"
      },
      {
        "label": "Blitar (Kota)",
        "value": "Blitar",
        "rawName": "Kota Blitar"
      },
      {
        "label": "Bojonegoro",
        "value": "Bojonegoro",
        "rawName": "Kabupaten Bojonegoro"
      },
      {
        "label": "Bondowoso",
        "value": "Bondowoso",
        "rawName": "Kabupaten Bondowoso"
      },
      {
        "label": "Gresik",
        "value": "Gresik",
        "rawName": "Kabupaten Gresik"
      },
      {
        "label": "Jember",
        "value": "Jember",
        "rawName": "Kabupaten Jember"
      },
      {
        "label": "Jombang",
        "value": "Jombang",
        "rawName": "Kabupaten Jombang"
      },
      {
        "label": "Kediri (Kabupaten)",
        "value": "Kediri",
        "rawName": "Kabupaten Kediri"
      },
      {
        "label": "Kediri (Kota)",
        "value": "Kediri",
        "rawName": "Kota Kediri"
      },
      {
        "label": "Lamongan",
        "value": "Lamongan",
        "rawName": "Kabupaten Lamongan"
      },
      {
        "label": "Lumajang",
        "value": "Lumajang",
        "rawName": "Kabupaten Lumajang"
      },
      {
        "label": "Madiun (Kabupaten)",
        "value": "Madiun",
        "rawName": "Kabupaten Madiun"
      },
      {
        "label": "Madiun (Kota)",
        "value": "Madiun",
        "rawName": "Kota Madiun"
      },
      {
        "label": "Malang (Kabupaten)",
        "value": "Malang",
        "rawName": "Kabupaten Malang"
      },
      {
        "label": "Malang (Kota)",
        "value": "Malang",
        "rawName": "Kota Malang"
      },
      {
        "label": "Mojokerto (Kabupaten)",
        "value": "Mojokerto",
        "rawName": "Kabupaten Mojokerto"
      },
      {
        "label": "Mojokerto (Kota)",
        "value": "Mojokerto",
        "rawName": "Kota Mojokerto"
      },
      {
        "label": "Nganjuk",
        "value": "Nganjuk",
        "rawName": "Kabupaten Nganjuk"
      },
      {
        "label": "Ngawi",
        "value": "Ngawi",
        "rawName": "Kabupaten Ngawi"
      },
      {
        "label": "Pacitan",
        "value": "Pacitan",
        "rawName": "Kabupaten Pacitan"
      },
      {
        "label": "Pamekasan",
        "value": "Pamekasan",
        "rawName": "Kabupaten Pamekasan"
      },
      {
        "label": "Pasuruan (Kabupaten)",
        "value": "Pasuruan",
        "rawName": "Kabupaten Pasuruan"
      },
      {
        "label": "Pasuruan (Kota)",
        "value": "Pasuruan",
        "rawName": "Kota Pasuruan"
      },
      {
        "label": "Ponorogo",
        "value": "Ponorogo",
        "rawName": "Kabupaten Ponorogo"
      },
      {
        "label": "Probolinggo (Kabupaten)",
        "value": "Probolinggo",
        "rawName": "Kabupaten Probolinggo"
      },
      {
        "label": "Probolinggo (Kota)",
        "value": "Probolinggo",
        "rawName": "Kota Probolinggo"
      },
      {
        "label": "Sampang",
        "value": "Sampang",
        "rawName": "Kabupaten Sampang"
      },
      {
        "label": "Sidoarjo",
        "value": "Sidoarjo",
        "rawName": "Kabupaten Sidoarjo"
      },
      {
        "label": "Situbondo",
        "value": "Situbondo",
        "rawName": "Kabupaten Situbondo"
      },
      {
        "label": "Sumenep",
        "value": "Sumenep",
        "rawName": "Kabupaten Sumenep"
      },
      {
        "label": "Surabaya",
        "value": "Surabaya",
        "rawName": "Kota Surabaya"
      },
      {
        "label": "Trenggalek",
        "value": "Trenggalek",
        "rawName": "Kabupaten Trenggalek"
      },
      {
        "label": "Tuban",
        "value": "Tuban",
        "rawName": "Kabupaten Tuban"
      },
      {
        "label": "Tulungagung",
        "value": "Tulungagung",
        "rawName": "Kabupaten Tulungagung"
      }
    ]
  },
  {
    "province": "Kalimantan Barat",
    "options": [
      {
        "label": "Bengkayang",
        "value": "Bengkayang",
        "rawName": "Kabupaten Bengkayang"
      },
      {
        "label": "Kapuas Hulu",
        "value": "Kapuas Hulu",
        "rawName": "Kabupaten Kapuas Hulu"
      },
      {
        "label": "Kayong Utara",
        "value": "Kayong Utara",
        "rawName": "Kabupaten Kayong Utara"
      },
      {
        "label": "Ketapang",
        "value": "Ketapang",
        "rawName": "Kabupaten Ketapang"
      },
      {
        "label": "Kubu Raya",
        "value": "Kubu Raya",
        "rawName": "Kabupaten Kubu Raya"
      },
      {
        "label": "Landak",
        "value": "Landak",
        "rawName": "Kabupaten Landak"
      },
      {
        "label": "Melawi",
        "value": "Melawi",
        "rawName": "Kabupaten Melawi"
      },
      {
        "label": "Mempawah",
        "value": "Mempawah",
        "rawName": "Kabupaten Mempawah"
      },
      {
        "label": "Pontianak",
        "value": "Pontianak",
        "rawName": "Kota Pontianak"
      },
      {
        "label": "Sambas",
        "value": "Sambas",
        "rawName": "Kabupaten Sambas"
      },
      {
        "label": "Sanggau",
        "value": "Sanggau",
        "rawName": "Kabupaten Sanggau"
      },
      {
        "label": "Sekadau",
        "value": "Sekadau",
        "rawName": "Kabupaten Sekadau"
      },
      {
        "label": "Singkawang",
        "value": "Singkawang",
        "rawName": "Kota Singkawang"
      },
      {
        "label": "Sintang",
        "value": "Sintang",
        "rawName": "Kabupaten Sintang"
      }
    ]
  },
  {
    "province": "Kalimantan Selatan",
    "options": [
      {
        "label": "Balangan",
        "value": "Balangan",
        "rawName": "Kabupaten Balangan"
      },
      {
        "label": "Banjar (Kabupaten)",
        "value": "Banjar",
        "rawName": "Kabupaten Banjar"
      },
      {
        "label": "Banjarbaru",
        "value": "Banjarbaru",
        "rawName": "Kota Banjarbaru"
      },
      {
        "label": "Banjarmasin",
        "value": "Banjarmasin",
        "rawName": "Kota Banjarmasin"
      },
      {
        "label": "Barito Kuala",
        "value": "Barito Kuala",
        "rawName": "Kabupaten Barito Kuala"
      },
      {
        "label": "Hulu Sungai Selatan",
        "value": "Hulu Sungai Selatan",
        "rawName": "Kabupaten Hulu Sungai Selatan"
      },
      {
        "label": "Hulu Sungai Tengah",
        "value": "Hulu Sungai Tengah",
        "rawName": "Kabupaten Hulu Sungai Tengah"
      },
      {
        "label": "Hulu Sungai Utara",
        "value": "Hulu Sungai Utara",
        "rawName": "Kabupaten Hulu Sungai Utara"
      },
      {
        "label": "Kotabaru",
        "value": "Kotabaru",
        "rawName": "Kabupaten Kotabaru"
      },
      {
        "label": "Tabalong",
        "value": "Tabalong",
        "rawName": "Kabupaten Tabalong"
      },
      {
        "label": "Tanah Bumbu",
        "value": "Tanah Bumbu",
        "rawName": "Kabupaten Tanah Bumbu"
      },
      {
        "label": "Tanah Laut",
        "value": "Tanah Laut",
        "rawName": "Kabupaten Tanah Laut"
      },
      {
        "label": "Tapin",
        "value": "Tapin",
        "rawName": "Kabupaten Tapin"
      }
    ]
  },
  {
    "province": "Kalimantan Tengah",
    "options": [
      {
        "label": "Barito Selatan",
        "value": "Barito Selatan",
        "rawName": "Kabupaten Barito Selatan"
      },
      {
        "label": "Barito Timur",
        "value": "Barito Timur",
        "rawName": "Kabupaten Barito Timur"
      },
      {
        "label": "Barito Utara",
        "value": "Barito Utara",
        "rawName": "Kabupaten Barito Utara"
      },
      {
        "label": "Gunung Mas",
        "value": "Gunung Mas",
        "rawName": "Kabupaten Gunung Mas"
      },
      {
        "label": "Kapuas",
        "value": "Kapuas",
        "rawName": "Kabupaten Kapuas"
      },
      {
        "label": "Katingan",
        "value": "Katingan",
        "rawName": "Kabupaten Katingan"
      },
      {
        "label": "Kotawaringin Barat",
        "value": "Kotawaringin Barat",
        "rawName": "Kabupaten Kotawaringin Barat"
      },
      {
        "label": "Kotawaringin Timur",
        "value": "Kotawaringin Timur",
        "rawName": "Kabupaten Kotawaringin Timur"
      },
      {
        "label": "Lamandau",
        "value": "Lamandau",
        "rawName": "Kabupaten Lamandau"
      },
      {
        "label": "Murung Raya",
        "value": "Murung Raya",
        "rawName": "Kabupaten Murung Raya"
      },
      {
        "label": "Palangka Raya",
        "value": "Palangka Raya",
        "rawName": "Kota Palangka Raya"
      },
      {
        "label": "Pulang Pisau",
        "value": "Pulang Pisau",
        "rawName": "Kabupaten Pulang Pisau"
      },
      {
        "label": "Seruyan",
        "value": "Seruyan",
        "rawName": "Kabupaten Seruyan"
      },
      {
        "label": "Sukamara",
        "value": "Sukamara",
        "rawName": "Kabupaten Sukamara"
      }
    ]
  },
  {
    "province": "Kalimantan Timur",
    "options": [
      {
        "label": "Balikpapan",
        "value": "Balikpapan",
        "rawName": "Kota Balikpapan"
      },
      {
        "label": "Berau",
        "value": "Berau",
        "rawName": "Kabupaten Berau"
      },
      {
        "label": "Bontang",
        "value": "Bontang",
        "rawName": "Kota Bontang"
      },
      {
        "label": "Kutai Barat",
        "value": "Kutai Barat",
        "rawName": "Kabupaten Kutai Barat"
      },
      {
        "label": "Kutai Kartanegara",
        "value": "Kutai Kartanegara",
        "rawName": "Kabupaten Kutai Kartanegara"
      },
      {
        "label": "Kutai Timur",
        "value": "Kutai Timur",
        "rawName": "Kabupaten Kutai Timur"
      },
      {
        "label": "Mahakam Ulu",
        "value": "Mahakam Ulu",
        "rawName": "Kabupaten Mahakam Ulu"
      },
      {
        "label": "Paser",
        "value": "Paser",
        "rawName": "Kabupaten Paser"
      },
      {
        "label": "Penajam Paser Utara",
        "value": "Penajam Paser Utara",
        "rawName": "Kabupaten Penajam Paser Utara"
      },
      {
        "label": "Samarinda",
        "value": "Samarinda",
        "rawName": "Kota Samarinda"
      }
    ]
  },
  {
    "province": "Kalimantan Utara",
    "options": [
      {
        "label": "Bulungan",
        "value": "Bulungan",
        "rawName": "Kabupaten Bulungan"
      },
      {
        "label": "Malinau",
        "value": "Malinau",
        "rawName": "Kabupaten Malinau"
      },
      {
        "label": "Nunukan",
        "value": "Nunukan",
        "rawName": "Kabupaten Nunukan"
      },
      {
        "label": "Tana Tidung",
        "value": "Tana Tidung",
        "rawName": "Kabupaten Tana Tidung"
      },
      {
        "label": "Tarakan",
        "value": "Tarakan",
        "rawName": "Kota Tarakan"
      }
    ]
  },
  {
    "province": "Kepulauan Bangka Belitung",
    "options": [
      {
        "label": "Bangka",
        "value": "Bangka",
        "rawName": "Kabupaten Bangka"
      },
      {
        "label": "Bangka Barat",
        "value": "Bangka Barat",
        "rawName": "Kabupaten Bangka Barat"
      },
      {
        "label": "Bangka Selatan",
        "value": "Bangka Selatan",
        "rawName": "Kabupaten Bangka Selatan"
      },
      {
        "label": "Bangka Tengah",
        "value": "Bangka Tengah",
        "rawName": "Kabupaten Bangka Tengah"
      },
      {
        "label": "Belitung",
        "value": "Belitung",
        "rawName": "Kabupaten Belitung"
      },
      {
        "label": "Belitung Timur",
        "value": "Belitung Timur",
        "rawName": "Kabupaten Belitung Timur"
      },
      {
        "label": "Pangkal Pinang",
        "value": "Pangkal Pinang",
        "rawName": "Kota Pangkal Pinang"
      }
    ]
  },
  {
    "province": "Kepulauan Riau",
    "options": [
      {
        "label": "Batam",
        "value": "Batam",
        "rawName": "Kota Batam"
      },
      {
        "label": "Bintan",
        "value": "Bintan",
        "rawName": "Kabupaten Bintan"
      },
      {
        "label": "Karimun",
        "value": "Karimun",
        "rawName": "Kabupaten Karimun"
      },
      {
        "label": "Kepulauan Anambas",
        "value": "Kepulauan Anambas",
        "rawName": "Kabupaten Kepulauan Anambas"
      },
      {
        "label": "Lingga",
        "value": "Lingga",
        "rawName": "Kabupaten Lingga"
      },
      {
        "label": "Natuna",
        "value": "Natuna",
        "rawName": "Kabupaten Natuna"
      },
      {
        "label": "Tanjung Pinang",
        "value": "Tanjung Pinang",
        "rawName": "Kota Tanjung Pinang"
      }
    ]
  },
  {
    "province": "Lampung",
    "options": [
      {
        "label": "Bandar Lampung",
        "value": "Bandar Lampung",
        "rawName": "Kota Bandar Lampung"
      },
      {
        "label": "Lampung Barat",
        "value": "Lampung Barat",
        "rawName": "Kabupaten Lampung Barat"
      },
      {
        "label": "Lampung Selatan",
        "value": "Lampung Selatan",
        "rawName": "Kabupaten Lampung Selatan"
      },
      {
        "label": "Lampung Tengah",
        "value": "Lampung Tengah",
        "rawName": "Kabupaten Lampung Tengah"
      },
      {
        "label": "Lampung Timur",
        "value": "Lampung Timur",
        "rawName": "Kabupaten Lampung Timur"
      },
      {
        "label": "Lampung Utara",
        "value": "Lampung Utara",
        "rawName": "Kabupaten Lampung Utara"
      },
      {
        "label": "Mesuji",
        "value": "Mesuji",
        "rawName": "Kabupaten Mesuji"
      },
      {
        "label": "Metro",
        "value": "Metro",
        "rawName": "Kota Metro"
      },
      {
        "label": "Pesawaran",
        "value": "Pesawaran",
        "rawName": "Kabupaten Pesawaran"
      },
      {
        "label": "Pringsewu",
        "value": "Pringsewu",
        "rawName": "Kabupaten Pringsewu"
      },
      {
        "label": "Tanggamus",
        "value": "Tanggamus",
        "rawName": "Kabupaten Tanggamus"
      },
      {
        "label": "Tulang Bawang",
        "value": "Tulang Bawang",
        "rawName": "Kabupaten Tulang Bawang"
      },
      {
        "label": "Tulang Bawang Barat",
        "value": "Tulang Bawang Barat",
        "rawName": "Kabupaten Tulang Bawang Barat"
      },
      {
        "label": "Way Kanan",
        "value": "Way Kanan",
        "rawName": "Kabupaten Way Kanan"
      }
    ]
  },
  {
    "province": "Maluku",
    "options": [
      {
        "label": "Ambon",
        "value": "Ambon",
        "rawName": "Kota Ambon"
      },
      {
        "label": "Buru",
        "value": "Buru",
        "rawName": "Kabupaten Buru"
      },
      {
        "label": "Buru Selatan",
        "value": "Buru Selatan",
        "rawName": "Kabupaten Buru Selatan"
      },
      {
        "label": "Kepulauan Aru",
        "value": "Kepulauan Aru",
        "rawName": "Kabupaten Kepulauan Aru"
      },
      {
        "label": "Maluku Barat Daya",
        "value": "Maluku Barat Daya",
        "rawName": "Kabupaten Maluku Barat Daya"
      },
      {
        "label": "Maluku Tengah",
        "value": "Maluku Tengah",
        "rawName": "Kabupaten Maluku Tengah"
      },
      {
        "label": "Maluku Tenggara",
        "value": "Maluku Tenggara",
        "rawName": "Kabupaten Maluku Tenggara"
      },
      {
        "label": "Maluku Tenggara Barat",
        "value": "Maluku Tenggara Barat",
        "rawName": "Kabupaten Maluku Tenggara Barat"
      },
      {
        "label": "Seram Bagian Barat",
        "value": "Seram Bagian Barat",
        "rawName": "Kabupaten Seram Bagian Barat"
      },
      {
        "label": "Seram Bagian Timur",
        "value": "Seram Bagian Timur",
        "rawName": "Kabupaten Seram Bagian Timur"
      },
      {
        "label": "Tual",
        "value": "Tual",
        "rawName": "Kota Tual"
      }
    ]
  },
  {
    "province": "Maluku Utara",
    "options": [
      {
        "label": "Halmahera Barat",
        "value": "Halmahera Barat",
        "rawName": "Kabupaten Halmahera Barat"
      },
      {
        "label": "Halmahera Selatan",
        "value": "Halmahera Selatan",
        "rawName": "Kabupaten Halmahera Selatan"
      },
      {
        "label": "Halmahera Tengah",
        "value": "Halmahera Tengah",
        "rawName": "Kabupaten Halmahera Tengah"
      },
      {
        "label": "Halmahera Timur",
        "value": "Halmahera Timur",
        "rawName": "Kabupaten Halmahera Timur"
      },
      {
        "label": "Halmahera Utara",
        "value": "Halmahera Utara",
        "rawName": "Kabupaten Halmahera Utara"
      },
      {
        "label": "Kepulauan Sula",
        "value": "Kepulauan Sula",
        "rawName": "Kabupaten Kepulauan Sula"
      },
      {
        "label": "Pulau Morotai",
        "value": "Pulau Morotai",
        "rawName": "Kabupaten Pulau Morotai"
      },
      {
        "label": "Ternate",
        "value": "Ternate",
        "rawName": "Kota Ternate"
      },
      {
        "label": "Tidore Kepulauan",
        "value": "Tidore Kepulauan",
        "rawName": "Kota Tidore Kepulauan"
      }
    ]
  },
  {
    "province": "Nusa Tenggara Barat",
    "options": [
      {
        "label": "Bima (Kabupaten)",
        "value": "Bima",
        "rawName": "Kabupaten Bima"
      },
      {
        "label": "Bima (Kota)",
        "value": "Bima",
        "rawName": "Kota Bima"
      },
      {
        "label": "Dompu",
        "value": "Dompu",
        "rawName": "Kabupaten Dompu"
      },
      {
        "label": "Lombok Barat",
        "value": "Lombok Barat",
        "rawName": "Kabupaten Lombok Barat"
      },
      {
        "label": "Lombok Tengah",
        "value": "Lombok Tengah",
        "rawName": "Kabupaten Lombok Tengah"
      },
      {
        "label": "Lombok Timur",
        "value": "Lombok Timur",
        "rawName": "Kabupaten Lombok Timur"
      },
      {
        "label": "Lombok Utara",
        "value": "Lombok Utara",
        "rawName": "Kabupaten Lombok Utara"
      },
      {
        "label": "Mataram",
        "value": "Mataram",
        "rawName": "Kota Mataram"
      },
      {
        "label": "Sumbawa",
        "value": "Sumbawa",
        "rawName": "Kabupaten Sumbawa"
      },
      {
        "label": "Sumbawa Barat",
        "value": "Sumbawa Barat",
        "rawName": "Kabupaten Sumbawa Barat"
      }
    ]
  },
  {
    "province": "Nusa Tenggara Timur",
    "options": [
      {
        "label": "Alor",
        "value": "Alor",
        "rawName": "Kabupaten Alor"
      },
      {
        "label": "Belu",
        "value": "Belu",
        "rawName": "Kabupaten Belu"
      },
      {
        "label": "Ende",
        "value": "Ende",
        "rawName": "Kabupaten Ende"
      },
      {
        "label": "Flores Timur",
        "value": "Flores Timur",
        "rawName": "Kabupaten Flores Timur"
      },
      {
        "label": "Kupang (Kabupaten)",
        "value": "Kupang",
        "rawName": "Kabupaten Kupang"
      },
      {
        "label": "Kupang (Kota)",
        "value": "Kupang",
        "rawName": "Kota Kupang"
      },
      {
        "label": "Lembata",
        "value": "Lembata",
        "rawName": "Kabupaten Lembata"
      },
      {
        "label": "Manggarai",
        "value": "Manggarai",
        "rawName": "Kabupaten Manggarai"
      },
      {
        "label": "Manggarai Barat",
        "value": "Manggarai Barat",
        "rawName": "Kabupaten Manggarai Barat"
      },
      {
        "label": "Manggarai Timur",
        "value": "Manggarai Timur",
        "rawName": "Kabupaten Manggarai Timur"
      },
      {
        "label": "Nagekeo",
        "value": "Nagekeo",
        "rawName": "Kabupaten Nagekeo"
      },
      {
        "label": "Ngada",
        "value": "Ngada",
        "rawName": "Kabupaten Ngada"
      },
      {
        "label": "Rote Ndao",
        "value": "Rote Ndao",
        "rawName": "Kabupaten Rote Ndao"
      },
      {
        "label": "Sabu Raijua",
        "value": "Sabu Raijua",
        "rawName": "Kabupaten Sabu Raijua"
      },
      {
        "label": "Sikka",
        "value": "Sikka",
        "rawName": "Kabupaten Sikka"
      },
      {
        "label": "Sumba Barat",
        "value": "Sumba Barat",
        "rawName": "Kabupaten Sumba Barat"
      },
      {
        "label": "Sumba Barat Daya",
        "value": "Sumba Barat Daya",
        "rawName": "Kabupaten Sumba Barat Daya"
      },
      {
        "label": "Sumba Tengah",
        "value": "Sumba Tengah",
        "rawName": "Kabupaten Sumba Tengah"
      },
      {
        "label": "Sumba Timur",
        "value": "Sumba Timur",
        "rawName": "Kabupaten Sumba Timur"
      },
      {
        "label": "Timor Tengah Selatan",
        "value": "Timor Tengah Selatan",
        "rawName": "Kabupaten Timor Tengah Selatan"
      },
      {
        "label": "Timor Tengah Utara",
        "value": "Timor Tengah Utara",
        "rawName": "Kabupaten Timor Tengah Utara"
      }
    ]
  },
  {
    "province": "Papua",
    "options": [
      {
        "label": "Asmat",
        "value": "Asmat",
        "rawName": "Kabupaten Asmat"
      },
      {
        "label": "Biak Numfor",
        "value": "Biak Numfor",
        "rawName": "Kabupaten Biak Numfor"
      },
      {
        "label": "Boven Digoel",
        "value": "Boven Digoel",
        "rawName": "Kabupaten Boven Digoel"
      },
      {
        "label": "Deiyai",
        "value": "Deiyai",
        "rawName": "Kabupaten Deiyai"
      },
      {
        "label": "Dogiyai",
        "value": "Dogiyai",
        "rawName": "Kabupaten Dogiyai"
      },
      {
        "label": "Intan Jaya",
        "value": "Intan Jaya",
        "rawName": "Kabupaten Intan Jaya"
      },
      {
        "label": "Jayapura (Kabupaten)",
        "value": "Jayapura",
        "rawName": "Kabupaten Jayapura"
      },
      {
        "label": "Jayapura (Kota)",
        "value": "Jayapura",
        "rawName": "Kota Jayapura"
      },
      {
        "label": "Jayawijaya",
        "value": "Jayawijaya",
        "rawName": "Kabupaten Jayawijaya"
      },
      {
        "label": "Keerom",
        "value": "Keerom",
        "rawName": "Kabupaten Keerom"
      },
      {
        "label": "Kepulauan Yapen",
        "value": "Kepulauan Yapen",
        "rawName": "Kabupaten Kepulauan Yapen"
      },
      {
        "label": "Lanny Jaya",
        "value": "Lanny Jaya",
        "rawName": "Kabupaten Lanny Jaya"
      },
      {
        "label": "Mamberamo Raya",
        "value": "Mamberamo Raya",
        "rawName": "Kabupaten Mamberamo Raya"
      },
      {
        "label": "Mamberamo Tengah",
        "value": "Mamberamo Tengah",
        "rawName": "Kabupaten Mamberamo Tengah"
      },
      {
        "label": "Mappi",
        "value": "Mappi",
        "rawName": "Kabupaten Mappi"
      },
      {
        "label": "Merauke",
        "value": "Merauke",
        "rawName": "Kabupaten Merauke"
      },
      {
        "label": "Mimika",
        "value": "Mimika",
        "rawName": "Kabupaten Mimika"
      },
      {
        "label": "Nabire",
        "value": "Nabire",
        "rawName": "Kabupaten Nabire"
      },
      {
        "label": "Nduga",
        "value": "Nduga",
        "rawName": "Kabupaten Nduga"
      },
      {
        "label": "Paniai",
        "value": "Paniai",
        "rawName": "Kabupaten Paniai"
      },
      {
        "label": "Pegunungan Bintang",
        "value": "Pegunungan Bintang",
        "rawName": "Kabupaten Pegunungan Bintang"
      },
      {
        "label": "Puncak",
        "value": "Puncak",
        "rawName": "Kabupaten Puncak"
      },
      {
        "label": "Puncak Jaya",
        "value": "Puncak Jaya",
        "rawName": "Kabupaten Puncak Jaya"
      },
      {
        "label": "Sarmi",
        "value": "Sarmi",
        "rawName": "Kabupaten Sarmi"
      },
      {
        "label": "Supiori",
        "value": "Supiori",
        "rawName": "Kabupaten Supiori"
      },
      {
        "label": "Tolikara",
        "value": "Tolikara",
        "rawName": "Kabupaten Tolikara"
      },
      {
        "label": "Waropen",
        "value": "Waropen",
        "rawName": "Kabupaten Waropen"
      },
      {
        "label": "Yahukimo",
        "value": "Yahukimo",
        "rawName": "Kabupaten Yahukimo"
      },
      {
        "label": "Yalimo",
        "value": "Yalimo",
        "rawName": "Kabupaten Yalimo"
      }
    ]
  },
  {
    "province": "Papua Barat",
    "options": [
      {
        "label": "Fakfak",
        "value": "Fakfak",
        "rawName": "Kabupaten Fakfak"
      },
      {
        "label": "Kaimana",
        "value": "Kaimana",
        "rawName": "Kabupaten Kaimana"
      },
      {
        "label": "Manokwari",
        "value": "Manokwari",
        "rawName": "Kabupaten Manokwari"
      },
      {
        "label": "Maybrat",
        "value": "Maybrat",
        "rawName": "Kabupaten Maybrat"
      },
      {
        "label": "Raja Ampat",
        "value": "Raja Ampat",
        "rawName": "Kabupaten Raja Ampat"
      },
      {
        "label": "Sorong (Kabupaten)",
        "value": "Sorong",
        "rawName": "Kabupaten Sorong"
      },
      {
        "label": "Sorong (Kota)",
        "value": "Sorong",
        "rawName": "Kota Sorong"
      },
      {
        "label": "Sorong Selatan",
        "value": "Sorong Selatan",
        "rawName": "Kabupaten Sorong Selatan"
      },
      {
        "label": "Tambrauw",
        "value": "Tambrauw",
        "rawName": "Kabupaten Tambrauw"
      },
      {
        "label": "Teluk Bintuni",
        "value": "Teluk Bintuni",
        "rawName": "Kabupaten Teluk Bintuni"
      },
      {
        "label": "Teluk Wondama",
        "value": "Teluk Wondama",
        "rawName": "Kabupaten Teluk Wondama"
      }
    ]
  },
  {
    "province": "Riau",
    "options": [
      {
        "label": "Bengkalis",
        "value": "Bengkalis",
        "rawName": "Kabupaten Bengkalis"
      },
      {
        "label": "Dumai",
        "value": "Dumai",
        "rawName": "Kota Dumai"
      },
      {
        "label": "Indragiri Hilir",
        "value": "Indragiri Hilir",
        "rawName": "Kabupaten Indragiri Hilir"
      },
      {
        "label": "Indragiri Hulu",
        "value": "Indragiri Hulu",
        "rawName": "Kabupaten Indragiri Hulu"
      },
      {
        "label": "Kampar",
        "value": "Kampar",
        "rawName": "Kabupaten Kampar"
      },
      {
        "label": "Kepulauan Meranti",
        "value": "Kepulauan Meranti",
        "rawName": "Kabupaten Kepulauan Meranti"
      },
      {
        "label": "Kuantan Singingi",
        "value": "Kuantan Singingi",
        "rawName": "Kabupaten Kuantan Singingi"
      },
      {
        "label": "Pekanbaru",
        "value": "Pekanbaru",
        "rawName": "Kota Pekanbaru"
      },
      {
        "label": "Pelalawan",
        "value": "Pelalawan",
        "rawName": "Kabupaten Pelalawan"
      },
      {
        "label": "Rokan Hilir",
        "value": "Rokan Hilir",
        "rawName": "Kabupaten Rokan Hilir"
      },
      {
        "label": "Rokan Hulu",
        "value": "Rokan Hulu",
        "rawName": "Kabupaten Rokan Hulu"
      },
      {
        "label": "Siak",
        "value": "Siak",
        "rawName": "Kabupaten Siak"
      }
    ]
  },
  {
    "province": "Sulawesi Barat",
    "options": [
      {
        "label": "Majene",
        "value": "Majene",
        "rawName": "Kabupaten Majene"
      },
      {
        "label": "Mamasa",
        "value": "Mamasa",
        "rawName": "Kabupaten Mamasa"
      },
      {
        "label": "Mamuju",
        "value": "Mamuju",
        "rawName": "Kabupaten Mamuju"
      },
      {
        "label": "Mamuju Utara",
        "value": "Mamuju Utara",
        "rawName": "Kabupaten Mamuju Utara"
      },
      {
        "label": "Polewali Mandar",
        "value": "Polewali Mandar",
        "rawName": "Kabupaten Polewali Mandar"
      }
    ]
  },
  {
    "province": "Sulawesi Selatan",
    "options": [
      {
        "label": "Bantaeng",
        "value": "Bantaeng",
        "rawName": "Kabupaten Bantaeng"
      },
      {
        "label": "Barru",
        "value": "Barru",
        "rawName": "Kabupaten Barru"
      },
      {
        "label": "Bone",
        "value": "Bone",
        "rawName": "Kabupaten Bone"
      },
      {
        "label": "Bulukumba",
        "value": "Bulukumba",
        "rawName": "Kabupaten Bulukumba"
      },
      {
        "label": "Enrekang",
        "value": "Enrekang",
        "rawName": "Kabupaten Enrekang"
      },
      {
        "label": "Gowa",
        "value": "Gowa",
        "rawName": "Kabupaten Gowa"
      },
      {
        "label": "Jeneponto",
        "value": "Jeneponto",
        "rawName": "Kabupaten Jeneponto"
      },
      {
        "label": "Kepulauan Selayar",
        "value": "Kepulauan Selayar",
        "rawName": "Kabupaten Kepulauan Selayar"
      },
      {
        "label": "Luwu",
        "value": "Luwu",
        "rawName": "Kabupaten Luwu"
      },
      {
        "label": "Luwu Timur",
        "value": "Luwu Timur",
        "rawName": "Kabupaten Luwu Timur"
      },
      {
        "label": "Luwu Utara",
        "value": "Luwu Utara",
        "rawName": "Kabupaten Luwu Utara"
      },
      {
        "label": "Makassar",
        "value": "Makassar",
        "rawName": "Kota Makassar"
      },
      {
        "label": "Maros",
        "value": "Maros",
        "rawName": "Kabupaten Maros"
      },
      {
        "label": "Palopo",
        "value": "Palopo",
        "rawName": "Kota Palopo"
      },
      {
        "label": "Pangkajene dan Kepulauan",
        "value": "Pangkajene dan Kepulauan",
        "rawName": "Kabupaten Pangkajene dan Kepulauan"
      },
      {
        "label": "Parepare",
        "value": "Parepare",
        "rawName": "Kota Parepare"
      },
      {
        "label": "Pinrang",
        "value": "Pinrang",
        "rawName": "Kabupaten Pinrang"
      },
      {
        "label": "Sidenreng Rappang",
        "value": "Sidenreng Rappang",
        "rawName": "Kabupaten Sidenreng Rappang"
      },
      {
        "label": "Sinjai",
        "value": "Sinjai",
        "rawName": "Kabupaten Sinjai"
      },
      {
        "label": "Soppeng",
        "value": "Soppeng",
        "rawName": "Kabupaten Soppeng"
      },
      {
        "label": "Takalar",
        "value": "Takalar",
        "rawName": "Kabupaten Takalar"
      },
      {
        "label": "Tana Toraja",
        "value": "Tana Toraja",
        "rawName": "Kabupaten Tana Toraja"
      },
      {
        "label": "Toraja Utara",
        "value": "Toraja Utara",
        "rawName": "Kabupaten Toraja Utara"
      },
      {
        "label": "Wajo",
        "value": "Wajo",
        "rawName": "Kabupaten Wajo"
      }
    ]
  },
  {
    "province": "Sulawesi Tengah",
    "options": [
      {
        "label": "Banggai",
        "value": "Banggai",
        "rawName": "Kabupaten Banggai"
      },
      {
        "label": "Banggai Kepulauan",
        "value": "Banggai Kepulauan",
        "rawName": "Kabupaten Banggai Kepulauan"
      },
      {
        "label": "Buol",
        "value": "Buol",
        "rawName": "Kabupaten Buol"
      },
      {
        "label": "Donggala",
        "value": "Donggala",
        "rawName": "Kabupaten Donggala"
      },
      {
        "label": "Morowali",
        "value": "Morowali",
        "rawName": "Kabupaten Morowali"
      },
      {
        "label": "Palu",
        "value": "Palu",
        "rawName": "Kota Palu"
      },
      {
        "label": "Parigi Moutong",
        "value": "Parigi Moutong",
        "rawName": "Kabupaten Parigi Moutong"
      },
      {
        "label": "Poso",
        "value": "Poso",
        "rawName": "Kabupaten Poso"
      },
      {
        "label": "Sigi",
        "value": "Sigi",
        "rawName": "Kabupaten Sigi"
      },
      {
        "label": "Tojo Una-Una",
        "value": "Tojo Una-Una",
        "rawName": "Kabupaten Tojo Una-Una"
      },
      {
        "label": "Toli-Toli",
        "value": "Toli-Toli",
        "rawName": "Kabupaten Toli-Toli"
      }
    ]
  },
  {
    "province": "Sulawesi Tenggara",
    "options": [
      {
        "label": "Bau-Bau",
        "value": "Bau-Bau",
        "rawName": "Kota Bau-Bau"
      },
      {
        "label": "Bombana",
        "value": "Bombana",
        "rawName": "Kabupaten Bombana"
      },
      {
        "label": "Buton",
        "value": "Buton",
        "rawName": "Kabupaten Buton"
      },
      {
        "label": "Buton Utara",
        "value": "Buton Utara",
        "rawName": "Kabupaten Buton Utara"
      },
      {
        "label": "Kendari",
        "value": "Kendari",
        "rawName": "Kota Kendari"
      },
      {
        "label": "Kolaka",
        "value": "Kolaka",
        "rawName": "Kabupaten Kolaka"
      },
      {
        "label": "Kolaka Utara",
        "value": "Kolaka Utara",
        "rawName": "Kabupaten Kolaka Utara"
      },
      {
        "label": "Konawe",
        "value": "Konawe",
        "rawName": "Kabupaten Konawe"
      },
      {
        "label": "Konawe Selatan",
        "value": "Konawe Selatan",
        "rawName": "Kabupaten Konawe Selatan"
      },
      {
        "label": "Konawe Utara",
        "value": "Konawe Utara",
        "rawName": "Kabupaten Konawe Utara"
      },
      {
        "label": "Muna",
        "value": "Muna",
        "rawName": "Kabupaten Muna"
      },
      {
        "label": "Wakatobi",
        "value": "Wakatobi",
        "rawName": "Kabupaten Wakatobi"
      }
    ]
  },
  {
    "province": "Sulawesi Utara",
    "options": [
      {
        "label": "Bitung",
        "value": "Bitung",
        "rawName": "Kota Bitung"
      },
      {
        "label": "Bolaang Mongondow",
        "value": "Bolaang Mongondow",
        "rawName": "Kabupaten Bolaang Mongondow"
      },
      {
        "label": "Bolaang Mongondow Selatan",
        "value": "Bolaang Mongondow Selatan",
        "rawName": "Kabupaten Bolaang Mongondow Selatan"
      },
      {
        "label": "Bolaang Mongondow Timur",
        "value": "Bolaang Mongondow Timur",
        "rawName": "Kabupaten Bolaang Mongondow Timur"
      },
      {
        "label": "Bolaang Mongondow Utara",
        "value": "Bolaang Mongondow Utara",
        "rawName": "Kabupaten Bolaang Mongondow Utara"
      },
      {
        "label": "Kepulauan Sangihe",
        "value": "Kepulauan Sangihe",
        "rawName": "Kabupaten Kepulauan Sangihe"
      },
      {
        "label": "Kepulauan Siau Tagulandang Biaro",
        "value": "Kepulauan Siau Tagulandang Biaro",
        "rawName": "Kabupaten Kepulauan Siau Tagulandang Biaro"
      },
      {
        "label": "Kepulauan Talaud",
        "value": "Kepulauan Talaud",
        "rawName": "Kabupaten Kepulauan Talaud"
      },
      {
        "label": "Kotamobagu",
        "value": "Kotamobagu",
        "rawName": "Kota Kotamobagu"
      },
      {
        "label": "Manado",
        "value": "Manado",
        "rawName": "Kota Manado"
      },
      {
        "label": "Minahasa",
        "value": "Minahasa",
        "rawName": "Kabupaten Minahasa"
      },
      {
        "label": "Minahasa Selatan",
        "value": "Minahasa Selatan",
        "rawName": "Kabupaten Minahasa Selatan"
      },
      {
        "label": "Minahasa Tenggara",
        "value": "Minahasa Tenggara",
        "rawName": "Kabupaten Minahasa Tenggara"
      },
      {
        "label": "Minahasa Utara",
        "value": "Minahasa Utara",
        "rawName": "Kabupaten Minahasa Utara"
      },
      {
        "label": "Tomohon",
        "value": "Tomohon",
        "rawName": "Kota Tomohon"
      }
    ]
  },
  {
    "province": "Sumatera Barat",
    "options": [
      {
        "label": "Agam",
        "value": "Agam",
        "rawName": "Kabupaten Agam"
      },
      {
        "label": "Bukittinggi",
        "value": "Bukittinggi",
        "rawName": "Kota Bukittinggi"
      },
      {
        "label": "Dharmasraya",
        "value": "Dharmasraya",
        "rawName": "Kabupaten Dharmasraya"
      },
      {
        "label": "Kepulauan Mentawai",
        "value": "Kepulauan Mentawai",
        "rawName": "Kabupaten Kepulauan Mentawai"
      },
      {
        "label": "Lima Puluh Kota",
        "value": "Lima Puluh Kota",
        "rawName": "Kabupaten Lima Puluh Kota"
      },
      {
        "label": "Padang",
        "value": "Padang",
        "rawName": "Kota Padang"
      },
      {
        "label": "Padang Pariaman",
        "value": "Padang Pariaman",
        "rawName": "Kabupaten Padang Pariaman"
      },
      {
        "label": "Padangpanjang",
        "value": "Padangpanjang",
        "rawName": "Kota Padangpanjang"
      },
      {
        "label": "Pariaman",
        "value": "Pariaman",
        "rawName": "Kota Pariaman"
      },
      {
        "label": "Pasaman",
        "value": "Pasaman",
        "rawName": "Kabupaten Pasaman"
      },
      {
        "label": "Pasaman Barat",
        "value": "Pasaman Barat",
        "rawName": "Kabupaten Pasaman Barat"
      },
      {
        "label": "Payakumbuh",
        "value": "Payakumbuh",
        "rawName": "Kota Payakumbuh"
      },
      {
        "label": "Pesisir Selatan",
        "value": "Pesisir Selatan",
        "rawName": "Kabupaten Pesisir Selatan"
      },
      {
        "label": "Sawahlunto",
        "value": "Sawahlunto",
        "rawName": "Kota Sawahlunto"
      },
      {
        "label": "Sijunjung",
        "value": "Sijunjung",
        "rawName": "Kabupaten Sijunjung"
      },
      {
        "label": "Solok (Kabupaten)",
        "value": "Solok",
        "rawName": "Kabupaten Solok"
      },
      {
        "label": "Solok (Kota)",
        "value": "Solok",
        "rawName": "Kota Solok"
      },
      {
        "label": "Solok Selatan",
        "value": "Solok Selatan",
        "rawName": "Kabupaten Solok Selatan"
      },
      {
        "label": "Tanah Datar",
        "value": "Tanah Datar",
        "rawName": "Kabupaten Tanah Datar"
      }
    ]
  },
  {
    "province": "Sumatera Selatan",
    "options": [
      {
        "label": "Banyuasin",
        "value": "Banyuasin",
        "rawName": "Kabupaten Banyuasin"
      },
      {
        "label": "Empat Lawang",
        "value": "Empat Lawang",
        "rawName": "Kabupaten Empat Lawang"
      },
      {
        "label": "Lahat",
        "value": "Lahat",
        "rawName": "Kabupaten Lahat"
      },
      {
        "label": "Lubuklinggau",
        "value": "Lubuklinggau",
        "rawName": "Kota Lubuklinggau"
      },
      {
        "label": "Muara Enim",
        "value": "Muara Enim",
        "rawName": "Kabupaten Muara Enim"
      },
      {
        "label": "Musi Banyuasin",
        "value": "Musi Banyuasin",
        "rawName": "Kabupaten Musi Banyuasin"
      },
      {
        "label": "Musi Rawas",
        "value": "Musi Rawas",
        "rawName": "Kabupaten Musi Rawas"
      },
      {
        "label": "Ogan Ilir",
        "value": "Ogan Ilir",
        "rawName": "Kabupaten Ogan Ilir"
      },
      {
        "label": "Ogan Komering Ilir",
        "value": "Ogan Komering Ilir",
        "rawName": "Kabupaten Ogan Komering Ilir"
      },
      {
        "label": "Ogan Komering Ulu",
        "value": "Ogan Komering Ulu",
        "rawName": "Kabupaten Ogan Komering Ulu"
      },
      {
        "label": "Ogan Komering Ulu Selatan",
        "value": "Ogan Komering Ulu Selatan",
        "rawName": "Kabupaten Ogan Komering Ulu Selatan"
      },
      {
        "label": "Ogan Komering Ulu Timur",
        "value": "Ogan Komering Ulu Timur",
        "rawName": "Kabupaten Ogan Komering Ulu Timur"
      },
      {
        "label": "Pagar Alam",
        "value": "Pagar Alam",
        "rawName": "Kota Pagar Alam"
      },
      {
        "label": "Palembang",
        "value": "Palembang",
        "rawName": "Kota Palembang"
      },
      {
        "label": "Prabumulih",
        "value": "Prabumulih",
        "rawName": "Kota Prabumulih"
      }
    ]
  },
  {
    "province": "Sumatera Utara",
    "options": [
      {
        "label": "Asahan",
        "value": "Asahan",
        "rawName": "Kabupaten Asahan"
      },
      {
        "label": "Batubara",
        "value": "Batubara",
        "rawName": "Kabupaten Batubara"
      },
      {
        "label": "Binjai",
        "value": "Binjai",
        "rawName": "Kota Binjai"
      },
      {
        "label": "Dairi",
        "value": "Dairi",
        "rawName": "Kabupaten Dairi"
      },
      {
        "label": "Deli Serdang",
        "value": "Deli Serdang",
        "rawName": "Kabupaten Deli Serdang"
      },
      {
        "label": "Gunungsitoli",
        "value": "Gunungsitoli",
        "rawName": "Kota Gunungsitoli"
      },
      {
        "label": "Humbang Hasundutan",
        "value": "Humbang Hasundutan",
        "rawName": "Kabupaten Humbang Hasundutan"
      },
      {
        "label": "Karo",
        "value": "Karo",
        "rawName": "Kabupaten Karo"
      },
      {
        "label": "Labuhanbatu",
        "value": "Labuhanbatu",
        "rawName": "Kabupaten Labuhanbatu"
      },
      {
        "label": "Labuhanbatu Selatan",
        "value": "Labuhanbatu Selatan",
        "rawName": "Kabupaten Labuhanbatu Selatan"
      },
      {
        "label": "Labuhanbatu Utara",
        "value": "Labuhanbatu Utara",
        "rawName": "Kabupaten Labuhanbatu Utara"
      },
      {
        "label": "Langkat",
        "value": "Langkat",
        "rawName": "Kabupaten Langkat"
      },
      {
        "label": "Mandailing Natal",
        "value": "Mandailing Natal",
        "rawName": "Kabupaten Mandailing Natal"
      },
      {
        "label": "Medan",
        "value": "Medan",
        "rawName": "Kota Medan"
      },
      {
        "label": "Nias",
        "value": "Nias",
        "rawName": "Kabupaten Nias"
      },
      {
        "label": "Nias Barat",
        "value": "Nias Barat",
        "rawName": "Kabupaten Nias Barat"
      },
      {
        "label": "Nias Selatan",
        "value": "Nias Selatan",
        "rawName": "Kabupaten Nias Selatan"
      },
      {
        "label": "Nias Utara",
        "value": "Nias Utara",
        "rawName": "Kabupaten Nias Utara"
      },
      {
        "label": "Padang Lawas",
        "value": "Padang Lawas",
        "rawName": "Kabupaten Padang Lawas"
      },
      {
        "label": "Padang Lawas Utara",
        "value": "Padang Lawas Utara",
        "rawName": "Kabupaten Padang Lawas Utara"
      },
      {
        "label": "Padangsidempuan",
        "value": "Padangsidempuan",
        "rawName": "Kota Padangsidempuan"
      },
      {
        "label": "Pakpak Bharat",
        "value": "Pakpak Bharat",
        "rawName": "Kabupaten Pakpak Bharat"
      },
      {
        "label": "Pematangsiantar",
        "value": "Pematangsiantar",
        "rawName": "Kota Pematangsiantar"
      },
      {
        "label": "Samosir",
        "value": "Samosir",
        "rawName": "Kabupaten Samosir"
      },
      {
        "label": "Serdang Bedagai",
        "value": "Serdang Bedagai",
        "rawName": "Kabupaten Serdang Bedagai"
      },
      {
        "label": "Sibolga",
        "value": "Sibolga",
        "rawName": "Kota Sibolga"
      },
      {
        "label": "Simalungun",
        "value": "Simalungun",
        "rawName": "Kabupaten Simalungun"
      },
      {
        "label": "Tanjungbalai",
        "value": "Tanjungbalai",
        "rawName": "Kota Tanjungbalai"
      },
      {
        "label": "Tapanuli Selatan",
        "value": "Tapanuli Selatan",
        "rawName": "Kabupaten Tapanuli Selatan"
      },
      {
        "label": "Tapanuli Tengah",
        "value": "Tapanuli Tengah",
        "rawName": "Kabupaten Tapanuli Tengah"
      },
      {
        "label": "Tapanuli Utara",
        "value": "Tapanuli Utara",
        "rawName": "Kabupaten Tapanuli Utara"
      },
      {
        "label": "Tebing Tinggi",
        "value": "Tebing Tinggi",
        "rawName": "Kota Tebing Tinggi"
      },
      {
        "label": "Toba Samosir",
        "value": "Toba Samosir",
        "rawName": "Kabupaten Toba Samosir"
      }
    ]
  },
  {
    "province": "Yogyakarta",
    "options": [
      {
        "label": "Bantul",
        "value": "Bantul",
        "rawName": "Kabupaten Bantul"
      },
      {
        "label": "Gunung Kidul",
        "value": "Gunung Kidul",
        "rawName": "Kabupaten Gunung Kidul"
      },
      {
        "label": "Kulon Progo",
        "value": "Kulon Progo",
        "rawName": "Kabupaten Kulon Progo"
      },
      {
        "label": "Sleman",
        "value": "Sleman",
        "rawName": "Kabupaten Sleman"
      },
      {
        "label": "Yogyakarta",
        "value": "Yogyakarta",
        "rawName": "Kota Yogyakarta"
      }
    ]
  }
];

export default indonesiaLocationOptions;
