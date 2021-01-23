import rp from "request-promise";
import cheerio from "cheerio";

export const HomepageApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);

      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data homepageapi");
    });
};

export const ProfilepageApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/profile?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data profil page");
    });
};

export const InformasiApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/informasi?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data informasi page");
    });
};

export const InformasiUmumApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/umum?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data informasi page");
    });
};

export const InformasiWajibApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/wajib?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data informasi page");
    });
};

export const RegulasiApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/regulasi?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data regulasi page");
    });
};

export const FaqApi = async (callback: any) => {
  await rp("https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/faq?bypass=1")
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data faq page");
    });
};

export const ChartsApi = async () =>
  await fetch("https://e.plansys.co/ppid/api.php/records/data");
