const fs = require("fs");

const { google } = require("googleapis");
const fakeGoogleId = "1kmw2OQTgs8XRwcY-JA52__RfE8DSe-Qn_0yzUJzfH50";
const trueGoogleId = "1Opg9drKG_9QmJ-wvEKDev6812kcknMfkkbvFzQRQdG8";

const start = async () => {
  const clientEmail =
    "serviceilka@plated-mantis-376709.iam.gserviceaccount.com";
  const privateKey =
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDyT1+yIR/J6lCY\n7MX7/lnSohtkHgWvmJvYQ4Ugz6dGHZ7iT98iVfm8sFzndpYMImEAm8wWIhiCdeAr\n0jb+coRpL0k2vfmMrnPDbQPvQBXRD60h7uxeDqy8Crs+1zwD5HS1k8Cd561tVWgu\nHxX/fTnRTFV0Ooy/XX6Cf+aGiTGtRBLN97CCHlQ2Echo76hAEVrE6GpDmLR6DAyL\nUH244juweb5qNH3DkwdTn5q2H1dCJTFmnpa+4vqtcPCxdQUFuTvIC3xYgkSA1xcu\nRpjbakgC7THBlb7UTYIFHnqNK8HTbPMgaj6tgN4EJvzN3bvMAO5H/R3I1ARcAxNB\npBh86MehAgMBAAECggEAEJpMsc1gOrsR47CRjkcqy2ptGwqNlC8OOp7Bv/JKgVzl\nNpeHb/hZIMsqyndPJ6yxXdPPA5M5f7Lo9ce1GfEpznU9fIE+2JtZdkIBe4K2G/mJ\ngOI4kudJgabwlokz5QZh0tE5aPhnYy7vcP2TScrAS+2Bi3G5lCEpWnK+DmjXHQqD\nZli7Hywquypiw0ylB4FmwET0l48Lrg0M3hHZWzU79hKsQZxp6bvMWCMOKUMEUIUS\n2d70JUvxp9hqZhK6rLuSrTANjZsXsmQpN61ZrzF6CpwhZxKW7rmneZQMP/BPtqHE\nZh9HZEa4TQLLv4UAob+pZLTTI+aKmQhu2i4CvVSoUwKBgQD9mfvZ2+LOJzVQHcPt\nMJ83iFwAhSXwZys1dE6JVVQ50EuxcY7ye/2yfffzAxCWcWHOrPXCYc3ZOz1gzubV\nkit5UVzSp26fv3bymKVN4TKkOq27/DhCNjZQdrQy7lkbtBWoUADW8kiqPmrVso0i\nmTvTIF1C7A2k3fg9l8+fzkU2wwKBgQD0mg0kgD92eb8zIYCZRhfZUHYhXrGE/M12\nMiG2h9YAF0WMV51GvwFx6bpWTPjxW1SfwbzIJjwKzAPyBuuGG4u9sD+fpiayJ0ml\nhSaICCWciX/Z7LO2hV9FNhP6QnbiRTmIGvg9tl4NTndT7S4ZZdVfxd6hf43vGCpA\n1Zelq+iJywKBgQDL3JvrjuptBHHD/JmCs4JaNuCWfnJ4JcdDSkLT/WceroYal4ns\n/aV8dez7Sixsc6rHZJyO7OZ4STnW95vydXVDKhevM28nNdfdvr2rtGtsP8tngaKL\n/158ImBLTPUO4x5B1kZGhC/Lwy9IqCbyeDHyT2MJKA7zyIgEo2QBN+TF1wKBgQDP\nX1PJIFmtjiZFqR+n0r8hZI/iVq/V+aYPkQz3/U23IgO6qgUTF5iYBPoPdI6RwUaL\ncuskHRZGaRTnOmqvdecRWL14Eps36wsLI0m5hn6sqf4UuhLaqVRODzz8rSCxUNMn\nywWu/E/cpCuSocC1k5pE6jKHZObmT+xyryM0N/yb5QKBgQDG4NTsmfkOoPpp9WoI\nrWE07FQTwX3IOiyt6YRBHVf90nsoou07d31nZt3a8yT2+FSfxid0JiOuSFTbHqfw\ni01OISHWGFxEXYJKg32Sn50SObI3wa09K2UnZTX3ZsgjLnnWPFQUpAGejJffbK1/\nBrB5Q12YdyosTL7MEPxvwELqmA==\n-----END PRIVATE KEY-----";
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