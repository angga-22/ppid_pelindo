import rp from "request-promise";
import cheerio from "cheerio";

export const HomepageApi = async (callback: any) => {
  await rp(
    "https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home"
  )
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data");
    });
};

export const ProfilepageApi = async (callback: any) => {
  await rp(
    "https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/profile"
  )
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data");
    });
};

export const InformasiApi = async (callback: any) => {
  await rp(
    "https://cors-anywhere.herokuapp.com/https://e-ppid.pelindo.co.id/home/informasi"
  )
    .then(function (html) {
      let $ = cheerio.load(html);
      callback($);
    })
    .catch(function (err) {
      console.log("failed to get data");
    });
};

export const ChartsApi = async () =>
  await fetch("https://e.plansys.co/ppid/api.php/records/data");
