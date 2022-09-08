import { teamList } from "./teams.js";



console.log("\n");


teamList.map((item, i) => {
    console.log(`Team Name           Team Code        Player1     Player2     Player3    `);
    console.log(`${item.name}               ${item.code}         ${item.players[0]}      ${item.players[1]}      ${item.players[2]}`);

    console.log(`Budget for team: ${item.Budget.forTeam} | Budget for Players: ${item.Budget.forPlayer}`);
    console.log("\n");
})