import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuestionsPage = () => (
  <Layout>
    <SEO title="Informasi" />
    <h1>Informasi</h1>
    <h4>
      1. Apa yang dilakukan pemerintah Indonesia untuk menangani pandemi
      COVID-19 yang mengancam stabilitas perekonomian negara?
    </h4>
    <p>
      Pemerintah Indonesia melaksanakan Program{" "}
      <b>Pemulihan Ekonomi Nasional</b> (atau disingkat menjadi <b>PEN</b>).
      <br /> <br />
      Program ini merupakan rangkaian kegiatan untuk memulihkan perekonomian
      nasional dengan tujuan mempercepat penanganan pandemi COVID-19.
      <br /> <br />
      Salah satu kegiatan dari program PEN adalah{" "}
      <b>pemberian subsidi bunga/margin</b> untuk pembiayaan{" "}
      <b>Usaha Mikro, Kecil</b> dan <b>Menengah</b> (disingkat <b>UMKM</b>)
      sesuai dengan{" "}
      <b>Peraturan Menteri Keuangan Republik Indonesia Nomor 85/PMK.05/2020.</b>
    </p>
    <h4>
      2. Yang dimaksud dengan Usaha Mikro, Kecil dan Menengah (UMKM) itu apa ya?
    </h4>
    <p>
      Menurut UU Nomor 20 Tahun 2008 tentang Usaha Mikro, Kecil dan Menengah:
    </p>
    <ol>
      <li>
        <b>Usaha Mikro</b> adalah usaha produktif <i>milik perorangan</i>{" "}
        dan/atau <i>badan usaha perorangan</i> yang:
        <ol type="a">
          <li>
            Memiliki <i>kekayaan bersih</i> paling banyak{" "}
            <b>Rp. 50.000.000,00</b> tidak termasuk tanah dan bangungan tempat
            usaha; atau
          </li>
          <li>
            Memiliki <i>hasil penjualan tahunan</i> paling banyak{" "}
            <b>Rp. 300.000.000,00</b>.
          </li>
        </ol>
      </li>
      <li>
        <b>Usaha Kecil</b> adalah usaha ekonomi produktif berdiri sendiri , yang
        dilakukan orang perorangan atau badan usaha yang{" "}
        <b>bukan merupakan cabang perusahaan</b> yang dimiliki, dikuasai, atau
        menjadi bagian baik maupun tidak langsung dari Usaha Menengah atau Usaha
        Besar yang:
        <ol type="a">
          <li>
            Memiliki <i>kekayaan bersih</i> lebih dari <b>Rp. 50.000.000,00</b>{" "}
            sampai dengan paling banyak <b>Rp. 500.000.000,00</b> tidak termasuk
            tanah dan bangunan tempat usaha; atau
          </li>
          <li>
            Memiliki <i>hasil penjualan tahunan</i> lebih dari{" "}
            <b>Rp. 300.000.000,00</b> sampai dengan paling banyak{" "}
            <b>Rp. 2.500.000.000,00</b>.
          </li>
        </ol>
      </li>
      <li>
        <b>Usaha Menengah</b> adalah usaha ekonomi produktif yang berdiri
        sendiri, yang dilakukan oleh orang perorangan atau badan usaha yang
        <b>bukan merupakan cabang perusahaan</b> yang dimiliki, dikuasai, atau
        menjadi bagian baik maupun tidak langsung dari Usaha Kecil atau Usaha
        Besar yang:
        <ol type="a">
          <li>
            Memiliki <i>kekayaan bersih</i> lebih dari <b>Rp. 500.000.000,00</b>{" "}
            sampai dengan paling banyak <b>Rp. 10.000.000.000,00</b> tidak
            termasuk tanah dan bangunan tempat usaha; atau
          </li>
          <li>
            Memiliki <i>hasil penjualan tahunan</i> lebih dari{" "}
            <b>Rp. 2.500.000.000,00</b> sampai dengan paling banyak{" "}
            <b>Rp. 50.000.000.000,00</b>.
          </li>
        </ol>
      </li>
    </ol>
    <h4>3. Bagaimana dengan subsidi bunga/margin? Maksudnya apa?</h4>
    <p>
      <b>Subsidi Bunga</b> adalah bagian bunga yang menjadi beban Pemerintah
      sebesar selisih antara tingkat bunga yang diterima oleh Penyalur
      Pembiayaan (lembaga perbankan, perusahaan pembiayaan, atau lembaga
      penyalur program kredit pemerintah) dengan tingkat bunga yang dibebankan
      kepada Debitur (usaha yang menerima pembiayaan).
      <br /> <br />
      <b>Subsidi Margin</b> adalah bagian margin yang menjadi beban Pemerintah
      sebesar selisih antara margin yang diterima oleh Penyalur Pembiayaan
      dengan margin yang dibebankan kepada Debitur dalam skema pembiayaan
      syariah.
      <br /> <br />
    </p>
    <h4>
      4. Ini uangnya dari mana ya? Dan bagaimana uang ini didistribusikan kepada
      kami?
    </h4>
    <p>
      Anggaran Subsidi Bunga/Margin berasal dari{" "}
      <b>Anggaran Pendapatan dan Belanja Negara</b> (atau disingkat menjadi{" "}
      <b>APBN</b>).
    </p>
    <p>
      <i>Mechanism Process Here</i>
    </p>
    <h4>5. Apa saja sih kriterianya?</h4>
    <p>Debitur harus memenuhi kriteria:</p>
    <ol>
      <li>
        Memiliki Baki Debet (besaran sisa pokok pinjaman pada waktu tertentu di
        luar bunga dan denda ataupun biaya penalti yang harus dibayarkan)
        Pembiayaan sampai dengan 29 Februari 2020.
      </li>
      <li>
        Tidak termasuk dalam Daftar Hitam Nasional untuk plafon Pembiayaan di
        atas Rp. 50.000.000,00
      </li>
      <li>
        Memiliki kategori performing loan lancar (kolektibilitas 1 atau 2)
        dihitung per 29 Februari 2020; dan
      </li>
      <li>
        Memiliki Nomor Pokok Wajib Pajak (NPWP) atau mendaftar untuk NPWP.
      </li>
    </ol>
    <h4>6. Sebesar apa pembiayaan yang bisa diberikan kepada usaha saya?</h4>
    <p>
      Subsidi Bunga/Margin diberikan kepada Debitur UMKM dengan Plafon (batas
      nilai maksimum) Pembiayaan paling tinggi <b>Rp. 10.000.000.000,00</b>{" "}
      (sepuluh miliar).
      <br />
      <br />
      Pemberian subsidi ini bertujuan untuk melindungi, mempertahankan, dan
      meningkatkan ekonomi Debitur di masa pandemi COVID-19.
      <br />
      <br />
      Subsidi Bunga/Margin diberikan dalam jangka waktu paling lama 6 bulan, dan
      hanya akan berlaku dari tanggal 1 Mei 2020 hingga 31 Desember 2020.
      <br />
      <br />
      Untuk Debitur dari <b>Lembaga Penyalur Program Kredit Pemerintah</b>:
    </p>
    <table>
      <tbody>
        <tr>
          <th>Plafon Kredit/Pembiayaan</th>
          <th>Besar subsidi bunga/margin</th>
        </tr>
        <tr>
          <td>≤20 Juta Rupiah</td>
          <td>≤25% selama 6 bulan</td>
        </tr>
        <tr>
          <td>{">"}10 Juta Rupiah & ≤ 500 Juta Rupiah</td>
          <td>6% selama 3 bulan pertama, 3% selama 3 bulan seterusnya</td>
        </tr>
        <tr>
          <td>{">"}500 Juta Rupiah & ≤ 10 Miliar Rupiah</td>
          <td>3% selama 3 bulan pertama, 2% selama 3 bulan seterusnya</td>
        </tr>
      </tbody>
    </table>
    <p>
      Untuk Debitur dari <b>Perbankan atau Perusahaan Pembiayaan</b>:
    </p>
    <table>
      <tbody>
        <tr>
          <th>Plafon Kredit/Pembiayaan</th>
          <th>Besar subsidi bunga/margin</th>
        </tr>
        <tr>
          <td>≤500 Juta Rupiah</td>
          <td>6% selama 3 bulan pertama, 3% selama 3 bulan seterusnya</td>
        </tr>
        <tr>
          <td>{">"}500 Juta Rupiah, ≤10 Miliar Rupiah</td>
          <td>3% selama 3 bulan pertama, 2% selama 3 bulan seterusnya</td>
        </tr>
      </tbody>
    </table>
    <p>
      Besar subsidi yang tertera di dalam tabel-tabel di atas adalah efektif per
      tahun atau disesuaikan dengan suku bunga/margin flat/anuitas yang setara.
      <br />
      <br />
      Perhitungan subsidi bunga/margin dihitung dengan formula sebagai berikut:
    </p>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
      async
    ></script>
    <div align="center">
      <img
        src="https://latex.codecogs.com/gif.latex?\frac{Besaran\&space;Subsidi\&space;*&space;Baki\&space;Debet\&space;*&space;Hari\&space;Bunga\&space;atau\&space;Hari\&space;Margin}{360}"
        title="\frac{Besaran\ Subsidi\ * Baki\ Debet\ * Hari\ Bunga\ atau\ Hari\ Margin}{360}"
      />
    </div>
    <h4>
      7. Wah, bermanfaat sekali! Bagaimana cara mendaftarkan usaha saya untuk
      subsidi ini?
    </h4>
    <p>
      Setelah Peraturan Menteri Keuangan Republik Indonesia Nomor 85/PMK.05/2020
      menggantikan Peraturan Menteri Keuangan Republik Indonesia Nomor
      65/PMK.05/2020, kini Debitur tidak perlu lagi melakukan registrasi untuk
      mendapatkan subsidi bunga.
      <br />
      <br />
      Debitur secara otomatis ikut dalam program ini selama memenuhi persyaratan
      yang diatur dalam PMK 85. Penyalur Pembiayaan akan memberitahukan Debitur
      yang berhak menerima subsidi bunga/margin selama Debitur memenuhi kriteria
      sebagaimana yang dijelaskan di atas.
    </p>
    <div align="center">
      informasi berdasarkan{" "}
      <Link to="https://peraturan.bpk.go.id/Home/Download/132790/85_PMK.05_2020.pdf">
        PMK RI Nomor 85/PMK.05/2020
      </Link>
    </div>
  </Layout>
)

export default QuestionsPage
