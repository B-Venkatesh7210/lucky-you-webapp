import { NFTStorage, File } from "nft.storage";
// import { getFilesFromPath } from "files-from-path";
import fs from "fs";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFDQmEwMDVCYTM5YTVhMzEwQzVCNDk5RTQ1NWNGNkY4QzJmMjA0YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODA5MjU4NDY5MCwibmFtZSI6Ikx1Y2t5WW91In0.Fl1UK3_0oJl0N1q8EFLS4mf-dPbtw8bresyBoVyeJwo",
});

async function main() {
  let file = new File(
    [fs.readFileSync("../../img/Ethereum.png")],
    "LuckyYou-Logo.jpg",
    {
      type: "image/png",
    }
  );
  const metadata = await client.store({
    name: "LuckYou Winner Nft",
    description: "hey you are the winner and this is your nft",
    address: "",
    image: file,
  });
  console.log("metadata:", metadata.ipnft);
  console.log("metadata url : ", metadata.url);
  console.log("metadata json data: ", metadata.data);
}

main();
