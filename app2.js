const fs = require("fs");

const { google } = require("googleapis");
const fakeGoogleId = "1kmw2OQTgs8XRwcY-JA52__RfE8DSe-Qn_0yzUJzfH50";
const trueGoogleId = "1Opg9drKG_9QmJ-wvEKDev6812kcknMfkkbvFzQRQdG8";

const start = async () => {
  const clientEmail =
    "serviceilka@plated-mantis-376709.iam.gserviceaccount.com";
  const privateKey =
    "-----BEGIN PRIVATE KEY----- -----END PRIVATE KEY-----";
  const googleSheetId = trueGoogleId;
  const googleSheetPage = "Ключиавто";
  const charList = {
      Dkilka: ["dk",3],
      Palilka: ["pal",3],
      Drilka: ["dru",3],
      Dhilka: ["dh",3],
      Drcomandante: ["drak",4],
      Zuzya: ["dru",4],
      Waitformee: ["pri",4],
      Needmorebeer: ["sham",4],
      Myauldk: ["dk",5],
      Greedsora: ["dh",5],
      Myauls: ["lock",5],
      Floiopi: ["mage",6],
      Juidieo: ["sham",6],
      Nikllous: ["war",6],
  }

  // authenticate the service account
  const googleAuth = new google.auth.JWT(
    clientEmail,
    null,
    privateKey.replace(/\\n/gm, "\n"),
    "https://www.googleapis.com/auth/spreadsheets"
  );

  const path =
    "C:\\World of Warcraft\\_retail_\\WTF\\Account\\1171541494#1\\SavedVariables\\AstralKeys.lua";

  // fs.watch(path, async (event) => {
  //   if (event === "change") {
  const data = fs.readFileSync(path, {
    encoding: "utf8",
    flag: "r",
  });
  const resVal = data.match(/(?<=\["key_level"\]\s=\s)\d+/g);
  // const resKey =data.match(/(?<=[a-zA-Z"-]+,\s+\["dungeon_id"\]\s=\s)\d+/g) || [];
  const resKey = data.match(/(?<=\["dungeon_id"\]\s=\s)\d+/g) || [];
  const nick = data.match(/(?<=\["unit"\]\s=\s\")[a-zA-Z]+/g);
  console.log(resKey);
  console.log(nick);
  await clearSheet();
  let keyChInd = ''
  resKey.map(async (x, i) => 
    {
      setTimeout(async() => {
        switch (+x) {
          case 500:
            // rookery
            keyChInd = '!'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 501:
            // stonevault
            keyChInd = '!E'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 502:
            // city of threads
            keyChInd = '!D'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 503:
            // ara-kara
            keyChInd = '!C'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 504:
            // darkflame
            keyChInd = '!'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 505:
            // dawnbreaker
            keyChInd = '!B'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 506:
            // cinderbrew
            keyChInd = '!'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 507:
            // batol
            keyChInd = '!I'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 353:
            // siege
            keyChInd = '!H'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 375:
            // mists
            keyChInd = '!G'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
          case 376:
            // necrotic
            keyChInd = '!F'
            if(charList[nick[i]] != undefined){
              const range = keyChInd+charList[nick[i]][1];
              await updateSheet(range, `${resVal[i]}${charList[nick[i]][0]}`);
            }
            break;
        }
      }, 1500*i);

  });
  // }
  // });

  async function readSheet(range) {
    try {
      // google sheet instance
      const sheetInstance = await google.sheets({
        version: "v4",
        auth: googleAuth,
      });
      // read data in the range in a sheet
      const infoObjectFromSheet = await sheetInstance.spreadsheets.values.get({
        auth: googleAuth,
        spreadsheetId: googleSheetId,
        range: `${googleSheetPage}${range}`,
      });

      const valuesFromSheet = infoObjectFromSheet.data.values;
      return valuesFromSheet == undefined ? "" : valuesFromSheet[0][0];
    } catch (err) {
      console.log("readSheet func() error", err);
    }
  }

  async function updateSheet(range, key) {
    try {
      // google sheet instance
      const sheetInstance = await google.sheets({
        version: "v4",
        auth: googleAuth,
      });

      const oldValue = await readSheet(range);
      const updateToGsheet = [[oldValue + key]];
      // update data in the range
      await sheetInstance.spreadsheets.values.update({
        auth: googleAuth,
        spreadsheetId: googleSheetId,
        range: `${googleSheetPage}${range}`,
        valueInputOption: "RAW",
        resource: {
          values: updateToGsheet,
        },
      });
      // console.log(`updated ${key} to ${range}`);
    } catch (err) {
      console.log("updateSheet func() error", err);
    }
  }

  async function clearSheet(range) {
    try {
      // google sheet instance
      const sheetInstance = await google.sheets({
        version: "v4",
        auth: googleAuth,
      });
      // clear data in the range
      await sheetInstance.spreadsheets.values.clear({
        auth: googleAuth,
        spreadsheetId: googleSheetId,
        range: `${googleSheetPage}!B3:I6`,
      });
      console.log("cleared");
      // '!B3:I6'
    } catch (err) {
      console.log("clearSheet func() error", err);
    }
  }

};

start();
